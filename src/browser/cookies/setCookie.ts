interface CookieOpitions {
  name: string;
  value: string;
  domain?: string;
  expires?: number;
  partitioned?: boolean;
  path?: string;
  sameSite?: "strict" | "lax" | "none";
}

export default async function setCookie(options: CookieOpitions): Promise<void> {
  if
}






















// interface CookieOptions {
//   name: string;
//   value: string;
//   domain?: string;
//   expires?: number;
//   partitioned?: boolean;
//   sameSite?: "strict" | "lax" | "none";
//   path?: string;
// }

// function setCookie(options: CookieOptions): void {
//   if ("cookieStore" in window) {
//     try {
//       window.cookieStore.set(options);
//     } catch (error) {
//       console.error("Failed to set cookie using cookieStore:", error);
//     }
//   } else {
//     let { name, value, expires = null, path = "/", domain = null, sameSite = "strict", partitioned = false } = options;

//     if (typeof expires === "number") {
//       expires = new Date(Date.now() + expires);
//     }

//     document.cookie = `${options.name}=${options.value}` +
//     (expires ? `; expires=${expires}` : '') +
//     (options.path ? `; path=${options.path}` : '; path=/') +
//     (options.domain ? `; domain=${options.domain}` : '') +
//     (options.sameSite ? `; SameSite=${options.sameSite}` : '') +
//     (options.partitioned ? '; partitioned' : '') +
//     (window.location.protocol === 'https:' ? '; secure' : '');
//   }
// }


















