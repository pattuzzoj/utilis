import { isServer } from "..";

export default function isMobile(): boolean {
  if (isServer()) {
    return;
  }

  return navigator?.userAgentData?.mobile || /android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator?.userAgent);
} 