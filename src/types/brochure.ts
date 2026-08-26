import { type ReactNode, type ButtonHTMLAttributes } from 'react';

export interface LeadFormData {
  name: string;
  phone: string;
  email: string;
  propertyType: string;
  company?: string;
  message?: string;
  brochureName?: string;
  brochureUrl?: string;
  pageUrl?: string;
  submittedAt?: string;
  isBrochureDownload?: boolean;
}

export type BrochureButtonType = 'direct' | 'lead';

export type BrochureButtonVariant = 
  | 'primary' 
  | 'secondary' 
  | 'outline' 
  | 'navbar' 
  | 'subtle' 
  | 'custom';

export type BrochureButtonSize = 'sm' | 'md' | 'lg';

export interface BrochureButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'> {
  type?: BrochureButtonType;
  brochureUrl?: string;
  brochureName?: string;
  label?: string;
  variant?: BrochureButtonVariant;
  size?: BrochureButtonSize;
  icon?: ReactNode;
  showIcon?: boolean;
  onDirectDownload?: (url: string, name: string) => void;
  onOpenLeadForm?: (url: string, name: string) => void;
  children?: ReactNode;
}

export interface BrochureModalState {
  isOpen: boolean;
  brochureUrl: string;
  brochureName: string;
  isBrochureDownload: boolean;
}

export interface ValidationErrors {
  name?: string;
  phone?: string;
  email?: string;
  propertyType?: string;
  message?: string;
  [key: string]: string | undefined;
}
