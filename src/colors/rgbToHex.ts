import { isRgb } from ".";

export default function rgbToHex(rgb: string): string {
  if (!isRgb(rgb)) {
    return;
  }

  const channels = rgb.split(",");
  const hex = channels.slice(0, 3).map((channel, index) =>
    Number(channel).toString(16).padStart(2, "0")
  );

  if (channels.length === 4) {
    hex.push(Math.floor(Number.parseFloat(channels[3]) * 255).toString(16));
  }

  return hex.join("");
}