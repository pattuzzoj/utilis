import { hslToRgb, isHsl, rgbToHex } from ".";

export default function hslToHex(hsl: string): string {
  if (!isHsl(hsl)) {
    return null;
  }

  return rgbToHex(hslToRgb(hsl));
}