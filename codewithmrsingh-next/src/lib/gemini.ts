
import { GoogleGenAI } from "@google/genai";

/**
 * Basic chat function using standard Gemini models.
 * Used by the AiChatAssistant component.
 */
export const chatWithGemini = async (message: string, fastMode: boolean = false) => {
  // Create a new instance right before making the API call to ensure it always uses the most up-to-date API key.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  // Using recommended model aliases: 'gemini-flash-lite-latest' for fast tasks, 'gemini-3-pro-preview' for complex ones.
  const model = fastMode ? 'gemini-flash-lite-latest' : 'gemini-3-pro-preview';
  
  const response = await ai.models.generateContent({
    model,
    contents: message,
    config: {
        systemInstruction: "You are the AI Assistant for 'Code with Mr. Singh' (Tushar Singh). You are knowledgeable about Data Science, n8n automation, Python, Django, and React. Be professional, technical, and concise. Your goal is to help visitors understand Tushar's expertise and portfolio."
    }
  });
  
  // Access the .text property directly as per guidelines.
  return response.text;
};

/**
 * Advanced reasoning function using Gemini 3 Pro with thinking budget.
 * Used by the AiLab component.
 */
export const thinkDeeply = async (prompt: string) => {
  // Create a new instance right before making the API call to ensure it always uses the most up-to-date API key.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // Complex Text Tasks (e.g., advanced reasoning, coding): 'gemini-3-pro-preview'
  const response = await ai.models.generateContent({
    model: "gemini-3-pro-preview",
    contents: prompt,
    config: {
      // Thinking Config is only available for the Gemini 3 and 2.5 series models.
      // Max thinking budget for gemini-3-pro-preview is 32768.
      thinkingConfig: { thinkingBudget: 32768 } 
    },
  });
  
  // Use .text property directly.
  return response.text;
};

/**
 * High-quality image generation using Gemini 3 Pro Image.
 * Used by the AiLab component.
 */
export const generateImage = async (prompt: string, aspectRatio: string = '1:1') => {
  // Create a new instance right before making the API call to ensure it always uses the most up-to-date API key.
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  // High-Quality Image Generation Tasks: 'gemini-3-pro-image-preview'
  const response = await ai.models.generateContent({
    model: 'gemini-3-pro-image-preview',
    contents: {
      parts: [
        {
          text: prompt,
        },
      ],
    },
    config: {
      imageConfig: {
        // Supported values are "1:1", "3:4", "4:3", "9:16", and "16:9".
        aspectRatio: aspectRatio as any,
        // Supported values are "1K", "2K", and "4K".
        imageSize: "1K"
      },
    },
  });

  // The output response may contain both image and text parts; iterate through all parts to find the image part.
  const candidates = response.candidates;
  if (candidates && candidates.length > 0 && candidates[0].content) {
    const content = candidates[0].content;
    if (content.parts) {
      for (const part of content.parts) {
        if (part.inlineData) {
          const base64EncodeString: string = part.inlineData.data || '';
          const mimeType = part.inlineData.mimeType || 'image/png';
          return `data:${mimeType};base64,${base64EncodeString}`;
        }
      }
    }
  }
  
  throw new Error("No image was returned by the model.");
};
