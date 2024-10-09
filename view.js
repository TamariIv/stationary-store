const renderProduct = (product) => {
    return `
    <div class="product">
        <h2>${product.title}</h2>
        <img src="${product.image}" alt="${product.title}" />
        <p>₪${product.price}</p>
    </div>
    `
}

const renderProducts = (products) => {
    let productsStr = ``;
    for (const product of products) {
        productsStr += renderProduct(product);
    }
    document.getElementById("products").innerHTML = productsStr;
    return productsStr;

} 

const renderNotebooks = () => {
    document.getElementById("title").innerHTML = "מחברות"
    return renderProducts(Gnotebooks);
}

const renderCrafts = () => {
    document.getElementById("title").innerHTML = "כלי כתיבה"
    return renderProducts(Gcraft);
}