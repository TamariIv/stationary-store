const renderProduct = (product) => {
    // return html div
}

const renderProducts = (products) => {
    let productsStr = ``;
    for (const product of products) {
        productsStr += renderProduct(product);
    }
    document.getElementById("prod-area")

} 