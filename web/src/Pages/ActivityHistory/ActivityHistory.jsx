import styles from "./ActivityHistory.module.css"
import { useContext, useState } from "react";
import { Context } from "../../util/FetchContextProvider";
import { Activity} from "../../components/ActivityItem/ActivityItem";
import Descending_Sorting from "../../imgs/Descending_Sorting.png"

export const ActivityHistory = () => {

    const { activities } = useContext(Context);
    const [filter, setFilter] = useState("All");
  
    const sortActivities = (activities) => {
      return activities.sort(
        (a,b) => new Date(b.date) - new Date(a.date)
      );
    };
  
    const applyFilter = (activities, filter) => {
      if(filter === "All") {
        return activities;
      } else {
        return activities.filter(activity => activity.action === filter);
      }
    };
  
    const handleFilterChange = (e) => {
      setFilter(e.target.value)
    };
  
    const sortedActivities = sortActivities(activities);
    const filtered = applyFilter(sortedActivities, filter);
    const latestActivities = filtered.slice(0,11);
  
    return (
     
            
          


           
            <section className={styles.activitiesContainer}>
            <div className={styles.page_wrapper}>
      <Activity />
      <div className={styles.ActivityHistory}>
      </div>
      </div>
              <div className={styles.leftPart}>
              <img src={Descending_Sorting} alt="sort-icon" className={styles.sortIcon} />
                <div className={styles.activities}>
                  {latestActivities.map((activity) => (
                    <Activity key={activity._id} activity={activity} />
                  ))}
                </div>
              </div>
              <div className={styles.activityFilter}>
                <h1>Filter Activities</h1>
                <hr />
                <form className={styles.activityForm}>
                  <label>
                    <input type="radio" name="selectedFilter" value="All" checked={filter === "All"}
                      onChange={handleFilterChange} defaultChecked />
                    All Activity
                  </label>
                  <label>
                    <input type="radio" name="selectedFilter" value="moved" checked={filter === "moved"}
                      onChange={handleFilterChange} />
                    Moved
                  </label>
                  <label>
                    <input type="radio" name="selectedFilter" value="edited" checked={filter === "edited"}
                      onChange={handleFilterChange} />
                    Edited
                  </label>
                  <label>
                    <input type="radio" name="selectedFilter" value="deleted" checked={filter === "deleted"}
                      onChange={handleFilterChange} />
                    Deleted
                  </label>
                  <label>
                    <input type="radio" name="selectedFilter" value="created" checked={filter === "created"}
                      onChange={handleFilterChange} />
                    Created
                  </label>
                  <label>
                    <input type="radio" name="selectedFilter" value="ordered" checked={filter === "ordered"}
                      onChange={handleFilterChange} />
                    Ordered
                  </label>
                </form>
              </div>
            </section>
          
    
      );
    }
   
    