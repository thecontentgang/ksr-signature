import { useContext } from 'react';
import { BrochureContext, type BrochureContextType } from '../context/brochureContextDef';

export function useBrochureModal(): BrochureContextType {
  const context = useContext(BrochureContext);
  if (!context) {
    throw new Error('useBrochureModal must be used within a BrochureProvider');
  }
  return context;
}
