import { useState, type ChangeEvent, type FormEvent } from 'react';
import type { LeadFormData, ValidationErrors } from '../../types/brochure';
import { validateLeadForm } from '../../utils/validation';
import { sendLeadEmail } from '../../services/emailService';

interface LeadFormProps {
  brochureUrl?: string;
  brochureName?: string;
  isBrochureDownload?: boolean;
  onSuccess: (data: LeadFormData) => void;
}

export default function LeadForm({
  brochureUrl = '/KSR HOMES INDIA PVT LTD Brochure.pdf',
  brochureName = 'KSR Signature 4 Brochure',
  isBrochureDownload = true,
  onSuccess
}: LeadFormProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    phone: '',
    email: '',
    propertyType: '',
    message: '',
    brochureUrl,
    brochureName,
    isBrochureDownload
  });

  const [errors, setErrors] = useState<ValidationErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    // Clear specific field error on edit
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined
      }));
    }

    if (serverError) {
      setServerError(null);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // Client-side validation
    const { isValid, errors: validationErrors } = validateLeadForm(formData);
    if (!isValid) {
      setErrors(validationErrors);
      // Focus first error field for accessibility
      const firstErrorKey = Object.keys(validationErrors)[0];
      const errorElement = document.getElementById(firstErrorKey);
      errorElement?.focus();
      return;
    }

    setIsSubmitting(true);

    try {
      const submissionData: LeadFormData = {
        ...formData,
        brochureUrl,
        brochureName,
        isBrochureDownload,
        pageUrl: typeof window !== 'undefined' ? window.location.href : '',
        submittedAt: new Date().toISOString()
      };

      const result = await sendLeadEmail(submissionData);

      if (result.success) {
        onSuccess(submissionData);
      } else {
        setServerError(
          result.message || 'Something went wrong. We could not submit your details right now. Please try again.'
        );
      }
    } catch (err: unknown) {
      console.error('Unexpected lead submission error:', err);
      setServerError('An unexpected error occurred. Please check your internet connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-5 sm:p-6 flex flex-col gap-3.5" noValidate>
      {/* Server Error Alert */}
      {serverError && (
        <div
          role="alert"
          aria-live="assertive"
          className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-xs sm:text-sm flex items-start gap-2.5 animate-shake"
        >
          <svg
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z"
            />
          </svg>
          <div className="flex-1">
            <p className="font-bold">Submission Failed</p>
            <p className="text-xs mt-0.5 text-red-600">{serverError}</p>
          </div>
        </div>
      )}

      {/* Full Name */}
      <div>
        <label htmlFor="name" className="block text-xs font-bold text-ksr-dark mb-1">
          Full Name <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          autoComplete="name"
          placeholder="Enter your full name"
          disabled={isSubmitting}
          aria-required="true"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={`w-full h-[44px] px-3.5 text-sm bg-slate-50 border rounded-xl focus:outline-none transition-all text-slate-800 disabled:opacity-60 disabled:cursor-not-allowed ${
            errors.name
              ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 bg-red-50/30'
              : 'border-pearl focus:border-ksr-primary focus:ring-2 focus:ring-ksr-primary/20'
          }`}
        />
        {errors.name && (
          <p id="name-error" className="text-red-500 text-xs mt-1 font-medium flex items-center gap-1">
            <span aria-hidden="true">⚠</span> {errors.name}
          </p>
        )}
      </div>

      {/* Mobile Number */}
      <div>
        <label htmlFor="phone" className="block text-xs font-bold text-ksr-dark mb-1">
          Mobile Number <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          autoComplete="tel"
          placeholder="e.g. +91 98765 43210"
          disabled={isSubmitting}
          aria-required="true"
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? 'phone-error' : undefined}
          className={`w-full h-[44px] px-3.5 text-sm bg-slate-50 border rounded-xl focus:outline-none transition-all text-slate-800 disabled:opacity-60 disabled:cursor-not-allowed ${
            errors.phone
              ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 bg-red-50/30'
              : 'border-pearl focus:border-ksr-primary focus:ring-2 focus:ring-ksr-primary/20'
          }`}
        />
        {errors.phone && (
          <p id="phone-error" className="text-red-500 text-xs mt-1 font-medium flex items-center gap-1">
            <span aria-hidden="true">⚠</span> {errors.phone}
          </p>
        )}
      </div>

      {/* Email Address */}
      <div>
        <label htmlFor="email" className="block text-xs font-bold text-ksr-dark mb-1">
          Email Address <span className="text-slate-400 font-normal">(Optional)</span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="email"
          placeholder="Enter your email address"
          disabled={isSubmitting}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={`w-full h-[44px] px-3.5 text-sm bg-slate-50 border rounded-xl focus:outline-none transition-all text-slate-800 disabled:opacity-60 disabled:cursor-not-allowed ${
            errors.email
              ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 bg-red-50/30'
              : 'border-pearl focus:border-ksr-primary focus:ring-2 focus:ring-ksr-primary/20'
          }`}
        />
        {errors.email && (
          <p id="email-error" className="text-red-500 text-xs mt-1 font-medium flex items-center gap-1">
            <span aria-hidden="true">⚠</span> {errors.email}
          </p>
        )}
      </div>

      {/* Property Configuration */}
      <div>
        <label htmlFor="propertyType" className="block text-xs font-bold text-ksr-dark mb-1">
          Preferred Configuration <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <div className="relative">
          <select
            id="propertyType"
            name="propertyType"
            value={formData.propertyType}
            onChange={handleChange}
            disabled={isSubmitting}
            aria-required="true"
            aria-invalid={Boolean(errors.propertyType)}
            aria-describedby={errors.propertyType ? 'propertyType-error' : undefined}
            className={`w-full h-[44px] px-3.5 text-sm bg-slate-50 border rounded-xl focus:outline-none transition-all text-slate-800 appearance-none cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed ${
              errors.propertyType
                ? 'border-red-400 focus:border-red-500 focus:ring-2 focus:ring-red-200 bg-red-50/30'
                : 'border-pearl focus:border-ksr-primary focus:ring-2 focus:ring-ksr-primary/20'
            }`}
          >
            <option value="" disabled>Select Configuration</option>
            <option value="2 BHK (1122 - 1345 sft)">2 BHK Luxury Residences (1,122 - 1,345 sft)</option>
            <option value="3 BHK (1650 - 2203 sft)">3 BHK Premium Residences (1,650 - 2,203 sft)</option>
            <option value="Both / Site Visit">Interested in Site Visit & Both Options</option>
          </select>
          <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
            <svg fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </div>
        </div>
        {errors.propertyType && (
          <p id="propertyType-error" className="text-red-500 text-xs mt-1 font-medium flex items-center gap-1">
            <span aria-hidden="true">⚠</span> {errors.propertyType}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="mt-2 w-full h-[46px] inline-flex items-center justify-center gap-2 bg-ksr-primary text-white text-sm font-bold tracking-wider uppercase rounded-xl hover:bg-ksr-secondary transition-all duration-300 shadow-md hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ksr-primary disabled:opacity-75 disabled:cursor-not-allowed cursor-pointer"
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            <span>Submitting...</span>
          </>
        ) : (
          <span>
            {isBrochureDownload ? 'Get Instant Brochure' : 'Submit Enquiry'}
          </span>
        )}
      </button>

      {/* Privacy Guarantee */}
      <p className="text-[11px] text-center text-slate-400 mt-0.5">
        🔒 100% Privacy Guaranteed. No Spam.
      </p>
    </form>
  );
}
