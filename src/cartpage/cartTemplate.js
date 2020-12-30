export default function getHtml({total, products}) {
    return `
    <div class="container">
        <h1>Cart</h1>
        ${products.length === 0 ? `
            <p>There are no items in the cart. You can choose some of our products from the <a href="#catalog">catalog</a>.</p>
        ` : `
            ${products.map(product => `
                <div style="display: flex; justify-content: space-between; margin: 15px">
                    <h5><a href="#product/${product.productId}">${product.name}</a> (${product.amount})</h5>
                    <div style="display: flex; justify-content: right; flex-wrap: nowrap">
                        <h5 style="margin: 5px">${product.cost}$</h5>
                        <button class="btn btn-danger" onclick="globalThis.onRemoveItemFromCartClicked(this, ${product.productId});">Remove</button>
                    </div>
                </div>
            `).join('')}
            <h3>Total: <span id="total">${total}</span>$</h3>
            <a href="#order" class="btn btn-primary">Make an order</a>
        `}
    </div>
    `;
}