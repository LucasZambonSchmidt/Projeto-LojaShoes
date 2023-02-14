const colors = {
    "--main-background": "#C4C4C4",
    "--background": "#E5E5E5",
    "--text": "#000",
}
const colors2 = {
    "--main-background": "#5e5e5e",
    "--background": "#333131",
    "--text": "#fff",
}
let dark = false
const changeColor = () => {
    dark = !dark
    if (dark) {
        Object.entries(colors2).forEach(setColor)
    }
    else { Object.entries(colors).forEach(setColor) }
}
const setColor = (item) => {
    document.body.style.setProperty(item[0], item[1])
}

document.getElementById("botao").addEventListener("click", changeColor)