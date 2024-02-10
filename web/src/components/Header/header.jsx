import User from "../../imgs/User.png";
import styles from "./header.module.css"

function Header () {

  return (
    <div className={styles["header-comp"]}>
      <h1>Dashboard</h1>
      <div className={styles["header-right"]}>
        <h2 className={styles["welcome"]}>Welcome back Name Surname!</h2>
        <img className={styles["user-logo"]} src={User} alt="User-logo">

        </img>
      </div>
    </div>
  )
}

export default Header;
  