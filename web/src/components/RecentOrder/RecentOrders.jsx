import styles from "./recentOrders.module.css";
import OfficeMouse from "../../imgs/RecentItem1.png";
import Espresso from "../../imgs/RecentItem2.png";
import A4Paper from "../../imgs/RecentItem3.png";
import OfficePens from "../../imgs/RecentItem4.png";
import Arrow from "../../imgs/ExpandArrow.png";

import { useState } from "react";

const items = [
    { image: OfficeMouse, altImage: `office_mouse`, title: 'Office Mouse', unit: '7 Units', price: '133.00' },
    { image: A4Paper, altImage:`a4_papper`, title: 'A4 Paper', unit: '917 Units', price: '28.00' },
    { image: Espresso, altImage: `espresso`, title: 'Espresso', unit: '3 Units', price: '22.00' },
    { image: OfficePens, altImage: `office_pens`, title: 'Office Pens', unit: '66 Units', price: '17.00' },
    { image: OfficeMouse, altImage: `office_mouse`, title: ' Mouse', unit: '7 Units', price: '133.00' },
    { image: A4Paper, altImage:`a4_papper`, title: 'A4', unit: '917 Units', price: '28.00' },
    { image: Espresso, altImage: `espresso`, title: 'Cappuchino', unit: '3 Units', price: '22.00' },
    { image: OfficePens, altImage: `office_pens`, title: ' Pens', unit: '66 Units', price: '17.00' },
    { image: OfficeMouse, altImage: `office_mouse`, title: 'Office desk', unit: '7 Units', price: '133.00' },
    { image: A4Paper, altImage:`a4_papper`, title: 'Book', unit: '917 Units', price: '28.00' },
    { image: Espresso, altImage: `espresso`, title: 'Latte', unit: '3 Units', price: '22.00' },
    { image: OfficePens, altImage: `office_pens`, title: 'Eraser', unit: '66 Units', price: '17.00' }
  ];


  export const RecentOrders = () => {
    const [currentPage, setCurrentPage] = useState(0);

  const totalPages = Math.ceil(items.length / 4);

  const next = () => {
    setCurrentPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const prev = () => {
    setCurrentPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const renderLeftArrow = () => {
    if (currentPage === 0 && totalPages > 2) {
      return 'hide';
    } else {
      return '';
    }
  };

  const renderRightArrow = () => {
    if (currentPage === totalPages) {
      return 'hide';
    } else {
      return '';
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className={styles.carousel_container}>
      <div className={styles.carousel}>
      <h2 className={styles.rec_ord_h2}>Recent Orders</h2>
        <div className={styles.carousel_inner}>
            <button className={`${styles.arrow} ${styles.left} ${renderLeftArrow()}`} onClick={prev}>
          <img src={Arrow} alt="arrow" />
          </button>
              {items.slice(currentPage * 4, currentPage * 4 + 4).map((item) => (
                  <div key={item.id} className={styles.item}>
                      <img className={styles.item_img} src={item.image} alt={item.title} />
                      <div className={styles.info_wrap} >
                        <h3 className={styles.item_name}>{item.title}</h3>
                        <div className={styles.item_info}><p className={styles.item_info_text}>
                          <span className={styles.item_unit_bold}>{item.unit}</span> | {item.price}
                            </p>
                        </div>
                      </div>
                  </div>
               ))}
          <button className={`${styles.arrow} ${styles.right} ${renderRightArrow()}`} onClick={next}>
            <img src={Arrow} alt="arrow" />
          </button>
          <div className={styles.dots}>
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index}
            className={currentPage === index ? styles.dotActive : styles.dot}
            onClick={() => goToPage(index)}
          ></span>
            ))}
          </div>
        </div>
      </div>
 
    </div>
  );
};
