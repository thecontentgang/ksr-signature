import type { MouseEvent } from 'react';
import type { BrochureButtonProps } from '../../types/brochure';
import { useBrochureModal } from '../../hooks/useBrochureModal';
import { DEFAULT_BROCHURE_URL, DEFAULT_BROCHURE_NAME } from '../../utils/brochureDownload';

export default function BrochureButton({
  type = 'lead',
  brochureUrl = DEFAULT_BROCHURE_URL,
  brochureName = DEFAULT_BROCHURE_NAME,
  label = 'Download Brochure',
  variant = 'primary',
  size = 'md',
  icon,
  showIcon = true,
  className = '',
  onClick,
  onDirectDownload,
  onOpenLeadForm,
  children,
  ...rest
}: BrochureButtonProps) {
  const { openLeadModal, openDirectDownload } = useBrochureModal();

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);

    if (type === 'direct') {
      onDirectDownload?.(brochureUrl, brochureName);
      openDirectDownload({ brochureUrl, brochureName });
    } else {
      onOpenLeadForm?.(brochureUrl, brochureName);
      openLeadModal({
        brochureUrl,
        brochureName,
        isBrochureDownload: true
      });
    }
  };

  // Base styling variants
  let variantClasses = '';
  switch (variant) {
    case 'primary':
      variantClasses =
        'bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 hover:from-amber-600 hover:to-orange-600 focus-visible:ring-orange-500';
      break;
    case 'secondary':
      variantClasses =
        'bg-ksr-primary text-white font-bold rounded-full shadow-md hover:bg-ksr-secondary hover:shadow-lg hover:-translate-y-0.5 focus-visible:ring-ksr-primary';
      break;
    case 'outline':
      variantClasses =
        'bg-sandstone/10 border-2 border-sandstone text-ksr-primary font-bold rounded-full hover:bg-sandstone hover:text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 focus-visible:ring-ksr-primary';
      break;
    case 'navbar':
      variantClasses =
        'bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:from-amber-600 hover:to-orange-600 focus-visible:ring-orange-500';
      break;
    case 'subtle':
      variantClasses =
        'bg-white/90 text-slate-800 border border-pearl hover:border-sandstone font-bold rounded-xl shadow-sm hover:shadow-md hover:text-ksr-primary focus-visible:ring-ksr-primary';
      break;
    case 'custom':
      variantClasses = '';
      break;
  }

  // Size styling
  let sizeClasses = '';
  switch (size) {
    case 'sm':
      sizeClasses = 'min-h-[38px] px-4 py-1.5 text-xs';
      break;
    case 'md':
      sizeClasses = 'min-h-[44px] px-6 py-2.5 text-sm';
      break;
    case 'lg':
      sizeClasses = 'min-h-[48px] px-8 py-3.5 text-base';
      break;
  }

  const defaultIcon = (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2.5}
      stroke="currentColor"
      className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`inline-flex items-center justify-center gap-2 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 cursor-pointer ${variantClasses} ${sizeClasses} ${className}`}
      {...rest}
    >
      {showIcon && (icon || defaultIcon)}
      {children || label}
    </button>
  );
}
