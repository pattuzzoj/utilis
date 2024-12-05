import { chunk } from "../array";
import { isHex } from ".";

export default function hexToRgb(hex: string): string {
  if(!isHex(hex)) {
    return null;
  }

  const channels = hex.length > 4 ? chunk(hex, 2) : chunk(hex, 1) as any;
  const rgb = channels.slice(0, 3).map((channel: string) =>
    Number.parseInt(channel.padEnd(2, channel), 16)
  );

  if(channels.length === 4) {
    rgb.push(Math.trunc((Number.parseInt(channels[3], 16) / 255) * 100) / 100);
  }

  return rgb.join(", ");
}