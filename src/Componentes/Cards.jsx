import React from "react";
import "../Style/Cards.css";

const Cards = ({ image, title, description, price, onAdd, onInfo }) => (
  <div className="product-card">
    <img src={image} alt={title} className="product-image" />
    <div className="product-details">
      <h2 className="product-title">{title}</h2>
      <p className="product-description">{description}</p>
      <p className="product-price">${price}</p>
      <div className="product-buttons">
        <button onClick={onAdd} className="btn-add">Agregar</button>
        <button onClick={onInfo} className="btn-info">Info</button>
      </div>
    </div>
  </div>
);

const App = () => {
  const handleAdd = () => alert("Producto agregado al carrito");
  const handleInfo = () => alert("Mostrando información del producto");

  return (
    <div className="container">
      <div className="cards">
        <Cards
          image="https://via.placeholder.com/300"
          title="Pintura Abstracta"
          description="Una hermosa pintura abstracta para decorar tu hogar."
          price="150.00"
          onAdd={handleAdd}
          onInfo={handleInfo}
        />
        <Cards
          image="https://via.placeholder.com/300"
          title="Escultura Moderna"
          description="Escultura moderna hecha a mano."
          price="250.00"
          onAdd={handleAdd}
          onInfo={handleInfo}
        />
      </div>
    </div>
  );
};

export default App;