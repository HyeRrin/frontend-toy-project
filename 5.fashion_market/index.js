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

    // 상품 카드 컨테이너 생성
    const productCard = document.createElement("li");
    productCard.classList.add("product");

    // 썸네일 생성
    const productThumbnail = document.createElement("img");
    productThumbnail.src = product.thumbnail;
    productThumbnail.classList.add("product-thumbnail");

    // 상품명 생성
    const productName = document.createElement("p");
    productName.textContent = product.name;
    productName.classList.add("product-name");

    // 가격 생성
    const productPrice = document.createElement("p");
    productPrice.textContent = `${Number(product.price).toLocaleString()}원`;
    productPrice.classList.add("product-price");

    // 상품 카드에 썸네일, 상품명, 가격 추가
    productCard.append(productThumbnail, productName, productPrice);

    // 배송 뱃지 추가
    if (product.isFreeShipping) {
      const productBadge = document.createElement("span");
      productBadge.textContent = "무료배송";
      productBadge.classList.add("product-badge");
      productCard.appendChild(productBadge);
    }

    productContainer.appendChild(productCard);
  }
};
