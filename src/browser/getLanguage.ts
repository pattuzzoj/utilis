import { isServer } from "../environment";

export default function getLanguagePreference() {
  if (isServer()) {
    return;
  }

  return navigator.language;
}