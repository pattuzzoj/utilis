interface CookieOptions {
  name: string;
  url?: string;
}

export default async function getCookie(options: CookieOptions) {
  if ("cookieStore" in window) {
    try {
      const cookie = await cookieStore.get(options);

      return cookie;
    } catch (error) {
      console.error("Failed to get cookie using cookieStore:", error);
      return null;
    }
  }
}