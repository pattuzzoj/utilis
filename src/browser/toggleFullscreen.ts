export default function toggleFullscreen(elem: HTMLElement) {
  if (!document.fullscreenEnabled) return;

  if (document.fullscreenElement === elem) {
    document.exitFullscreen();
  } else {
    elem.requestFullscreen();
  }
}