export const DEFAULT_BROCHURE_URL = "/KSR HOMES INDIA PVT LTD Brochure.pdf";
export const DEFAULT_BROCHURE_NAME = "KSR Signature 4 Brochure";

/**
 * Triggers a direct browser file download for a brochure.
 * 
 * @param url URL to the brochure PDF (relative or absolute)
 * @param filename Desired download filename
 * @returns boolean indicating success
 */
export function downloadBrochureFile(url?: string, filename?: string): boolean {
  try {
    const targetUrl = url && url.trim() !== '' ? url : DEFAULT_BROCHURE_URL;
    
    // Extract a clean download filename
    let downloadName = filename;
    if (!downloadName) {
      if (targetUrl === DEFAULT_BROCHURE_URL) {
        downloadName = "KSR_Signature4_Brochure.pdf";
      } else {
        const urlParts = targetUrl.split('/');
        const rawName = urlParts[urlParts.length - 1] || 'Brochure.pdf';
        downloadName = rawName.endsWith('.pdf') ? rawName : `${rawName}.pdf`;
      }
    }

    if (!downloadName.toLowerCase().endsWith('.pdf')) {
      downloadName += '.pdf';
    }

    const link = document.createElement('a');
    link.href = targetUrl;
    link.download = downloadName;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    // Style invisible to prevent layout shifts
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    
    // Cleanup with a microtask delay to ensure browser triggers download
    setTimeout(() => {
      if (document.body.contains(link)) {
        document.body.removeChild(link);
      }
    }, 100);

    return true;
  } catch (error) {
    console.error("Failed to trigger brochure download:", error);
    return false;
  }
}
