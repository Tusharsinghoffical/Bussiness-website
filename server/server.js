const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.CLIENT_URL || 'https://codewithmrsingh.me'] 
    : ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:3002', 'http://localhost:5173', 'http://localhost:5174']
}));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// Serve static files from the 'dist' folder
app.use(express.static(path.join(__dirname, '../dist')));

// Nodemailer transporter - Gmail configuration
const gmailTransporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER || 'tusharsinghoffical@gmail.com',
    pass: process.env.EMAIL_PASS || 'augx iyvt evab hxnc'
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Fallback transporter - Direct SMTP
const fallbackTransporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER || 'tusharsinghoffical@gmail.com',
    pass: process.env.EMAIL_PASS || 'augx iyvt evab hxnc'
  }
});

// Use Gmail transporter as default
let transporter = gmailTransporter;

// Contact form route
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, phone, company, service, budget, timeline, priority, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Create notification message
    const notificationMessage = `
📱 NEW CONTACT FORM SUBMISSION

Name: ${name}
Email: ${email}
Phone: ${phone || 'N/A'}
Company: ${company || 'N/A'}
Service: ${service || 'N/A'}
Budget/Language: ${budget || 'N/A'}
Timeline: ${timeline || 'N/A'}
Priority: ${priority || 'N/A'}

Message:
${message}

---
Sent via website contact form
Time: ${new Date().toLocaleString()}
    `;

    // Log the submission (works even if email fails)
    console.log('=== NEW CONTACT FORM SUBMISSION ===');
    console.log(notificationMessage);
    console.log('====================================');

    // Send webhook notification (backup notification method)
    try {
      const webhookData = {
        content: `**New Contact Form Submission**\n\n**Name:** ${name}\n**Email:** ${email}\n**Phone:** ${phone || 'N/A'}\n**Message:** ${message.substring(0, 1000)}`,
        username: 'Website Contact Form',
        avatar_url: 'https://codewithmrsingh.me/logo/Untitled design.png'
      };
      
      // You can add a Discord webhook URL here if you want notifications
      // const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
      // if (webhookUrl) {
      //   await fetch(webhookUrl, {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify(webhookData)
      //   });
      // }
    } catch (webhookError) {
      console.error('Webhook notification failed:', webhookError.message);
    }

    // Try to send email (best effort)
    try {
      const adminMailOptions = {
        from: `"Contact Form" <${process.env.EMAIL_USER || 'tusharsinghoffical@gmail.com'}>`,
        to: process.env.EMAIL_USER || 'tusharsinghoffical@gmail.com',
        subject: `New Contact Form Submission from ${name}`,
        text: notificationMessage
      };

      const userMailOptions = {
        from: `"Tushar Singh" <${process.env.EMAIL_USER || 'tusharsinghoffical@gmail.com'}>`,
        to: email,
        subject: 'Thank You for Contacting Tushar Singh',
        text: `Hello ${name},\n\nThank you for reaching out to me. I have received your message and will get back to you as soon as possible.\n\nBest regards,\nTushar Singh\n\nThis is an automated response.`
      };

      // Try sending emails (non-blocking)
      Promise.all([
        transporter.sendMail(adminMailOptions).catch(err => {
          console.error('Admin email failed:', err.message);
          return null;
        }),
        fallbackTransporter.sendMail(userMailOptions).catch(err => {
          console.error('User email failed:', err.message);
          return null;
        })
      ]).then(() => {
        console.log('Email attempts completed');
      });

    } catch (emailError) {
      console.error('Email system error:', emailError.message);
      // Don't fail the request if email fails
    }

    // Always succeed the API call
    res.status(200).json({ 
      message: 'Thank you for your message! I will contact you soon.',
      received: true,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error processing contact form:', error);
    res.status(500).json({ 
      error: 'Failed to process your message. Please try again later.',
      details: process.env.NODE_ENV === 'production' ? 'Internal server error' : error.message
    });
  }
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    services: {
      email: 'Configured (may have network issues)',
      api: 'Working',
      frontend: 'Available via static site'
    }
  });
});

// Email test route
app.get('/test-email', async (req, res) => {
  const results = {};
  
  // Test Gmail transporter
  try {
    await gmailTransporter.verify();
    results.gmail = 'OK';
  } catch (error) {
    console.error('Gmail test failed:', error.message);
    results.gmail = `Failed: ${error.message}`;
  }
  
  // Test fallback transporter
  try {
    await fallbackTransporter.verify();
    results.fallback = 'OK';
  } catch (error) {
    console.error('Fallback test failed:', error.message);
    results.fallback = `Failed: ${error.message}`;
  }
  
  const overallStatus = results.gmail === 'OK' || results.fallback === 'OK' ? 'OK' : 'Failed';
  
  res.status(200).json({ 
    status: overallStatus,
    transporters: results,
    user: process.env.EMAIL_USER || 'Not set',
    timestamp: new Date().toISOString() 
  });
});

// Serve index.html for any other routes (for SPA)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});