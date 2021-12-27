let menu = document.querySelector(".menu--mobile");
let botao = document.querySelector(".botao")

botao.addEventListener("click", () => {
  if(menu.style.display == 'none' && window.screen.width <= '450') {
    menu.style.display = 'block'
  } else {
    menu.style.display = 'none'
  }
})

