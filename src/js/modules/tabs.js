function tabs(tabSelector, tabContentSelector) {

    const tabs = document.querySelectorAll(tabSelector),
        tabsContent = document.querySelectorAll(tabContentSelector);

    tabs.forEach((tab, i) => {
        tab.addEventListener('click', () => {
            tabs.forEach(tab => {
                tab.classList.remove("after_click");
            });
            tab.classList.add("after_click");
            tabsContent.forEach(content => {
                content.classList.add("hide");
                content.classList.remove("show");
            });
            tabsContent[i].classList.add("show");
        });
    });
}

export default tabs;