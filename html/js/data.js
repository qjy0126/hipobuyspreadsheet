window.KF = window.KF || {};

KF.site = {
  name: "Hipobuy Spreadsheet",
  domain: "hipobuyspreadsheet.me",
  origin: "",
  updated: "Sep 2026",
  discord: "https://discord.gg/7DRMaMAADv",
};

// Live Server may host this folder at /html/ or at /. Prefer the page URL.
KF.root = (function () {
  const p = location.pathname.replace(/\\/g, "/");
  const htmlIdx = p.indexOf("/html/");
  if (htmlIdx >= 0) return p.slice(0, htmlIdx + 6);
  try {
    const scripts = document.getElementsByTagName("script");
    for (let i = 0; i < scripts.length; i++) {
      const raw = scripts[i].getAttribute("src") || "";
      if (!raw || !/js\/(?:data|catalog|shop|filter)\.js(?:\?|$)/.test(raw)) continue;
      return new URL(raw, location.href).pathname.replace(/\/js\/[^/]+$/, "/");
    }
  } catch (e) {}
  return "/";
})();

KF.cdn = "https://cdn.jsdelivr.net/gh/qjy0126/hipobuyspreadsheet@main/html/";

KF.asset = (path) => {
  const s = String(path || "");
  if (!s) return s;
  if (/^https?:\/\//i.test(s)) return s;
  const rel = s.replace(/^\.\//, "").replace(/^\//, "");
  // Product photos stay on GitHub CDN (too large for Cloudflare Workers assets).
  if (/^img\/products\//i.test(rel) && !/^(localhost|127\.0\.0\.1)$/i.test(location.hostname)) {
    return KF.cdn + rel;
  }
  return KF.root + rel;
};

KF.rewriteProductImages = function () {
  if (/^(localhost|127\.0\.0\.1)$/i.test(location.hostname)) return;
  const base = KF.cdn + "img/products/";
  document.querySelectorAll("img[src*='products/']").forEach((img) => {
    const src = img.getAttribute("src") || "";
    const m = src.match(/(\d+)\.webp/i);
    if (m) img.src = base + m[1] + ".webp";
  });
};

KF.slugify = (text) => String(text || "")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-+|-+$/g, "")
  .replace(/-+/g, "-")
  .slice(0, 60);

KF.itemSlug = (p) => {
  const id = String((p && p.id) || "").replace(/^p-/, "");
  const base = KF.slugify(p && p.title);
  return (base ? base + "-" : "") + id;
};
KF.itemPath = (p) => {
  const file = "item/" + KF.itemSlug(p) + "/index.html";
  const path = location.pathname.replace(/\\/g, "/");
  if (/\/(item|guides|agents|c)\//.test(path)) return KF.root + file;
  return file;
};
KF.catPath = (slug) => (slug ? "browse.html?cat=" + encodeURIComponent(slug) : "browse.html");
KF.findsPath = () => "browse.html";
KF.brandSlug = (name) => KF.slugify(name);

KF.nav = {
  apparel: [
    { slug: "shoes", label: "Shoes" },
    { slug: "t-shirts", label: "T-Shirts" },
    { slug: "hoodies", label: "Hoodies" },
    { slug: "jackets", label: "Jackets" },
    { slug: "pants", label: "Pants/Shorts" },
    { slug: "sets", label: "Sets" },
    { slug: "jersey", label: "Jersey" },
  ],
  lifestyle: [
    { slug: "headwear", label: "Headwear" },
    { slug: "watches", label: "Watches" },
    { slug: "accessories", label: "Accessories" },
    { slug: "other", label: "Other" },
  ],
};

KF.categories = [
  { slug: "shoes", label: "Shoes" },
  { slug: "t-shirts", label: "T-Shirts" },
  { slug: "hoodies", label: "Hoodies" },
  { slug: "jackets", label: "Jackets" },
  { slug: "pants", label: "Pants/Shorts" },
  { slug: "headwear", label: "Headwear" },
  { slug: "sets", label: "Sets" },
  { slug: "jersey", label: "Jersey" },
  { slug: "accessories", label: "Accessories" },
  { slug: "watches", label: "Watches" },
  { slug: "other", label: "Other" },
];

KF.products = KF.products || [];

KF.productCats = (p) => {
  const cats = [p.category].concat(p.categories || []).filter(Boolean);
  const seen = {};
  return cats.filter((c) => (seen[c] ? false : (seen[c] = true)));
};
KF.inCategory = (p, slug) => {
  if (!slug) return true;
  if (slug === "jeans" || slug === "shorts" || slug === "pants-shorts") {
    return KF.inCategory(p, "pants") || /jean|short/i.test(p.title || "");
  }
  if (slug === "jerseys") return KF.inCategory(p, "jersey");
  if (slug === "hats") return KF.inCategory(p, "headwear");
  if (slug === "belts" || slug === "jewelry" || slug === "bags") {
    return KF.inCategory(p, "accessories") || new RegExp(slug.replace(/s$/, ""), "i").test(p.title || "");
  }
  if (slug === "headphones" || slug === "electronics") {
    return /headphone|airpod|earbud|watch|tech/i.test(p.title || "") || p.category === "other";
  }
  return KF.productCats(p).includes(slug);
};

KF.money = (n) => `$${Number(n).toFixed(2)}`;
KF.invite = { hipobuy: "FINDS25" };

KF.listing = (sourceUrl) => {
  const url = String(sourceUrl || "");
  const weidian = url.match(/itemID=(\d+)/i);
  if (weidian || /weidian\.com/i.test(url)) {
    const id = weidian ? weidian[1] : "";
    const raw = id ? `https://weidian.com/item.html?itemID=${id}` : url;
    return { id, channel: "weidian", platform: "WEIDIAN", source: "WD", path: "weidian", url: raw };
  }
  const tb = url.match(/[?&]id=(\d+)/i);
  if (/taobao\.com|tmall\.com/i.test(url)) {
    return { id: tb ? tb[1] : "", channel: "taobao", platform: "TAOBAO", source: "TB", path: "taobao", url };
  }
  const ali = url.match(/offer\/(\d+)/i);
  if (/1688\.com/i.test(url)) {
    return { id: ali ? ali[1] : "", channel: "1688", platform: "1688", source: "AL", path: "1688", url };
  }
  return { id: "", channel: "weidian", platform: "WEIDIAN", source: "WD", path: "weidian", url };
};

KF.agentUrl = (sourceUrl) => {
  const L = KF.listing(sourceUrl);
  const enc = encodeURIComponent(L.url);
  if (L.id) {
    return `https://hipobuy.com/product/${L.path}/${L.id}?source=SEARCH_LIST&keyword=${enc}&inviteCode=${KF.invite.hipobuy}`;
  }
  return L.url;
};
KF.kakobuyUrl = KF.agentUrl;

KF.itemName = (p) => String((p && p.title) || "").replace(/\s+/g, " ").trim().slice(0, 100);
KF.track = () => {};
KF.ui = KF.ui || {};

KF.mountDiscord = function () {
  if (document.querySelector(".discord-tab")) return;
  const a = document.createElement("a");
  a.className = "discord-tab";
  a.href = KF.site.discord;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.setAttribute("aria-label", "Join Discord");
  a.innerHTML =
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M20.317 4.37a19.8 19.8 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.3 18.3 0 0 0-5.487 0 12.6 12.6 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.7 19.7 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14 14 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.1 13.1 0 0 1-1.872-.9.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.3 12.3 0 0 1-1.873.899.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.8 19.8 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418m7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418"/></svg>';
  document.body.appendChild(a);
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => {
    KF.mountDiscord();
    KF.rewriteProductImages();
  });
} else {
  KF.mountDiscord();
  KF.rewriteProductImages();
}

(function loadPwa() {
  if (window.__kfPwa || document.querySelector('script[src*="js/pwa.js"]')) return;
  const s = document.createElement("script");
  s.src = KF.root + "js/pwa.js";
  document.head.appendChild(s);
})();
