document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.side_container');
    const menuButton = document.querySelector(".menu-toggle");

    const scrollLinks = [
        { buttonId: "home_button", sectionId: "home_section" },
        { buttonId: "about_button", sectionId: "about_section" },
        { buttonId: "skill_button", sectionId: "skills_section" },
        { buttonId: "contact_button", sectionId: "contact_section" },
    ];

    scrollLinks.forEach(({ buttonId, sectionId }) => {
        const button = document.getElementById(buttonId);
        const section = document.getElementById(sectionId);
        if (button && section) {
            button.addEventListener("click", () => {
                section.scrollIntoView({ behavior: "smooth" });
                if (window.innerWidth < 900 && sideContainer.classList.contains("show")) {
                    sidebar.classList.remove("show"); 
                }
            });
        }
    });

    menuButton.addEventListener("click", () => {
        sidebar.classList.toggle("visible");
    });

    function handleResize() {
        if (!sidebar) return;
        if (window.innerWidth >= 900) {
            sidebar.classList.remove('show');
        }
    }

    window.addEventListener('resize', handleResize);
    handleResize(); 
});
