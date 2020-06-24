const modal = document.querySelector('.modal')
const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener("click", function() {
        const courseId = card.getAttribute("id")

        if (modal.classList.contains('maximize'))
            modal.classList.remove('maximize')

        modalOverlay.classList.add('active')
        modalOverlay.querySelector('iframe').src = `https://rocketseat.com.br/${courseId}`
    })
}

document.querySelector('.close-modal').addEventListener("click", function() {
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector('iframe').src = ""
})

document.querySelector('.fullscreen-modal').addEventListener("click", function() {
        modal.classList.add('maximize')
})

document.querySelector('.minimize-modal').addEventListener("click", function() {
        modal.classList.remove('maximize')
})