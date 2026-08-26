import emailjs from '@emailjs/browser';
import type { LeadFormData } from '../types/brochure';

export interface EmailServiceResult {
  success: boolean;
  message?: string;
  status?: number;
}

/**
 * Dispatches lead data to EmailJS.
 * 
 * Reusable service abstraction that decouples EmailJS configuration and
 * template mapping from UI components.
 */
export async function sendLeadEmail(data: LeadFormData): Promise<EmailServiceResult> {
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  if (!serviceId || !templateId || !publicKey) {
    console.warn(
      'EmailJS environment variables (VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY) are missing or incomplete.'
    );
  }

  const templateParams: Record<string, unknown> = {
    name: data.name?.trim() || '',
    from_name: data.name?.trim() || '',
    email: data.email?.trim() || 'Not Provided',
    user_email: data.email?.trim() || 'Not Provided',
    reply_to: data.email?.trim() || 'noreply@signature.ksrhomes.co.in',
    phone: data.phone?.trim() || '',
    mobile_number: data.phone?.trim() || '',
    property_type: data.propertyType || 'Not Specified',
    company: data.company?.trim() || 'N/A',
    message: data.message?.trim() || 'Brochure download request',
    brochure_name: data.brochureName || 'KSR Signature 4 Brochure',
    brochure_url: data.brochureUrl || '/KSR HOMES INDIA PVT LTD Brochure.pdf',
    page_url: typeof window !== 'undefined' ? window.location.href : 'https://signature.ksrhomes.co.in/',
    submitted_at: new Date().toLocaleString('en-IN', {
      dateStyle: 'medium',
      timeStyle: 'short',
      timeZone: 'Asia/Kolkata'
    }),
    lead_type: data.isBrochureDownload !== false ? 'Brochure Download Request' : 'Direct Project Enquiry'
  };

  try {
    // If running in development with dummy placeholder values and no network access to EmailJS,
    // we can still test the flow cleanly if configured.
    const isPlaceholderKey = !publicKey || publicKey.includes('your_') || publicKey === 'your_emailjs_public_key';
    
    if (isPlaceholderKey && import.meta.env.DEV) {
      console.info(
        'EmailJS using development placeholder keys. Simulating realistic network dispatch for lead submission:',
        templateParams
      );
      // Simulate network latency (800ms) for realistic UX in development
      await new Promise((resolve) => setTimeout(resolve, 800));
      return {
        success: true,
        status: 200,
        message: 'Lead submitted successfully (Dev Simulation Mode)'
      };
    }

    const response = await emailjs.send(
      serviceId,
      templateId,
      templateParams,
      { publicKey }
    );

    return {
      success: true,
      status: response.status,
      message: response.text || 'Lead submitted successfully'
    };
  } catch (error: unknown) {
    console.error('EmailJS submission failed:', error);
    
    let errorMessage = 'Could not submit your details at this time. Please try again or reach out to us directly.';
    if (error && typeof error === 'object' && 'text' in error && typeof error.text === 'string') {
      errorMessage = error.text;
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }

    return {
      success: false,
      status: 500,
      message: errorMessage
    };
  }
}
