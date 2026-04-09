const fetchApi = (url) => {
    const result = fetch(url)
        .then(respone => respone.json())
        .then(data => {
            return data;
        });
    return result; 
    
}

fetchApi("https://dummyjson.com/products/categories")
    .then(data => console.log(data))


// Get Category

fetch("https://dummyjson.com/products/categories")
    .then(response => response.json())
    .then(data => {
        let htmls = "";
        data.forEach(item => {
            htmls += `
                <div class="category-item">${item}</div>
            `;
            console.log(item);
            
        });

        console.log(htmls);

        const divCategory = document.querySelector("#category");
        divCategory.innerHTML = htmls;
        
    })

// End get Category

// Get Products

fetch("https://dummyjson.com/products")
    .then(response => response.json())
    .then(data => {
        console.log(data.products);
        let htmls  = "";
        data.products.forEach(item => {
            htmls += `
                <div class="product-item">
                    <img src="${item.thumbnail}" alt="${item.title}">
                    <h3>${item.title}</h3>
                    <p>${item.price}$</p>
                </div>
            `;
        });

        const divProducts = document.querySelector("#products");
        divProducts.innerHTML = htmls;
    })

// End get Products