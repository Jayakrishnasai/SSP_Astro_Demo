const siteHeader = document.querySelector(".site-header");
const menuToggle = document.querySelector(".menu-toggle");
const revealNodes = document.querySelectorAll("[data-reveal]");
const yearNode = document.querySelector("#year");
const contactForm = document.querySelector(".contact__form");
const zodiacData = window.ZODIAC_DATA || null;

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (menuToggle && siteHeader) {
  menuToggle.addEventListener("click", () => {
    const isOpen = siteHeader.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  siteHeader.querySelectorAll(".site-nav a").forEach((link) => {
    link.addEventListener("click", () => {
      siteHeader.classList.remove("is-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealNodes.forEach((node) => revealObserver.observe(node));
} else {
  revealNodes.forEach((node) => node.classList.add("is-visible"));
}

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const submitButton = contactForm.querySelector("button[type='submit']");
    if (!submitButton) {
      return;
    }

    submitButton.textContent = "Request sent";
    submitButton.setAttribute("disabled", "true");
  });
}

const signNameNode = document.querySelector("#sign-name");

if (signNameNode && zodiacData) {
  const params = new URLSearchParams(window.location.search);
  const signKey = params.get("sign") || "aries";
  const sign = zodiacData[signKey] || zodiacData.aries;

  const setText = (selector, value) => {
    const node = document.querySelector(selector);
    if (node) {
      node.textContent = value;
    }
  };

  const setImage = (selector, path, altText, fallbackSymbol) => {
    const node = document.querySelector(selector);
    if (!node) {
      return;
    }

    if (node.tagName === "IMG") {
      node.src = path;
      node.alt = altText;
      node.onerror = () => {
        node.hidden = true;
        const fallback = document.querySelector("#sign-symbol-fallback");
        if (fallback) {
          fallback.hidden = false;
          fallback.textContent = fallbackSymbol;
        }
      };
      return;
    }

    node.textContent = fallbackSymbol;
  };

  const fillList = (selector, items) => {
    const node = document.querySelector(selector);
    if (!node) {
      return;
    }

    node.innerHTML = "";
    items.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item;
      node.appendChild(li);
    });
  };

  document.title = `${sign.sanskrit} | SSP Astro`;
  setImage("#sign-symbol", sign.symbolPath, `${sign.sanskrit} zodiac icon`, sign.symbol);
  setText("#sign-sanskrit", sign.sanskrit);
  setText("#sign-name", sign.name);
  setText("#sign-telugu", sign.telugu);
  setText("#sign-headline", sign.headline);
  setText("#sign-summary", sign.summary);
  setText("#sign-element", sign.element);
  setText("#sign-planet", sign.rulingPlanet);
  setText("#sign-color", sign.lucky.color);
  setText("#sign-day", sign.lucky.day);
  setText("#sign-focus", sign.lucky.focus);
  setText("#sign-personality", sign.personality);
  setText("#sign-love", sign.love);
  setText("#sign-career", sign.career);
  setText("#sign-wellness", sign.wellness);
  fillList("#sign-strengths", sign.strengths);
  fillList("#sign-challenges", sign.challenges);
}
