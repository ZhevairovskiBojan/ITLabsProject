import { useState, useEffect } from "react";
import styles from "./PrimaryHeading.module.css";

export const PrimaryHeading = () => {
    const [categoriesCount, setCategoriesCount] = useState(0);
    const [itemsCount, setItemsCount] = useState(0);
    const [totalOrdersCount, setTotalOrdersCount] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
  
    useEffect(() => {
      // Fetch data od MongoDb I kalkuliranje na site totals
      // Za demonstracija, ke upotrebam dummy data
      const fetchData = async () => {
        try {
          // Primer za fetching data od MongoDB
          // const categoriesData = await fetchCategoriesDataFromMongoDB();
          // const itemsData = await fetchItemsDataFromMongoDB();
          // const ordersData = await fetchOrdersDataFromMongoDB();
  
          // Dummy data za demonstracija
          const categoriesData = [/* Category dummy data */];
          const itemsData = [/*Items dummy data */];
          const ordersData = [/* Orders dummy data */];
  
          const categoriesCount = categoriesData.length;
          const itemsCount = itemsData.reduce((acc, item) => acc + item.quantity, 0);
          const totalOrdersCount = ordersData.length;
          const totalCost = ordersData.reduce((acc, order) => acc + order.totalCost, 0);
  
          setCategoriesCount(categoriesCount);
          setItemsCount(itemsCount);
          setTotalOrdersCount(totalOrdersCount);
          setTotalCost(totalCost);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);
  
    return (
      <div className={styles.primary_heading}>
        <p>Categories: {categoriesCount}</p>
        <p>Items: {itemsCount}</p>
        <p>Total Orders: {totalOrdersCount}</p>
        <p>Total Cost: €{totalCost.toLocaleString()}</p>
      </div>
    );
  };
  