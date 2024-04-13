import styles from "./ActivityItem.module.css";

const moment = require("moment");

const ActivityItem = ({ activity, dashboard }) => {
  const formattedDate = moment(activity.date).format("MM/DD/YYYY HH:mm");

  return (
    <div className={styles[`activityLine ${dashboard ? "dashboardActivity" : ""}`]}>

      <p>
        Admin has {activity.action} item <b>{activity.itemName}</b> in <b>{activity.categoryName}</b>
      </p>
      {!dashboard && <p>{formattedDate}</p>}
    </div>
  );
};

export default ActivityItem;