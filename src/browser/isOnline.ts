import { isServer } from "../environment";

export default function isOnline() {
  if (isServer()) {
    return;
  }

  return navigator.onLine;
}