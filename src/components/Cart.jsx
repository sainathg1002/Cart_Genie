import React from "react";
import { color, motion, vh } from "framer-motion";

function Cart({ cartItems, increaseQty, decreaseQty, removeFromCart }) {
  const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      style={{ ...styles.cart, position: 'sticky', top: '20px', alignSelf: 'flex-start' }}
    >
      <h2><img src="/images/cartimg.png" alt="Cart" style={styles.cartIcon} /> Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          <div style={styles.itemsList}>
            {cartItems.map((item) => (
              <div key={item.id} style={styles.item}>
                <div style={styles.itemLeft}>
                  <strong style={{ display: 'block' }}>{item.name}</strong>
                  <small style={{ color: '#666' }}>₹{item.price} each</small>
                </div>

                <div style={styles.itemRight}>
                  <div style={styles.controls}>
                    <button onClick={() => decreaseQty(item.id)} style={styles.controlBtn} aria-label={`Decrease ${item.name}`}>-</button>
                    <span style={styles.qty}>{item.qty}</span>
                    <button onClick={() => increaseQty(item.id)} style={styles.controlBtn} aria-label={`Increase ${item.name}`}>+</button>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <div>₹{item.price * item.qty}</div>
                    <button onClick={() => removeFromCart(item.id)} style={styles.removeBtn} aria-label={`Remove ${item.name}`}><img src="\images\wrongimg.png" style={styles.wrong}></img></button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <hr />
          <div style={styles.totalContainer}>
            <h3>Total: ₹{total}</h3>
            <motion.button 
              style={styles.buyButton}
              onClick={() => alert('Thank you for your purchase!')}
              disabled={cartItems.length === 0}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#17d21dff",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 17
              }}
            >
              Buy Now
            </motion.button>
          </div>
        </>
      )}
    </motion.div>
  );
}

const styles = {
  cart: {
    border: "1px solid #ccc",
    padding: "16px",
    borderRadius: "12px",
    width: "320px",
    marginTop: "20px",
    background: "bisque",
  },
  item: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "12px",
    gap: "12px",
    padding: "8px 4px",
    borderRadius: "8px",
    background: "#fbfbfb",
  },
  controls: {
    display: "flex",
    alignItems: "center",
  },
  controlBtn: {
    padding: "4px 8px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    background: "#f7f7f7",
    cursor: "pointer",
  },
  qty: {
    margin: "0 8px",
    minWidth: "20px",
    textAlign: "center",
  },
  removeBtn: {
    background: "transparent",
    border: "none",
    cursor: "pointer",
  },
  itemsList: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    maxHeight: "50vh",
    overflowY: "auto",
    paddingRight: "8px",
  },
  itemLeft: {
    flex: "1 1 60%",
    textAlign: "left",
  },
  itemRight: {
    flex: "0 0 40%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    gap: "6px",
  },
  cartIcon: {
    height: "3vh",
    width: "auto",
    marginRight: "8px",
    verticalAlign: "middle",
  },
  wrong:{
    height:"3vh",
  },
  totalContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "16px",
    padding: "8px 0",
  },
  buyButton: {
    backgroundColor: "#d41010ff",
    color: "white",
    padding: "12px 24px",
    border: "none",
    borderRadius: "12px",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: "1.1rem",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    outline: "none",
    position: "relative",
    overflow: "hidden",
    backdropFilter: "blur(4px)",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    "&:disabled": {
      backgroundColor: "#cccccc",
      cursor: "not-allowed",
      transform: "none",
      boxShadow: "none",
      opacity: 0.7
    }
  }

};
export default Cart;
