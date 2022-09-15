
function openModal(window) {
    window.classList.remove("hide");
    window.classList.add("show", "faded");
}
function closeModal(window) {
    window.classList.remove("show");
    window.classList.add("hide", "faded");
}

function modal(btn, selector, closeBtn) {

    const engineerBtn = document.querySelectorAll(btn),
        engineerModal = document.querySelector(selector),
        modalClose = document.querySelectorAll(closeBtn),
        modals = document.querySelectorAll("[data-modal]");

    engineerBtn.forEach(item => (
        item.addEventListener("click", (e) => {
            e.preventDefault();

            modals.forEach(item => {
                openModal(item);
                closeModal(item);
            });

            openModal(engineerModal);
        })
    ));

    modalClose.forEach(item => {
        item.addEventListener('click', () => {
            closeModal(engineerModal);
        });
    });

    engineerModal.addEventListener("click", (e) => {
        if (e.target == engineerModal) {
            closeModal(engineerModal);
        }
    });

    setTimeout(() => { openModal(document.querySelector(".popup_engineer")); }, 60000);
}

export default modal;
export { closeModal };
export { openModal };
