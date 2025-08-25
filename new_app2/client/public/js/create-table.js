async function createTable(productItemsTable1) {
    try {
        const prodItemRes = await fetch("./html/product-item.html")
        if (!prodItemRes.ok) {
            throw new Error(`Responce status: ${res.status}`)
        }
        let productInnerHtml = await prodItemRes.text()
        const testDataRes = await fetch("./test_data.json")
        if (!testDataRes.ok) {
            throw new Error(`Responce status: ${res.status}`)
        }
        let testData = await testDataRes.json()
        if (testData.data) {
            let prodItemsTable = productItemsTable1
            testData.data.forEach((data, index) => {
                prodItemsTable.appendChild(createProductItem(data, productInnerHtml))
            })
        }
        return 1;
    }
    catch (err) {
        console.log(`Something went wrong. Error: ${err}`)
        return 0;
    }
}
