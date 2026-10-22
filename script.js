// Terminal Boot Splash Sequence
document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    if (splash) {
        const logsContainer = document.getElementById('terminal-logs');
        const progressBar = document.getElementById('boot-progress');

        const logs = [
            "[+] Loading kernel modules...",
            "[+] Verifying cryptographic signatures...",
            "[+] Initializing React & TypeScript environments...",
            "[+] Establishing secure connection...",
            "[✓] Security audit passed. System ready."
        ];

        let currentLog = 0;
        let progress = 0;

        const interval = setInterval(() => {
            if (currentLog < logs.length) {
                const p = document.createElement('p');
                p.textContent = logs[currentLog];
                if(currentLog === logs.length - 1) {
                    p.className = "text-[#00D6A3] font-bold";
                }
                logsContainer.appendChild(p);
                logsContainer.scrollTop = logsContainer.scrollHeight;
                
                progress += 20;
                progressBar.style.width = progress + '%';
                currentLog++;
            } else {
                clearInterval(interval);
                setTimeout(() => {
                    splash.style.opacity = '0';
                    setTimeout(() => {
                        splash.style.display = 'none';
                    }, 700);
                }, 500);
            }
        }, 300);
    }

    // Mobile Menu Toggle
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileBtn && mobileMenu) {
        mobileBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });
    }
});
