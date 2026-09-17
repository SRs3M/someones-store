// Variable Initialization
const store = document.getElementById("store")

async function renderStore() {
    let HTML = ``;
    try {
        const answer = await fetch('https://fakestoreapi.com/products');
        if (!answer.ok) {
            throw new Error(`HTTP ${answer.status}`);
        }
    } catch {
        console.error(Error());
    }
}
renderStore();