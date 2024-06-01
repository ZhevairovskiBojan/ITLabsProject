import styles from "./ActivityItem.module.css";

import { useState, useEffect } from 'react';

export const Activity = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch('https://65fa26993909a9a65b19f3a1.mockapi.io/api/activities/activities'); 
        if (!response.ok) {
          throw new Error('Failed to fetch activity history');
        }
        const data = await response.json();
        setActivities(data); 
      } catch (error) {
        console.error('Error fetching activity history:', error);
      }
    };

    fetchActivities();
  }, []);
  const getActivityText = (activity) => {
    return (
      <span>
        {activity.role} has {activity.action} item <b>{activity.item}</b> in <b>{activity.subcategory}</b> (<b>{activity.category} Category</b>)
      </span>
    );
  };
  return (
    <div>
      <h2 className={styles.activityHistoryHeader}>Activity History</h2>
      {activities.map((activity, index) => (
        <div key={index} className={styles.activitybox}>
          <p className={styles.activitytext}>{getActivityText(activity)}</p>
        </div>
      ))}
    </div>
  );
};