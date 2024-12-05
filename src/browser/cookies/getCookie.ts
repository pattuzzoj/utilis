interface CookieOptions {
  name: string;
  url?: string;
}

export default function getCookie(options: CookieOptions): undefined {
  if ("cookieStore" in window) {
    try {
      return window.cookieStore.get(options).then(cookie => cookie?.value || null);
    } catch (error) {
      console.error("Failed to get cookie using cookieStore:", error);
      return null;
    }
  } else {
    const { name, url } = options;

    const cookies = document.cookie.split("; ").reduce((acc, pair) => {
      const [key, val] = pair.split("=");
      acc[key] = decodeURIComponent(val || "");
      return acc;
    }, {} as Record<string, string>);
    return cookies[name] || null;
  }
}