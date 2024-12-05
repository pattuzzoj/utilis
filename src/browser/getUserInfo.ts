import { isBrowser } from "../environment";

export default function getUserInfo() {
  if (!isBrowser()) {
    return;
  }

  return {
    browser: {
      name: navigator?.userAgentData?.brands?.[2]?.brand || "Unknown",
      version: navigator?.userAgentData?.brands?.[2]?.version || "Unknown",
      language: navigator.language || "Unknown",
      languages: navigator.languages || [],
      cookieEnabled: navigator.cookieEnabled,
      online: navigator.onLine,
    },
    device: {
      threads: navigator.hardwareConcurrency || 0,
      memory: navigator.deviceMemory || 0,
      screen: {
        width: screen?.width || 0,
        height: screen?.height || 0,
        colorDepth: screen?.colorDepth || 0,
      },
    },
    system: {
      os: navigator?.userAgentData?.platform
    }
  }
}