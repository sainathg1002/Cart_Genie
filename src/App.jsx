import React, { useState } from "react";
import ProductList from "./components/ProductList.jsx";
import Cart from "./components/Cart.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const products = [
    { id: 1, name: "Wireless Headphones", price: 999, image: "/images/01_34af94b9-40d7-4956-805e-0cb7df907ef7.webp" },
    { id: 2, name: "Smartwatch", price: 1999, image: "/images/download.jpg" },
    { id: 3, name: "Bluetooth Speaker", price: 1499, image: "/images/download (2).jpg" },
    { id: 4, name: "Gaming Mouse", price: 699, image: "/images/Redragon-M913-Impact-Elite-Wired-and-Wireless-Gaming-Mouse-Black-1-e1722667722926.jpg" },
    {id:5,name:"Bluetooth speaker",price: 1600,image:"/images/download (1).jpg"},
    {id:6,name:"Eardopes",price:1300,image:"/images/images.jpg"}
  
  ];

  const addToCart = (product) => {
    const existing = cartItems.find((item) => item.id === product.id);
    if (existing) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCartItems((prev) => prev.map((item) => (item.id === id ? { ...item, qty: item.qty + 1 } : item)));
  };

  const decreaseQty = (id) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (!existing) return prev;
      if (existing.qty > 1) {
        return prev.map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item));
      }
      // remove item when qty reaches 0
      return prev.filter((item) => item.id !== id);
    });
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div style={styles.pageContainer}>
      <header style={styles.header}>
        <h1> Smart Shopping</h1>
      </header>
      <div style={styles.layout}>
        <main style={styles.main}>
          <ProductList products={products} addToCart={addToCart} />
        </main>
        <aside style={styles.sidebar}>
          <Cart
            cartItems={cartItems}
            increaseQty={increaseQty}
            decreaseQty={decreaseQty}
            removeFromCart={removeFromCart}
          />
        </aside>
      </div>
    </div>
  );
}

const styles = {
  pageContainer: {
    minHeight: "100vh",
    backgroundImage: "url('/images/backgroundimg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundAttachment: "fixed",
    backgroundRepeat: "no-repeat",
  },
  header: {
    position: "sticky",
    top: 0,
    background: "rgba(216, 233, 217, 0.92)",
    backdropFilter: "blur(8px)",
    borderBottom: "1px solid rgba(238, 238, 238, 0.5)",
    padding: "1rem",
    zIndex: 10,
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  },
  layout: {
    display: "grid",
    gridTemplateColumns: "1fr 400px",
    gap: "2rem",
    padding: "1rem",
    maxWidth: "1400px",
    margin: "0 auto",
    position: "relative",
    zIndex: 1,
  },
  main: {
    minHeight: "calc(100vh - 80px)",
    
    backdropFilter: "blur(8px)",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  },
  sidebar: {
    position: "sticky",
    top: "80px", // header height + some padding
    height: "fit-content",
    alignSelf: "start",
  },
};

export default App;
