import { isServer } from "../environment";

export default function getThemePreference() {
  if (isServer()) {
    return;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}