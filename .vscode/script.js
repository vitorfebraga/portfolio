function toggleMode() {
  const html = document.documentElement

  if (html.classList.contains("light")) {
    html.classList.remove("light")
  } else {
    html.classList.add("light")
  }

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/imagem-1.jpg")
  } else {
    img.setAttribute(
      "src",
      "https://avatars.githubusercontent.com/u/56613978?v=4."
    )
  }
}
