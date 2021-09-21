let modals = document.querySelectorAll("[data-modal]")
if (modals.length) {
    modals.forEach((modal) => {
        modal.addEventListener("click", (e) => {
            let target = document.querySelector(e.target.getAttribute("data-modal"))
            if (target) {
                target.classList.add("active")
                target.addEventListener("click", closeModal)
            }
        })
    })
    function closeModal(e) {
        if (e.target.classList.contains("modal")) {
            e.target.classList.remove("active")
            e.target.removeEventListener('click', closeModal)
        }
    }
}
