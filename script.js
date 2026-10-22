(() => {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.querySelector(".menu-toggle");
    const nav = document.getElementById("site-nav");

    if (toggle && nav) {
      toggle.addEventListener("click", () => {
        const isOpen = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(isOpen));
      });

      nav.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          nav.classList.remove("is-open");
          toggle.setAttribute("aria-expanded", "false");
        });
      });
    }

    const form = document.getElementById("contact-form");
    const status = document.getElementById("form-status");
    if (form && status) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();
        const data = new FormData(form);
        const name = String(data.get("name") || "").trim().slice(0, 100);
        const email = String(data.get("email") || "").trim().slice(0, 254);
        const message = String(data.get("message") || "").trim().slice(0, 2000);

        if (!name || !email || !message) {
          status.textContent = "يرجى ملء جميع الحقول.";
          return;
        }

        const subject = encodeURIComponent("رسالة من موقع أفق — " + name);
        const body = encodeURIComponent("الاسم: " + name + "\nالبريد: " + email + "\n\n" + message);
        status.textContent = "سيتم فتح تطبيق البريد لديك. لم تُرسل أي بيانات إلى الموقع.";
        window.location.href = "mailto:contact@abualmunther.dev?subject=" + subject + "&body=" + body;
      });
    }
  });
})();
