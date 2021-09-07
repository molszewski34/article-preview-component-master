const card = document.querySelector(".share_card")
const showCard = document.getElementById("show_share_card")
const grayArrow = document.querySelector("path")



showCard.addEventListener("click", () => {
  card.classList.toggle("show")
  grayArrow.classList.toggle("dark_gray_arrow")
  showCard.classList.toggle("gray_background")
})


const hideCard = document.getElementById("hide_share_card")

hideCard.addEventListener("click", () => {
  card.classList.toggle("show")

})