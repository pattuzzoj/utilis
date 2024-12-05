interface CookieOptions {
  name: string;
  domain?: string;
  path?: string;
  partitioned?: boolean;
}

export default function deleteCookie(options: CookieOptions): undefined {
  if ("cookieStore" in window) {
    try {
      window.cookieStore.delete(options);
    } catch (error) {
      console.error("Failed to delete cookie using cookieStore:", error);
    }
  } else {
    const { name, path = "/", domain = null, partitioned = false } = options;
    
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT` +
    (path ? `; path=${path}` : '; path=/') +
    (domain ? `; domain=${domain}` : '') +
    (partitioned ? '; partitioned' : '') +
    (window.location.protocol === 'https:' ? '; secure' : '');
  }
}