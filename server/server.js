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

    // Email to admin (you)
    const adminMailOptions = {
      from: `"Contact Form" <${process.env.EMAIL_USER || 'tusharsinghoffical@gmail.com'}>`,
      to: process.env.EMAIL_USER || 'tusharsinghoffical@gmail.com',
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Company:</strong> ${company || 'N/A'}</p>
        <p><strong>Service Interested In:</strong> ${service || 'N/A'}</p>
        <p><strong>Budget/Language:</strong> ${budget || 'N/A'}</p>
        <p><strong>Timeline:</strong> ${timeline || 'N/A'}</p>
        <p><strong>Priority:</strong> ${priority || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Sent via your website contact form on ${new Date().toLocaleString()}</em></p>
      `
    };

    // Confirmation email to user
    const userMailOptions = {
      from: `"Tushar Singh" <${process.env.EMAIL_USER || 'tusharsinghoffical@gmail.com'}>`,
      to: email,
      subject: 'Thank You for Contacting Tushar Singh',
      html: `
        <h2>Hello ${name},</h2>
        <p>Thank you for reaching out to me. I have received your message and will get back to you as soon as possible.</p>
        <p>In the meantime, here's a summary of your message:</p>
        <blockquote style="padding: 10px; background-color: #f9f9f9; border-left: 3px solid #ccc;">
          ${message.replace(/\n/g, '<br>')}
        </blockquote>
        <p>I typically respond within 24 hours. If you need urgent assistance, please feel free to call me at your convenience.</p>
        <p>Best regards,<br>Tushar Singh<br>Freelance Data Scientist & Full-Stack Developer</p>
        <hr>
        <p><em>This is an automated response. Please do not reply to this email directly.</em></p>
      `
    };

    // Try primary transporter first
    try {
      await transporter.sendMail(adminMailOptions);
      await transporter.sendMail(userMailOptions);
    } catch (primaryError) {
      console.error('Primary transporter failed:', primaryError);
      // Try fallback transporter
      console.log('Trying fallback transporter...');
      try {
        await fallbackTransporter.sendMail(adminMailOptions);
        await fallbackTransporter.sendMail(userMailOptions);
      } catch (fallbackError) {
        console.error('Fallback transporter also failed:', fallbackError);
        // If both fail, throw the original error
        throw primaryError;
      }
    }

    res.status(200).json({ message: 'Emails sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    console.error('Error details:', {
      code: error.code,
      command: error.command,
      message: error.message
    });
    res.status(500).json({ 
      error: 'Failed to send email. Please try again later.',
      details: process.env.NODE_ENV === 'production' ? 'Internal server error' : error.message
    });
  }
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
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