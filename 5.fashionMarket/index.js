const productContainer = document.querySelector(".product-container");
let productList = [];

const fetchProductData = async () => {
  await fetch("./src/productData.json")
    .then((response) => response.json())
    .then((data) => (productList = data.products))
    .catch((error) => console.error("상품 데이터 불러오기 실패! : ", error));

  paintProductList(productList);
};

fetchProductData();

const filterButtons = document.querySelectorAll(".filter-button");

filterButtons.forEach((filterButton) => {
  filterButton.addEventListener("click", () => {
    const alreadyClicked = filterButton.classList.contains("clicked");

    filterButton.classList.toggle("clicked");

    if (alreadyClicked) {
      productContainer.innerHTML = "";
      paintProductList(productList);
    } else {
      filterButtons.forEach((button) => {
        button.classList.remove("clicked");
      });

      filterButton.classList.add("clicked");

      const categoryValue = filterButton.getAttribute("data-category");
      const detailValue = filterButton.getAttribute("data-detail");

      const newProductList = productList.filter((product) => {
        if (categoryValue === "color") return product.color === detailValue;
        if (categoryValue === "cloth") return product.category === detailValue;
      });

      productContainer.innerHTML = "";
      paintProductList(newProductList);
    }
  });
});

const paintProductList = (products) => {
  for (let i = 0; i < products.length; i++) {
    const product = products[i];

    const productThumbnail = document.createElement("img");
    productThumbnail.src = product.thumbnail;
    productThumbnail.classList.add("product-thumbnail");

    const productName = document.createElement("p");
    productName.textContent = product.name;
    productName.classList.add("product-name");

    const productPrice = document.createElement("p");
    productPrice.textContent = `${Number(product.price).toLocaleString()}원`;
    productPrice.classList.add("product-price");

    const productCard = document.createElement("div");
    productCard.classList.add("product");
    productCard.append(productThumbnail, productName, productPrice);

    if (product.isFreeShipping) {
      const productBadge = document.createElement("span");
      productBadge.textContent = "무료배송";
      productBadge.classList.add("product-badge");
      productCard.appendChild(productBadge);
    }

    productContainer.appendChild(productCard);
  }
};
