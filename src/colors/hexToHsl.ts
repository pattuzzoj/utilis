import { rgbToHsl, hexToRgb, isHex} from ".";

export default function hexToHsl(hex: string): string {
  if(!isHex(hex)) {
    return null;
  }

  return rgbToHsl(hexToRgb(hex));
}