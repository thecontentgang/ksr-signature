import type { LeadFormData, ValidationErrors } from '../types/brochure';

/**
 * Validates lead form input fields.
 */
export function validateLeadForm(data: LeadFormData): { isValid: boolean; errors: ValidationErrors } {
  const errors: ValidationErrors = {};

  // Full Name validation
  const trimmedName = data.name ? data.name.trim() : '';
  if (!trimmedName) {
    errors.name = 'Full name is required';
  } else if (trimmedName.length < 2) {
    errors.name = 'Name must be at least 2 characters';
  } else if (trimmedName.length > 80) {
    errors.name = 'Name cannot exceed 80 characters';
  }

  // Mobile / Phone validation
  const trimmedPhone = data.phone ? data.phone.trim() : '';
  // Strip out spaces, dashes, parentheses, plus for digit count
  const cleanDigits = trimmedPhone.replace(/[\s\-()+]/g, '');
  if (!trimmedPhone) {
    errors.phone = 'Mobile number is required';
  } else if (cleanDigits.length < 10) {
    errors.phone = 'Please enter a valid 10-digit mobile number';
  } else if (!/^[0-9+\s\-()]{10,20}$/.test(trimmedPhone)) {
    errors.phone = 'Invalid phone number format';
  }

  // Email Address validation (if provided, must be valid)
  const trimmedEmail = data.email ? data.email.trim() : '';
  if (trimmedEmail) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(trimmedEmail)) {
      errors.email = 'Please enter a valid email address';
    } else if (trimmedEmail.length > 100) {
      errors.email = 'Email address is too long';
    }
  }

  // Property Type validation
  const trimmedPropertyType = data.propertyType ? data.propertyType.trim() : '';
  if (!trimmedPropertyType) {
    errors.propertyType = 'Please select a preferred property configuration';
  }

  // Message length check (if provided)
  if (data.message && data.message.length > 1000) {
    errors.message = 'Message must be less than 1000 characters';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
