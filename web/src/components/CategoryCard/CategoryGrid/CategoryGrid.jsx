import { useState, useEffect } from "react";
import { Link } from "react-router-dom"; 
import DeleteBtn from "../../../imgs/deletebtn.png";
import styles from "./CategoryGrid.module.css";


const CategoryCard = ({ category }) => {
  const { featuredImage, productCategory, stock, basePrice, display } = category;

  return (
    <div className={styles.card}>
      <div className={styles.img_wrap}>
        <img src={featuredImage} alt="Category" className={styles.card_img} />
      </div>
      <div className={styles.info_wrap}>
        <h2 className={styles.card_title}>{productCategory}</h2>
        <p className={styles.card_info}>
          <span style={{ fontWeight: 500 }}>{`${stock} Items`}</span>
          {` | € ${basePrice}`}
        </p>
        <p className={styles.card_date}>{display}</p>
        <button className={styles.delete}>
          <img src={DeleteBtn} alt="delete" className={styles.delete_icon} />
        </button>
      </div>
    </div>
  );
};

export const CategoryGrid = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
   getCategories()
     }, []);

     const getCategories = () =>
      {
        fetch('https://dummyapi.online/api/products')
        .then(response => response.json())
        .then(data => {
          console.log (data)
          const eightData = Array.isArray(data) ? data.slice(0, 8) : [];
          setCategories(eightData);
        })
        .catch(error => console.error('Error fetching data:', error));
  
      } 

  return (
    <div className={styles.wrapper}>
      {categories.map(category => (
        <Link key={category.id} to={`/category/${category.id}`}>
          <CategoryCard category={category} />
        </Link>
      ))}
    </div>
  );
};
