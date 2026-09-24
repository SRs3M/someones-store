// Variable Initialization
const store = document.getElementById("store")
const storePurchase = document.getElementById("store-purchase");

// Render the store
async function renderStore() {
    let HTML = ``;
    try {
        const answer = await fetch('https://fakestoreapi.com/products'); // Fetch the fake store
        if (!answer.ok) { // Check for errors
            throw new Error(`HTTP ${answer.status}`);
        }
        const response = await answer.json(); // Save the server response
        response.forEach(item => { // for each
            HTML += `
            <article id="store-item">
                <h2>${item.title}</h2>
                <div class="store-image">
                    <img src="${item.image}">
                </div>
                <p>$${item.price}<p>
                <p>★${item.rating.rate}, ${item.rating.count} reviews</p>
                <p id="store-category">${item.category}</p>
                <a href="item.html" target="_blank">Purchase!</a>
            </article>
            `
            store.innerHTML = HTML;
        });
        console.log(response);
    } catch {
        console.error(Error());
    }
}
renderStore();

// When clicking the "Purchase" button
storePurchase.addEventListener("click", async () => {

})

