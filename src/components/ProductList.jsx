import React, { useState, useEffect } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import "../styles/ProductList.css";

const ProductList = ({addToCart}) => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "mangas"));
        const productsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setProducts(productsData);
      } catch (error) {
        console.error("Ошибка на сервере", error);
      }
    };
    fetchProduct();
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredProducts = products.filter((product) => 
  product.name.toLowerCase().includes(searchQuery));

  return (
    <div className="mangas">
      <h1>Список манги</h1>
      <input type="text" placeholder="Поиск товаров..." value={searchQuery} onChange={handleSearchChange}/>
      <div className="manga-cards">
        {filteredProducts.map((product) => (
          <li key={product.id} className="manga-card">
            <div className="manga-details">
              <img className="manga-image" src={product.image} alt="product.img" />
              <h2 className="manga-title">{product.name}</h2>
              <p className="manga-description">{product.description}</p>
              <p className="manga-price">Цена: {product.price}тг.</p>
              <button onClick={() => addToCart(product)}>Добавить в корзину</button>
            </div>
          </li>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
