// Variable Initialization
const store = document.getElementById("store")

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
                <img src="${item.image}">
                <p>${item.price}<p>
                <p>★${item.rating.rate}, ${item.rating.count} reviews</p>
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