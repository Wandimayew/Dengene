const API_URL = "https://fakestoreapi.com/products";

async function fetchProducts() {
  try {
    const product = await fetch(API_URL)
      .then((response) => {
        // if (response.ok) {
        //   console.log("response: ", response.json());
        // }
        return response.json();
      })
      .then((data) => {
        console.log("data is ", data);

        return data;
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("Data response : ", product);

    const products = typeof product;
    console.log(typeof product);

    product.map((key, data) => {
        document.getElementById("idSpan").textContent= key.id;
        document.getElementById("titleSpan").textContent= key.title;
        document.getElementById("descId").textContent= key.description;
        document.getElementById("category").textContent= key.category;
        document.getElementById("productImage").textContent= key.image;
        
    });

    return product;
  } catch (error) {
    console.log(error);
    return error;
  }
}

fetchProducts();
