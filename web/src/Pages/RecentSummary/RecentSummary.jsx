import styles from "./RecentSummary.module.css";
import { useContext, useState, useEffect } from "react";
import { useFetchData } from "../../util/FetchData";
import LineChart from "../../components/LineChart/LineChart";

import { Context } from "../../util/FetchContextProvider";
import Calendar from "../../imgs/Calendar.png";

export const RecentSummaryReport = () => {
    const { allOrders } = useFetchData();
    const { categories } = useContext(Context);
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("");
    const [chartData, setChartData] = useState({ labels: [], datasets: [] });

    useEffect(() => {
      // ako treba tuka ke se impementira logika ke vidime
    }, [allOrders, startDate, endDate, selectedCategory]);
    
    const handleShow = () => {
        const filteredOrders = allOrders.filter(order => {
            const orderDate = new Date(order.date);
            const start = startDate ? new Date(startDate) : new Date('1900-01-01');
            const end = endDate ? new Date(endDate) : new Date('2100-01-01');
            
            return orderDate >= start && orderDate <= end && 
                   (selectedCategory === '' || order.category === selectedCategory);
        });
    
        const labels = filteredOrders.map(order => order.date.split('T')[0]);
        const data = filteredOrders.map(order => order.totalPrice);
    
        setChartData({
            labels,
            datasets: [{
                label: 'Total Cost',
                data,
            }],
        });
    };
  
    return (
      <div className={styles['inventory-summary']}>
        <form className={styles['inventory-top-part']}>
          <div className={styles['date-input-container']} data-text="Date to">
            <input
              type="date"
              name="startDate"
              value={startDate}
              className={styles.input} 
              style={{backgroundImage: `url(${Calendar})`, backgroundRepeat: 'no-repeat', paddingLeft: '30px'}} 
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <div className={styles['date-input-container']}>
            <input
              type="date"
              name="endDate"
              value={endDate}
              className={styles.input} 
              style={{backgroundImage: `url(${Calendar})`, backgroundRepeat: 'no-repeat', paddingLeft: '30px'}} 
              onChange={(e) => setEndDate(e.target.value)}
            />
          </div>
          <select
            className={styles['categories-select-container']}
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category._id} value={category.name}>{category.name}</option>
            ))}
          </select>
          <button 
            type="button"
            className={styles['show-reset-btn']}
            onClick={handleShow}
          >
            Show
          </button>
        </form>
        <div className={styles['line-chart']}>
          <LineChart chartData={chartData} />
          <prepareChartData />
          
          
        </div>
      </div>
    );
};