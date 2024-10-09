const renderProduct = (product) => {
    return `
    <div class="product">
        <h2>${product.title}</h2>
        <p>${product.price}</p>
    </div>
    `
}

const renderProducts = (products) => {
    let productsStr = ``;
    for (const product of products) {
        productsStr += renderProduct(product);
    }
    document.getElementById("prod-area")

} 