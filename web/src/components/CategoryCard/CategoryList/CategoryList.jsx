import { useState, useEffect } from "react";
import DeleteBtn from "../../../imgs/deletebtn.png";
import styles from "./CategoryList.module.css";

const CategoryCard = ({ category }) => {
    const { featuredImage, productCategory, stock, basePrice, display } = category;
  
    return (
      <div className={styles.card}>
        <div className={styles.left} >
        <img src={featuredImage} alt="Category" className={styles.card_img} />
        </div>
              <div className={styles.center} >
                  <h2 className={styles.card_title}>{productCategory}</h2>
                  <p className={styles.card_info}> <span style={{ fontWeight: 500 }}>{`${stock} Items`}</span>{` | € ${basePrice}`}</p>
              </div>
                  <div className={styles.right} >
                      <p className={styles.card_date}>{display}</p>
                      <button className={styles.delete}><img src={DeleteBtn} alt="delete" className={styles.delete_icon} /></button>   
                  </div>
      </div>
    );
  };
  
  export const CategoryList = () => {
    const [categories, setCategories] = useState([]);
  
    useEffect(() => {
      fetch('https://dummyapi.online/api/products')
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          if (Array.isArray(data)) {
            const eightData = data.slice(0, 4);
            setCategories(eightData);
          } else {
            console.error('Data is not an array:', data);
            setCategories([]); 
          }
        })
        .catch(error => {
          console.error('Error fetching data:', error);
          setCategories([]); 
        });
    }, []);
  
    return (
      <div className={styles.wrapper} >
        {Array.isArray(categories) && categories.map(category => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    );
  };
  