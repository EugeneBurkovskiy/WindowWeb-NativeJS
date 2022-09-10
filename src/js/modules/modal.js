
function modal(btn, selector) {

    const engineerBtn = document.querySelectorAll(btn),
        engineerModal = document.querySelector(selector),
        modalClose = document.querySelectorAll(".popup_close");

    engineerBtn.forEach(item => (
        item.addEventListener("click", (e) => {
            e.preventDefault();
            openModal();
        })
    ));

    function openModal() {
        engineerModal.classList.remove("hide");
        engineerModal.classList.add("show");
    }
    function closeModal() {
        engineerModal.classList.remove("show");
        engineerModal.classList.add("hide");
    }

    modalClose.forEach(item => {
        item.addEventListener('click', () => {
            closeModal();
        });
    });

    engineerModal.addEventListener("click", (e) => {
        if (e.target == engineerModal) {
            closeModal();
        }
    });

    // setTimeout(() => { openModal(); }, 60000);
}

export default modal;
