window.addEventListener("scroll", () => {
  let scrollTop = document.documentElement.scrollTop;
  let maxScroll = 5000;

  let scrollPercent = scrollTop / maxScroll;

  let frame = animation.totalFrames * scrollPercent;
  animation.goToAndStop(frame, true);
});