function createProductItem(data, htmlStr, id) {
    let newProdItem = document.createElement("div")
    newProdItem.className = "product-item"
    newProdItem.innerHTML = htmlStr
    if (id) newProdItem.id = id
    setProperties(data, newProdItem)
    return newProdItem
}