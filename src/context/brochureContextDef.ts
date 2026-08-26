import { createContext } from 'react';
import type { BrochureModalState } from '../types/brochure';

export interface OpenLeadModalOptions {
  brochureUrl?: string;
  brochureName?: string;
  isBrochureDownload?: boolean;
}

export interface OpenDirectDownloadOptions {
  brochureUrl?: string;
  brochureName?: string;
}

export interface BrochureContextType {
  modalState: BrochureModalState;
  openLeadModal: (options?: OpenLeadModalOptions) => void;
  openDirectDownload: (options?: OpenDirectDownloadOptions) => void;
  closeModal: () => void;
}

export const BrochureContext = createContext<BrochureContextType | undefined>(undefined);
