// import React, { useEffect, useState } from "react";

// const RecentActivity = () => {
//   const [activities, setActivities] = useState([]);

//   useEffect(() => {
//     const fetchActivity = async () => {
//       try {
//         const res = await fetch("/api/v1/recent-activity", {
//           method: "GET",
//         });
//         const data = await res.json();
//         setActivities(data);
//         console.log(data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchActivity();
//     const intervalId = setInterval(fetchActivity, 1000000);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, []);

//   return activities.map((activity, index) => {
//     return (
//       <>
//         <p key={index} className="activity">
//           <b>{activity.username}</b> has {activity.action} {activity.entityType}{" "}
//           <b>{activity.entityName}</b> {activity.category ? "in" : ""}{" "}
//           <b>
//             {activity.category} {activity.category ? "(Category)" : ""}
//           </b>
//         </p>
//       </>
//     );
//   });
// };

// export default RecentActivity;

import styles from "../RecentActivity/RecentActivity.module.css"
import { useState, useEffect } from "react";

export const RecentActivity = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await fetch('/api/activities'); 
        if (!response.ok) {
          throw new Error('Failed to fetch activities');
        }
        const data = await response.json();
        setActivities(data);
      } catch (error) {
        console.error('Error fetching activities:', error);
      }
    };

    fetchActivities();
  }, []);

  const getActivityText = (activity) => {
    return `${activity.role} has ${activity.action} ${activity.item} in ${activity.subcategory} (${activity.category} Category)`;
  };



  return (
    <div className={styles.container}>
      <h2 className={styles.recenth2}>Recent Activity</h2>
      <div className={styles.activitybox}>
          <p className={styles.activitytext}>Activity1: Lorem ipsum dolor sit amet...</p>
        </div>
        <div className={styles.activitybox}>
          <p className={styles.activitytext}>Activity2: Lorem ipsum dolor sit amet...</p>
        </div>
        <div className={styles.activitybox}>
          <p className={styles.activitytext}>Activity3: Lorem ipsum dolor sit amet...</p>
        </div>
        <div className={styles.activitybox}>
          <p className={styles.activitytext}>Activity4: Lorem ipsum dolor sit amet...</p>
        </div>
      {activities.map((activity, index) => (
        <div key={index} className={styles.activitybox}>
          <p className={styles.activitytext}>{getActivityText(activity)}</p>
        </div>
      ))}
    </div>
  );
};