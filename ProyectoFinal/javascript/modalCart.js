const cartButton = document.getElementById("btnCart");
const  modal = document.querySelector(".modalCart");
const closeButton = document.getElementById("closeModal");

const toggleModal = (button,modal) => {
    button.addEventListener("click", () =>{
        event.preventDefault();
        modal.classList.toggle("hidden");
        modal.classList.toggle("show");
        console.log("click");
    })
}

toggleModal(cartButton,modal);
toggleModal(closeButton,modal);