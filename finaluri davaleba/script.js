const postsDiv = document.querySelector(".postsDiv");
const modaldiv = document.querySelector(".modaldiv");
const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");
const closeModalBtn = document.querySelector(".close-btn");

let products = []; // პროდუქტების შესანახად

fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((result) => {
        products = result; // ვინახავთ პროდუქტებს
        renderProducts(products); // თავიდან პროდუქტის გამოჩენა
    })
    .catch(error => console.error("მოხდა შეცდომა:", error));

// პროდუქტების რენდერის ფუნქცია
const renderProducts = (products) => {
    postsDiv.innerHTML = ""; // პოსტების გასუფთავება

    products.map((post) => {
        const postDiv = document.createElement('div');
        postDiv.className = 'postdiv';

        const title = document.createElement('h4');
        title.textContent = post.title;

        const price = document.createElement('span');
        price.textContent = `ფასი: $${post.price}`;

        const description = document.createElement('p');
        description.textContent = post.description;
        description.className = 'desk';

        const image = document.createElement('img');
        image.src = post.image;

        const btn = document.createElement('button');
        btn.textContent = 'see more';
        btn.className = 'btnn';

        const textdiv = document.createElement('div');
        textdiv.className = 'textdiv';

        const divdiv = document.createElement('div');
        divdiv.className = 'divdiv';

        const divdivdiv = document.createElement('div');
        divdivdiv.className = 'divdivdiv';

        postDiv.appendChild(image);
        postDiv.appendChild(textdiv);

        textdiv.appendChild(title);
        textdiv.appendChild(divdiv);

        divdiv.appendChild(divdivdiv);
        divdiv.appendChild(description);

        divdivdiv.appendChild(price);
        divdivdiv.appendChild(btn);

        postsDiv.appendChild(postDiv);

        btn.addEventListener("click", () => {
            showProductDetails(post);
        });
    });
};

// პროდუქტის დეტალები
const showProductDetails = (post) => {
    modalContent.innerHTML = `
        <img id="img" src="${post.image}" alt="${post.title}" />
        <div id="div">
            <h2 id="h2">${post.title}</h2><br><br>
            <p id="p">${post.description}</p>
            <span id="span">ფასი: $${post.price}</span>
        </div>
    `;
    modaldiv.style.display = "flex";
};

// მოდალის დახურვა
const closebtn = () => {
    modaldiv.style.display = 'none';
};

// სორტირება
const sortProducts = () => {
    const sortOrder = document.getElementById("sort").value;

    if (sortOrder === "default") {
        renderProducts(products); // საწყისი განლაგება
        return;
    }

    const sortedProducts = sortOrder === "asc"
        ? [...products].sort((a, b) => a.price - b.price)
        : [...products].sort((a, b) => b.price - a.price);

    renderProducts(sortedProducts);
};







fetch("https://dummyjson.com/users/13")
    .then((Response) => Response.json())
    .then((result) => {
        console.log(result);

        const profileid = document.getElementById("profileid");
        profileid.innerHTML = `<img id="profileimg" src="${result.image}" alt="">`;
    })


















const search = () => {
    const searchbox = document.getElementById("search-item").value.toUpperCase(); 
    const products = document.querySelectorAll(".postdiv"); 
    
    products.forEach(product => {
        const pname = product.querySelector("h4"); 
        if (pname) {
            const textvalue = pname.textContent.toUpperCase(); 

            if (textvalue.indexOf(searchbox) > -1) {
                product.style.display = ""; 
            } else {
                product.style.display = "none"; 
            }
        }
    });
};