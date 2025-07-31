import { RequestHandler } from "express";

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

export const handleContactForm: RequestHandler = async (req, res) => {
  try {
    const { name, email, subject, message }: ContactFormData = req.body;

    // Basic validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Please provide a valid email address'
      });
    }

    // Here you would implement actual email sending logic
    // For example, using nodemailer, SendGrid, or another email service
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message,
      timestamp: new Date().toISOString()
    });

    // Simulate email sending delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const response: ContactResponse = {
      success: true,
      message: 'Thank you for your message! I will get back to you soon.'
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('Contact form error:', error);
    
    const response: ContactResponse = {
      success: false,
      message: 'Sorry, there was an error sending your message. Please try again later.'
    };

    res.status(500).json(response);
  }
};
