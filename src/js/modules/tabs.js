function tabs(tabSelector, tabContentSelector, activeClass) {

    const tabs = document.querySelectorAll(tabSelector),
        tabsContent = document.querySelectorAll(tabContentSelector);

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => {
                tab.classList.remove(activeClass);
            });
            tab.classList.add(activeClass);
            tabsContent.forEach(content => {
                content.classList.add("hide");
                content.classList.remove("show");
            });
            tabsContent[i].classList.add("show", "faded");
        });
    });
}

export default tabs;