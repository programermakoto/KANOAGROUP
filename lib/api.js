export function initScrollAnimations() {
  if (typeof window === "undefined") return; // SSR対策

  const callback = (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("appear");
    });
  };

  const observer = new IntersectionObserver(callback, { threshold: 0.2 });

  document.querySelectorAll(".animate").forEach((target) => {
    observer.observe(target);
  });
}
