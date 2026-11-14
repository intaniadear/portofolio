/**
 * Utility untuk enkripsi ringan (obfuscation) data pribadi (PII)
 * Mencegah bot scraper otomatis memanen email dan nomor telepon dari raw HTML / git repo.
 */

export function decodeData(encoded: string): string {
  if (typeof window === 'undefined') return '';
  try {
    return decodeURIComponent(
      atob(encoded)
        .split('')
        .map((c) => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
  } catch {
    return atob(encoded);
  }
}

export function encodeData(raw: string): string {
  return btoa(
    encodeURIComponent(raw).replace(/%([0-9A-F]{2})/g, (_, p1) =>
      String.fromCharCode(parseInt(p1, 16))
    )
  );
}

// Obfuscated identifiers
export const OBFUSCATED_CONTACTS = {
  // raw: intaniadear@gmail.com
  email: 'aW50YW5pYWRlYXJAZ21haWwuY29t',
  // raw: +62 895-4227-19705
  phoneDisplay: 'KzYyIDg5NS00MjI3LTE5NzA1',
  // raw: 62895422719705
  whatsappNumber: 'NjI4OTU0MjI3MTk3MDU=',
};
