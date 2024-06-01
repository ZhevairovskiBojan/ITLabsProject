import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import DeleteBtn from "../../../imgs/deletebtn.png";
import styles from "./ItemGrid.module.css";  

const ItemCard = ({ item }) => {
  const { featuredImage, itemName, stock, price, display } = item;

  return (
    <div className={styles.card}>
      <div className={styles.img_wrap}>
        <img src={featuredImage} alt="Item" className={styles.card_img} />
      </div>
      <div className={styles.info_wrap}>
        <h2 className={styles.card_title}>{itemName}</h2>
        <p className={styles.card_info}>
          <span style={{ fontWeight: 500 }}>{`${stock} Items`}</span>
          {` | € ${price}`}
        </p>
        <p className={styles.card_date}>{display}</p>
        <button className={styles.delete}>
          <img src={DeleteBtn} alt="delete" className={styles.delete_icon} />
        </button>
      </div>
    </div>
  );
};

export const ItemGrid = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch('https://dummyapi.online/api/items') 
      .then(response => response.json())
      .then(data => {
        const eightData = Array.isArray(data) ? data.slice(0, 8) : [];
        setItems(eightData);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className={styles.wrapper}>
      {items.map(item => (
        <Link key={item.id} to={`/item/${item.id}`}>
          <ItemCard item={item} />
        </Link>
      ))}
    </div> 
  );
};
