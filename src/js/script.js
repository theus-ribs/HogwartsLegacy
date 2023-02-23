const modal = document.querySelector(".modal")
const fecharModal = document.querySelector(".fecharModal")
const video = document.getElementById("video")
const linkVideo = video.src
function alternarModal(){
    modal.classList.toggle("aberto");
}

function openTrailer(){
    alternarModal()
    video.setAttribute("src", linkVideo)
}

fecharModal.addEventListener("click", () => { //reconhece o click no botao e a partir disso inicia uma ARROW FUNCTION
    alternarModal()
    video.setAttribute("src", "") //setando uma informação no atributo
})