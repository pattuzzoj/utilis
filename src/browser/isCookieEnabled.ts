import { isBrowser } from "../environment";

export default function isCookieEnabled() {
  if (!isBrowser()) {
    return;
  }

  return navigator.cookieEnabled;
}