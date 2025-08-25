let mainPageCdpCategories = document.querySelectorAll("#mainPageCdp>nav>ul>li>button");
console.log(mainPageCdpCategories);

let primaryAccentColor = "rgb(255, 111, 0)"
let primaryAccentColorTransparent = "rgba(255, 111, 0, 0.1)"
let usualColor = "rgb(102, 108, 111)"
let lighterBorderColor = "rgb(163, 167, 170)"

Array.from(mainPageCdpCategories).forEach((category) => {
    category.addEventListener("mouseenter", (event) => {
        if (category.computedStyleMap().get("color").toString() == usualColor) {
            category.style.backgroundColor = primaryAccentColorTransparent
            category.style.color = primaryAccentColor
        }
        //category.style.color = "red" 
    })
    category.addEventListener("mouseleave", (event) => {
        if (category.computedStyleMap().get("color").toString() == primaryAccentColor &&
            category.computedStyleMap().get("border-bottom-color").toString() == lighterBorderColor) {
            category.style.backgroundColor = "transparent"
            category.style.color = usualColor
        }
        //category.style.color = "red" 
    })

    category.addEventListener("click", (event) => {
        Array.from(mainPageCdpCategories).forEach((element) => {
            element.style.color = usualColor
            element.style.borderBottomColor = lighterBorderColor
        })
        category.style.color = primaryAccentColor
        category.style.borderBottomColor = primaryAccentColor
        category.style.backgroundColor = "transparent"
    })
})