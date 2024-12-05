import { isBrowser } from "../environment";

export default function isClipboardAvailable() {
  if (!isBrowser()) {
    return;
  }

  return navigator.clipboard ? true : false;
}