browser.storage.local.get("isEnabled").then((result) => {
    if (result.isEnabled == false) return;
    const links = document.querySelectorAll("a");

    links.forEach(link => {
        const href = link.getAttribute("href"); // Get the href attribute
        if (href && href.includes("forcedownload=1")) {
            // Replace "forcedownload=1" with an empty string
            const updatedHref = href.replace(/forcedownload=1&?/, "");
            link.setAttribute("href", updatedHref); // Update the href attribute
        }
        if (href && /mod.(resource|folder)/.test(href)) {
            link.setAttribute("target", "_blank");
            link.setAttribute("rel", "noopener noreferrer");
        }

    });
});