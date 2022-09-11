
function openModal(window) {
    window.classList.remove("hide");
    window.classList.add("show");
}
function closeModal(window) {
    window.classList.remove("show");
    window.classList.add("hide");
}

function modal(btn, selector) {

    const engineerBtn = document.querySelectorAll(btn),
        engineerModal = document.querySelector(selector),
        modalClose = document.querySelectorAll(".popup_close");

    engineerBtn.forEach(item => (
        item.addEventListener("click", (e) => {
            e.preventDefault();
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

    // setTimeout(() => { openModal(); }, 60000);
}

export default modal;
export { closeModal };
export { openModal };
