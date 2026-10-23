(() => {
  "use strict";

  const translations = {
    ar: {
      dir: "rtl",
      lang: "ar",
      nav_home: "الرئيسية",
      nav_projects: "المشاريع",
      nav_skills: "المهارات",
      nav_philosophy: "فلسفة العمل",
      nav_contact: "تواصل معي",
      lang_btn: "English",
      brand_sub: "Dev & Security",
      status_avail: "متاح للمشاريع والعمل الحر",
      hero_title: "نبني تجارب رقمية مميزة ونطوّر",
      hero_title_gradient: "حلولًا تقنية آمنة.",
      hero_lead: "مطور برمجيات وويب ومحمول، ومهتم بالأمن السيبراني الدفاعي. أركز على بناء تجارب رقمية واضحة وعملية مع الاهتمام بالجودة والكود النظيف والأمان المستدام.",
      btn_explore: "استكشف أعمالي ←",
      btn_contact: "تواصل معي مباشرة",
      card_portfolio: "Portfolio",
      tech_web: "تطوير الويب",
      tech_mobile: "تطبيقات المحمول",
      tech_sec: "الأمن السيبراني",
      about_eyebrow: "ABOUT US",
      about_title: "تقنية عملية بهوية واضحة",
      about_desc: "أطوّر مشاريع تجمع بين سهولة الاستخدام، التصميم المتجاوب، والأخذ بالممارسات الأمنية الأساسية منذ السطر الأول.",
      card_web_title: "تطوير الويب",
      card_web_desc: "مواقع سريعة وخفيفة ومتجاوبة مع كافة الشاشات، مع إعطاء الأولوية لتجربة مستخدم استثنائية دون اعتماديات معقدة.",
      card_mob_title: "تطبيقات المحمول",
      card_mob_desc: "بناء تطبيقات هاتف متعدّدة المنصات باستخدام Flutter وDart، مع تصميم يراعي الأداء السلس وتجربة الاستخدام المريحة.",
      card_sec_title: "الأمن السيبراني",
      card_sec_desc: "مراجعة دفاعية للكود والإعدادات، وتحسين حماية الأنظمة والبيانات والتحقق من المدخلات للحد من الثغرات.",
      services_eyebrow: "SERVICES",
      services_title: "الخدمات التقنية الاحترافية",
      services_desc: "حلول متكاملة تلبّي احتياجات الأفراد والشركات الناشئة بكفاءة عالية وموثوقية.",
      serv1_title: "تطوير وتصميم المواقع",
      serv1_desc: "تصميم وتطوير مواقع تعريفية، ومنصات ويب تفاعلية مخصصة مع مراعاة سرعة التحميل ومتطلبات SEO.",
      serv2_title: "تطبيقات الهواتف الذكية",
      serv2_desc: "تطوير تطبيقات أندرويد وiOS هجينة وعالية الأداء باستخدام إطار عمل Flutter مع ربط بالخدمات السحابية.",
      serv3_title: "الاستشارات الأمنية والفحص",
      serv3_desc: "تقييم الوضع الأمني للمشاريع البرمجية، مراجعة ترويسات الحماية، وتقديم توصيات لتقوية الأنظمة.",
      why_eyebrow: "WHY CHOOSE US",
      why_title: "لماذا تختار العمل معنا؟",
      why_desc: "نلتزم بمعايير الجودة والشفافية لبناء شراكات تقنية ناجحة ومستدامة.",
      why1_title: "جودة الكود والنظافة",
      why1_desc: "كود برمجي منظم وموثق وقابل للصيانة والتطوير المستقبلي دون تعقيد غير مبرر.",
      why2_title: "الأمان في الصدارة",
      why2_desc: "وضع حماية البيانات والتحقق من المدخلات في أولويات كل مشروع رقمي.",
      why3_title: "التزام وشفافية",
      why3_desc: "وضوح تام في المهل الزمنية ومراحل العمل وما يمكن تحقيقه بدقة دون مبالغة.",
      workflow_eyebrow: "WORKFLOW",
      workflow_title: "مراحل سير العمل",
      workflow_desc: "منهجية منظمة تضمن تحويل أفكارك إلى منتج رقمي جاهز وناجح.",
      wf1_title: "التحليل والتخطيط",
      wf1_desc: "فهم متطلبات المشروع، تحديد الأهداف بدقة، واختيار التقنيات الأنسب للتنفيذ.",
      wf2_title: "التصميم والهيكلة",
      wf2_desc: "تصميم الواجهات والهيكل البرمجي لضمان تجربة مستخدم سلسة وتجاوب تام.",
      wf3_title: "التطوير والأمان",
      wf3_desc: "كتابة الشيفرات البرمجية، تطبيق معايير الأمان الدفاعي، واختبار الوظائف.",
      wf4_title: "التسليم والمتابعة",
      wf4_desc: "نشر المشروع على بيئة الإنتاج، تقديم وثائق التشغيل، والمتابعة المستمرة.",
      portfolio_eyebrow: "PORTFOLIO",
      portfolio_title: "أبرز المشاريع المنجزة",
      portfolio_desc: "نماذج حقيقية لمشاريع برمجية وتطبيقات تم تطويرها بعناية.",
      proj_dev: "قيد التطوير",
      proj_live: "مكتمل / مباشر",
      proj_plan: "قيد التخطيط",
      proj_tool: "أدوات تقنية",
      zad_desc: "تطبيق إسلامي للهواتف الذكية لقراءة القرآن الكريم ومواقيت الصلاة والأذكار، مع توجه نحو العمل دون إنترنت بكفاءة عالية.",
      due_desc: "موقع احترافي لمحل حلاقة وعناية، بتصميم عصري متجاوب وخدمات ويب تفاعلية متكاملة.",
      cyber_title: "CYBERLAB",
      cyber_desc: "مختبر تعليمي يركز على الأمن السيبراني الدفاعي وأدوات الشبكات والتعلم العملي لتقوية المهارات الأمنية.",
      win_title: "Windows Tools",
      win_desc: "أدوات إنتاجية وأتمتة ومساعدات للمطورين على نظام Windows لتسهيل المهام اليومية.",
      btn_all_projects: "عرض كافة المشاريع والمهارات ←",
      reviews_eyebrow: "TESTIMONIALS",
      reviews_title: "آراء العملاء والتقييمات",
      reviews_desc: "تقييمات حقيقية من عملاء ومستفيدين من المشاريع والخدمات التقنية.",
      based_on: "بناءً على التقييمات المعتمدة",
      add_review_btn: "أضف تقييمك الآن",
      review_form_title: "شاركنا رأيك أو تقييمك",
      review_form_sub: "نرحب دائماً بملاحظاتكم لتطوير جودة الخدمات والمشاريع.",
      rev_name_lbl: "الاسم الكريم",
      rev_name_ph: "أدخل اسمك أو صفتك",
      rev_stars_lbl: "التقييم بالنجوم",
      rev_comment_lbl: "تعليقك أو تجربتك",
      rev_comment_ph: "اكتب انطباعك أو ملاحظتك عن الخدمة...",
      rev_submit: "إرسال التقييم",
      faqs_eyebrow: "FAQs",
      faqs_title: "الأسئلة الشائعة",
      faqs_desc: "إجابات واضحة حول آلية العمل، الخدمات، والتعاون التقني.",
      faq1_q: "كيف يمكنني بدء مشروع جديد معك؟",
      faq1_a: "يمكنك التواصل معي عبر نموذج الاتصال أو البريد الإلكتروني المباشر مع توضيح فكرة المشروع ومتطلباته الأساسية، وسأقوم بالرد خلال أسرع وقت لمناقشة التفاصيل.",
      faq2_q: "ما هي التقنيات الأساسية التي تعتمد عليها؟",
      faq2_a: "أعتمد على تقنيات الويب القياسية (HTML, CSS, JavaScript, React) لتطوير المواقع، وإطار عمل Flutter لتطوير تطبيقات الهواتف الذكية، مع التركيز على الأمان والكود النظيف.",
      faq3_q: "هل تقدم الدعم الفني بعد تسليم المشروع؟",
      faq3_a: "نعم، أقدم الدعم الفني والمتابعة لضمان استقرار العمل، بالإضافة إلى تقديم وثائق تشغيل واضحة لكل مشروع.",
      faq4_q: "كيف يتم ضمان أمان المشاريع البرمجية؟",
      faq4_a: "أطبق مبادئ الأمان الدفاعي منذ مراحل البناء الأولى، مثل التحقق الصارم من المدخلات، استخدام ترويسات أمان HTTP، وتجنب الاعتماديات غير الضرورية.",
      cta_title: "جاهز لبدء مشروعك التقني القادم؟",
      cta_lead: "دعنا نناقش فكرتك ونحولها إلى واقع برمجي آمن ومميز.",
      cta_btn1: "تواصل معي الآن",
      cta_btn2: "حسابي على GitHub ↗",
      footer_copy: "© 2026 أبو المنذر (OFOQ). جميع الحقوق محفوظة.",
      contact_eyebrow: "GET IN TOUCH",
      contact_title: "دعنا نبني مشروعك القادم",
      contact_sub: "للاستفسارات المهنية أو مناقشة فكرة مشروع تقني.",
      contact_details: "بيانات التواصل",
      direct_email: "البريد الإلكتروني المباشر:",
      contact_note: "يمكنك أيضاً التواصل أو متابعة الأعمال عبر حسابي الرسمي على المنصات التقنية.",
      msg_form: "نموذج الرسالة",
      msg_note: "هذا الموقع ثابت، ويهدف هذا النموذج لتجهيز رسالة بريدية وإرسالها مباشرة من تطبيق البريد لديك بكل أمان.",
      lbl_name: "الاسم الكريم",
      lbl_email: "البريد الإلكتروني",
      lbl_msg: "الرسالة أو تفاصيل المشروع",
      ph_name: "ادخل اسمك",
      ph_msg: "اكتب تفاصيل استفسارك أو مشروعك هنا...",
      btn_prepare_mail: "تجهيز الرسالة في البريد",
      skills_title: "المهارات وبيئات العمل",
      skills_sub: "تقنيات وأدوات احترافية أستخدمها في بناء المشاريع والحلول الرقمية.",
      philo_title: "فلسفة العمل",
      philo_sub: "التقنية ليست مجرد كود؛ إنها تجربة موثوقة تحل مشكلة حقيقية ببساطة وكفاءة.",
      p1_t: "البساطة أولًا", p1_d: "أفضّل حلولًا واضحة يمكن فهمها وصيانتها وتطويرها بسهولة، بدلًا من التعقيد البرمجي غير الضروري.",
      p2_t: "الأمان جزء من البناء", p2_d: "أتعامل مع الأمان كركيزة أساسية في دورة التطوير، من تقليل الاعتماديات إلى حماية البيانات والتحقق من المدخلات.",
      p3_t: "التحسين المستمر", p3_d: "أختبر التغييرات بعناية، أراجع النتائج، وأتعلم من الأخطاء والتجارب قبل التوسع في الميزات.",
      p4_t: "وضوح وصدق", p4_d: "أوضح بدقة ما يعمل بالفعل، وما يزال قيد التطوير، وما يحتاج إلى خدمة خارجية أو إعداد إضافي."
    },
    en: {
      dir: "ltr",
      lang: "en",
      nav_home: "Home",
      nav_projects: "Projects",
      nav_skills: "Skills",
      nav_philosophy: "Philosophy",
      nav_contact: "Contact",
      lang_btn: "عربي",
      brand_sub: "Dev & Security",
      status_avail: "Available for freelance & projects",
      hero_title: "Building digital experiences & developing",
      hero_title_gradient: "secure tech solutions.",
      hero_lead: "Software, web, and mobile developer specializing in defensive cybersecurity. Focused on building clean, reliable, and secure digital experiences.",
      btn_explore: "Explore My Work →",
      btn_contact: "Get in Touch",
      card_portfolio: "Portfolio",
      tech_web: "Web Development",
      tech_mobile: "Mobile Apps",
      tech_sec: "Cybersecurity",
      about_eyebrow: "ABOUT US",
      about_title: "Practical Tech with Clear Identity",
      about_desc: "Developing projects that combine usability, responsive design, and core security practices from day one.",
      card_web_title: "Web Development",
      card_web_desc: "Fast, responsive, and lightweight websites prioritizing exceptional user experience without complex bloat.",
      card_mob_title: "Mobile Applications",
      card_mob_desc: "Cross-platform mobile apps built with Flutter and Dart, focused on smooth performance and comfort.",
      card_sec_title: "Cybersecurity",
      card_sec_desc: "Defensive code auditing, hardening system configurations, and input validation to minimize vulnerabilities.",
      services_eyebrow: "SERVICES",
      services_title: "Professional Tech Services",
      services_desc: "Comprehensive solutions tailored for individuals and startups with high efficiency and reliability.",
      serv1_title: "Web Design & Development",
      serv1_desc: "Custom landing pages and interactive web platforms built for speed, SEO, and scalability.",
      serv2_title: "Mobile App Development",
      serv2_desc: "High-performance hybrid Android & iOS apps using Flutter with cloud service integrations.",
      serv3_title: "Security Auditing & Consulting",
      serv3_desc: "Assessing software security postures, reviewing HTTP security headers, and hardening systems.",
      why_eyebrow: "WHY CHOOSE US",
      why_title: "Why Work With Us?",
      why_desc: "Committed to quality and transparency to build sustainable and successful technical partnerships.",
      why1_title: "Clean & Quality Code",
      why1_desc: "Organized, documented, and maintainable codebase ready for future expansion without unnecessary complexity.",
      why2_title: "Security First",
      why2_desc: "Placing data protection and rigorous input validation at the core of every project.",
      why3_title: "Commitment & Clarity",
      why3_desc: "Absolute clarity in timelines, scopes, and realistic deliverables without exaggeration.",
      workflow_eyebrow: "WORKFLOW",
      workflow_title: "Our Workflow",
      workflow_desc: "A structured methodology ensuring your ideas turn into successful digital products.",
      wf1_title: "Analysis & Planning",
      wf1_desc: "Understanding project requirements, defining precise goals, and selecting the best tech stack.",
      wf2_title: "Design & Architecture",
      wf2_desc: "Designing responsive interfaces and system architecture for a seamless user experience.",
      wf3_title: "Development & Security",
      wf3_desc: "Writing robust code, applying defensive security standards, and thorough functional testing.",
      wf4_title: "Delivery & Support",
      wf4_desc: "Deploying to production, providing operational documentation, and ongoing support.",
      portfolio_eyebrow: "PORTFOLIO",
      portfolio_title: "Featured Projects",
      portfolio_desc: "Real-world software projects and applications crafted with precision.",
      proj_dev: "In Development",
      proj_live: "Completed / Live",
      proj_plan: "Planned",
      proj_tool: "Tech Utilities",
      zad_desc: "An Islamic mobile application for Quran reading, prayer times, and adhkar with an offline-first approach.",
      due_desc: "Professional website for a barber and styling shop with modern responsive design and web services.",
      cyber_title: "CYBERLAB",
      cyber_desc: "Educational lab focused on defensive cybersecurity, networking tools, and practical security learning.",
      win_title: "Windows Tools",
      win_desc: "Productivity, automation, and developer utility tools for Windows to streamline daily tasks.",
      btn_all_projects: "View All Projects & Skills →",
      reviews_eyebrow: "TESTIMONIALS",
      reviews_title: "Client Reviews & Ratings",
      reviews_desc: "Genuine feedback from clients and beneficiaries of our technical services.",
      based_on: "Based on verified reviews",
      add_review_btn: "Add Your Review",
      review_form_title: "Share Your Feedback",
      review_form_sub: "We always welcome your feedback to improve our services and projects.",
      rev_name_lbl: "Your Name",
      rev_name_ph: "Enter your name or title",
      rev_stars_lbl: "Star Rating",
      rev_comment_lbl: "Your Review / Experience",
      rev_comment_ph: "Write your feedback about the service...",
      rev_submit: "Submit Review",
      faqs_eyebrow: "FAQs",
      faqs_title: "Frequently Asked Questions",
      faqs_desc: "Clear answers about our workflow, services, and technical cooperation.",
      faq1_q: "How can I start a new project with you?",
      faq1_a: "You can contact me via the contact form or direct email outlining your project idea and requirements, and I will respond promptly.",
      faq2_q: "What core technologies do you use?",
      faq2_a: "I use standard web technologies (HTML, CSS, JS, React) and Flutter for mobile apps, focusing on security and clean code.",
      faq3_q: "Do you offer post-launch support?",
      faq3_a: "Yes, I offer technical support and follow-up to ensure stability, along with operational documentation.",
      faq4_q: "How is project security ensured?",
      faq4_a: "I apply defensive security principles from the start, including strict input validation and secure HTTP headers.",
      cta_title: "Ready to start your next tech project?",
      cta_lead: "Let's discuss your idea and turn it into a secure, remarkable software solution.",
      cta_btn1: "Contact Me Now",
      cta_btn2: "GitHub Profile ↗",
      footer_copy: "© 2026 OFOQ (Abu Al-Munther). All rights reserved.",
      contact_eyebrow: "GET IN TOUCH",
      contact_title: "Let's build your next project",
      contact_sub: "For professional inquiries or discussing a tech project idea.",
      contact_details: "Contact Info",
      direct_email: "Direct Email:",
      contact_note: "You can also connect or follow work on my official GitHub profile.",
      msg_form: "Message Form",
      msg_note: "This site is static. This form prepares an email message to send directly from your mail client securely.",
      lbl_name: "Your Name",
      lbl_email: "Email Address",
      lbl_msg: "Message or Project Details",
      ph_name: "Enter your name",
      ph_msg: "Write your project details or inquiry here...",
      btn_prepare_mail: "Prepare Email",
      skills_title: "Toolkit & Skills",
      skills_sub: "Professional technologies and tools used to build digital projects and solutions.",
      philo_title: "Working Philosophy",
      philo_sub: "Technology is not just code; it's a reliable experience solving real problems simply and efficiently.",
      p1_t: "Simplicity First", p1_d: "I prefer clear solutions that are easy to understand, maintain, and scale without unnecessary complexity.",
      p2_t: "Security Built-In", p2_d: "I treat security as a core pillar of development, from minimizing dependencies to data protection.",
      p3_t: "Continuous Improvement", p3_d: "I test changes carefully, review outcomes, and learn from mistakes before expanding features.",
      p4_t: "Clarity & Honesty", p4_d: "I clearly state what works, what is in progress, and what requires external services."
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
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

    // Language Switcher Handler
    let currentLang = localStorage.getItem("ofoq_lang") || "ar";

    function setLanguage(lang) {
      currentLang = lang;
      localStorage.setItem("ofoq_lang", lang);
      const t = translations[lang] || translations.ar;

      document.documentElement.setAttribute("lang", t.lang);
      document.documentElement.setAttribute("dir", t.dir);
      document.body.setAttribute("dir", t.dir);

      // Update text contents based on data-i18n attributes
      document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (t[key]) {
          el.textContent = t[key];
        }
      });

      document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
        const key = el.getAttribute("data-i18n-placeholder");
        if (t[key]) {
          el.setAttribute("placeholder", t[key]);
        }
      });

      const langBtn = document.getElementById("lang-switch-btn");
      if (langBtn) langBtn.textContent = t.lang === "ar" ? "English" : "عربي";
    }

    const langBtn = document.getElementById("lang-switch-btn");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        setLanguage(currentLang === "ar" ? "en" : "ar");
      });
    }

    setLanguage(currentLang);

    // Contact Form Handler
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
          status.textContent = currentLang === "ar" ? "يرجى ملء جميع الحقول المطلوبة." : "Please fill in all required fields.";
          return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          status.textContent = currentLang === "ar" ? "يرجى إدخال بريد إلكتروني صحيح." : "Please enter a valid email address.";
          return;
        }

        const subject = encodeURIComponent("OFOQ Message — " + name);
        const body = encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\n" + message);
        status.textContent = currentLang === "ar" ? "سيتم فتح تطبيق البريد لديك لتجهيز الرسالة وإرسالها مباشرة." : "Opening your mail app to prepare and send your message.";
        window.location.href = "mailto:contact@abualmunther.dev?subject=" + subject + "&body=" + body;
      });
    }

    // Customer Review System with localStorage
    const STORAGE_KEY = "ofoq_customer_reviews_v2";
    // Reviews are stored in this browser only; use a backend for shared/public reviews.
    const defaultReviews = [];

    function getStoredReviews() {
      try {
        const item = localStorage.getItem(STORAGE_KEY);
        if (item) {
          const parsed = JSON.parse(item);
          if (Array.isArray(parsed)) return parsed;
        }
      } catch (e) {
        console.error("Error reading reviews:", e);
      }
      return defaultReviews;
    }

    function saveReviews(reviews) {
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
      } catch (e) {
        console.error("Error saving reviews:", e);
      }
    }

    function sanitizeHTML(str) {
      const temp = document.createElement("div");
      temp.textContent = str;
      return temp.innerHTML;
    }

    const reviewsContainer = document.getElementById("reviews-list");
    const avgRatingEl = document.getElementById("avg-rating");
    const avgStarsEl = document.getElementById("avg-stars");
    const totalReviewsEl = document.getElementById("total-reviews");
    const reviewForm = document.getElementById("review-form");
    const reviewStatus = document.getElementById("review-status");
    const starInputContainer = document.getElementById("star-rating-input");

    let selectedRating = 5;

    if (starInputContainer) {
      const stars = starInputContainer.querySelectorAll("span");
      stars.forEach((star, index) => {
        star.addEventListener("click", () => {
          selectedRating = index + 1;
          stars.forEach((s, i) => {
            if (i < selectedRating) {
              s.classList.add("active");
              s.textContent = "★";
            } else {
              s.classList.remove("active");
              s.textContent = "☆";
            }
          });
        });
      });
    }

    function renderReviews() {
      if (!reviewsContainer) return;
      const reviews = getStoredReviews();

      const total = reviews.length;
      const sum = reviews.reduce((acc, r) => acc + Number(r.rating || 5), 0);
      const avg = total > 0 ? (sum / total).toFixed(1) : "—";

      if (avgRatingEl) avgRatingEl.textContent = avg;
      if (totalReviewsEl) totalReviewsEl.textContent = total > 0 ? (currentLang === "ar" ? `${total} تقييم محفوظ على هذا الجهاز` : `${total} reviews saved on this device`) : (currentLang === "ar" ? "لا توجد تقييمات بعد" : "No reviews yet");
      if (avgStarsEl) {
        const fullStars = total > 0 ? Math.round(Number(avg)) : 0;
        avgStarsEl.textContent = "★".repeat(fullStars) + "☆".repeat(5 - fullStars);
      }

      reviewsContainer.innerHTML = "";
      if (total === 0) {
        const empty = document.createElement("p");
        empty.className = "muted reviews-empty";
        empty.textContent = currentLang === "ar" ? "كن أول من يشارك رأيه. التقييمات هنا تُحفظ محليًا في المتصفح ولا تظهر للزوار الآخرين." : "Be the first to leave feedback. Reviews are stored locally in this browser and are not shared with other visitors.";
        reviewsContainer.appendChild(empty);
      }
      reviews.slice().reverse().forEach((r) => {
        const rCard = document.createElement("article");
        rCard.className = "review-card";
        const starsStr = "★".repeat(Number(r.rating) || 5) + "☆".repeat(5 - (Number(r.rating) || 5));
        rCard.innerHTML = `
          <div class="review-header">
            <div>
              <span class="review-author">${sanitizeHTML(r.name)}</span>
              <div style="color:var(--yellow); font-size:0.9rem; margin-top:2px;">${starsStr}</div>
            </div>
            <span class="review-date">${sanitizeHTML(r.date)}</span>
          </div>
          <p class="review-comment">${sanitizeHTML(r.comment)}</p>
        `;
        reviewsContainer.appendChild(rCard);
      });
    }

    if (reviewForm) {
      reviewForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const nameInput = document.getElementById("reviewer-name");
        const commentInput = document.getElementById("reviewer-comment");

        const name = String(nameInput?.value || "").trim().slice(0, 80);
        const comment = String(commentInput?.value || "").trim().slice(0, 500);

        if (!name || !comment) {
          if (reviewStatus) reviewStatus.textContent = currentLang === "ar" ? "يرجى إدخال الاسم وتفاصيل التعليق." : "Please enter your name and review comment.";
          return;
        }

        const newReview = {
          name: name,
          rating: selectedRating,
          comment: comment,
          date: new Date().toISOString().split("T")[0]
        };

        const currentReviews = getStoredReviews();
        currentReviews.push(newReview);
        saveReviews(currentReviews);

        renderReviews();
        reviewForm.reset();
        if (reviewStatus) reviewStatus.textContent = currentLang === "ar" ? "شكرًا لك! تم حفظ تقييمك على هذا الجهاز فقط." : "Thank you! Your review was saved in this browser only.";
        setTimeout(() => { if (reviewStatus) reviewStatus.textContent = ""; }, 4000);
      });
    }

    renderReviews();
  });
})();
