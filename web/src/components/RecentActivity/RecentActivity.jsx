import styles from "./recentActivity.module.css";


function RecentActivity() {
  return (
    <div>
        <h1>Recent Activity</h1>
        <div>
            <div className={styles["activity-box"]}>
                <p>Admin has created item Office Pens in Office Supply  (Office Category)</p>

            </div>

            <div className={styles["activity-box"]}>
                <p>Admin has created item A4 Paper in Office Supply  (Office Category)</p>

            </div>

            <div className={styles["activity-box"]}>
                <p>Admin has deleted item Espresso in Kitchen Supply  (Kitchen Category)</p>

            </div>

            <div className={styles["activity-box"]}>
                <p>Admin has moved item Mouse in Office Supply (Office Category)</p>

            </div>
        </div>
    </div>
  )
}

export default RecentActivity