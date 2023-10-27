function fetchFakeStoreData() {
    fetch('https://fakestoreapi.com/products')
        .then(response => response.json())
        .then(data => {
            displayProducts(data);
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayProducts(products) {
    const productList = document.getElementById('product-list');

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.classList.add('productImage');
        productDiv.appendChild(productImage);

        const productTitle = document.createElement('h2');
        productTitle.textContent = product.title;
        productDiv.appendChild(productTitle);

        const productPrice = document.createElement('p');
        productPrice.textContent = 'Price: $' + product.price;
        productDiv.appendChild(productPrice);

        productList.appendChild(productDiv);
    });
}

fetchFakeStoreData();