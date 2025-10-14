import React from "react";
import { color, motion } from "framer-motion";

function ProductCard({ product, addToCart }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      style={styles.card}
    >
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>₹{product.price}</p>
      <button onClick={() => addToCart(product)} style={styles.button}>
         Add to Cart
      </button>
    </motion.div>
  );
}

const styles = {
  card: {
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "16px",
    textAlign: "center",
    width: "220px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    color:"aqua",
  },
  image: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px",
  },
  button: {
    marginTop: "10px",
    backgroundColor: "#d61942ff",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "8px 12px",
    cursor: "pointer",
  },
};

export default ProductCard;
