(function () {
  if (!window.__kfPwa && !document.querySelector('script[src*="js/pwa.js"]')) {
    const path = location.pathname.replace(/\\/g, "/");
    const htmlIdx = path.indexOf("/html/");
    const root = htmlIdx >= 0 ? path.slice(0, htmlIdx + 6) : "/";
    const s = document.createElement("script");
    s.src = root + "js/pwa.js";
    document.head.appendChild(s);
  }

  // Product photos are not on Cloudflare — rewrite to GitHub CDN in production.
  (function rewriteProductImages() {
    if (/^(localhost|127\.0\.0\.1)$/i.test(location.hostname)) return;
    const base = "https://cdn.jsdelivr.net/gh/qjy0126/hipobuyspreadsheet@main/html/img/products/";
    const run = () => {
      document.querySelectorAll("img[src*='products/']").forEach((img) => {
        const src = img.getAttribute("src") || "";
        const m = src.match(/(\d+)\.webp/i);
        if (m) img.src = base + m[1] + ".webp";
      });
    };
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", run);
    else run();
  })();

  if (document.querySelector(".discord-tab")) return;
  const href =
    (window.KF && KF.site && KF.site.discord) || "https://discord.gg/7DRMaMAADv";
  const a = document.createElement("a");
  a.className = "discord-tab";
  a.href = href;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute("aria-label", "Join Discord");
  a.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14 14 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.9.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.899.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.8 19.8 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418"/></svg>';
  const mount = () => document.body && document.body.appendChild(a);
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mount);
  else mount();
})();
