export default function getOS(): string {
  if (typeof navigator === "undefined") return "Unknown";

  const userAgentData = navigator.userAgentData;
  const userAgent = navigator.userAgent || "";
  const platform = navigator.platform || "";

  if (userAgentData?.platform) {
    return userAgentData.platform;
  }

  if (/Android/i.test(userAgent)) return "Android";
  if (/iPhone|iPad|iPod/i.test(userAgent)) return "iOS";
  if (/Linux/i.test(userAgent)) return "Linux";
  if (/Windows/i.test(userAgent)) return "Windows";
  if (/Mac/i.test(userAgent)) return "MacOS";
  
  if (/Linux/i.test(platform)) return "Linux";
  if (/Win/i.test(platform)) return "Windows";
  if (/Mac/i.test(platform)) return "MacOS";

  return "Unknown";
}
