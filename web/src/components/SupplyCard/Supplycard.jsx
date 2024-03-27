import { useState, useEffect } from "react";
import styles from "./SupplyCard.module.css";
import Delete from "../../imgs/deletebtn.png";

const SupplyCard = ({ supplier }) => {
    const { username, location, birthDate, email } = supplier;
    
      return (
        <div className={styles.card}>
          <div className={styles.menu_panel} >
            <h2 className={styles.card_title}>{username}</h2>
          </div>
            <div className={styles.card_info}>
              <div className={styles.card_address}>
                  <p>Address:</p>
                  <text className={styles.api_address}>{location}</text>
              </div>
              <div className={styles.card_phone}>
                <p>Phone<br/>number:</p>
              <p className={styles.api_phone}>{birthDate}</p>
              </div>
             <div className={styles.card_email}>
              <p>Email: </p>
             <p className={styles.api_email}>{email}</p>
             </div>
            </div>
          <button className={styles.delete}><img src={Delete} alt="delete" className={styles.delete_icon} /></button>
          </div>
      );
    };
    
    export const Suppliers = () => {
      const [suppliers, setSuppliers] = useState([]);
    
      useEffect(() => {
        fetch('https://dummyapi.online/api/social-profiles')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            if (Array.isArray(data)) {
              const eightData = data.slice(0, 8);
              setSuppliers(eightData);
            } else {
              console.error('Data is not an array:', data);
              setSuppliers([]); // [] ova e da se resetira ili da se zadrzi nizata e prazna
            }
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setSuppliers([]);
          });
      }, []);
    
      return (
        <div className={styles.wrapper} >
          {Array.isArray(suppliers) && suppliers.map(supplier => (
            <SupplyCard key={supplier.id} supplier={supplier} />
          ))}
        </div>
      );
    };
    