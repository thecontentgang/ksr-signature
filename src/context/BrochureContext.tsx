import { useState, useCallback, type ReactNode } from 'react';
import type { BrochureModalState } from '../types/brochure';
import { downloadBrochureFile, DEFAULT_BROCHURE_URL, DEFAULT_BROCHURE_NAME } from '../utils/brochureDownload';
import { BrochureContext, type OpenLeadModalOptions, type OpenDirectDownloadOptions } from './brochureContextDef';

export function BrochureProvider({ children }: { children: ReactNode }) {
  const [modalState, setModalState] = useState<BrochureModalState>({
    isOpen: false,
    brochureUrl: DEFAULT_BROCHURE_URL,
    brochureName: DEFAULT_BROCHURE_NAME,
    isBrochureDownload: true
  });

  const openLeadModal = useCallback((options?: OpenLeadModalOptions) => {
    setModalState({
      isOpen: true,
      brochureUrl: options?.brochureUrl || DEFAULT_BROCHURE_URL,
      brochureName: options?.brochureName || DEFAULT_BROCHURE_NAME,
      isBrochureDownload: options?.isBrochureDownload !== undefined ? options.isBrochureDownload : true
    });
  }, []);

  const openDirectDownload = useCallback((options?: OpenDirectDownloadOptions) => {
    const url = options?.brochureUrl || DEFAULT_BROCHURE_URL;
    const name = options?.brochureName || DEFAULT_BROCHURE_NAME;
    downloadBrochureFile(url, name);
  }, []);

  const closeModal = useCallback(() => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false
    }));
  }, []);

  return (
    <BrochureContext.Provider
      value={{
        modalState,
        openLeadModal,
        openDirectDownload,
        closeModal
      }}
    >
      {children}
    </BrochureContext.Provider>
  );
}

export { BrochureContext };
export type { OpenLeadModalOptions, OpenDirectDownloadOptions, BrochureContextType } from './brochureContextDef';
