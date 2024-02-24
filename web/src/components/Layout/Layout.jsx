import { Outlet } from "react-router";
import Navigation from "../Navigation/navigation";
// import Header from "../Header/header";
import styles from "./Layout.module.css";

const Layout = () => {
    return (
        <div className={styles["navigation"]}>
            <Navigation/>
            <Outlet/>
            <div className={styles["header"]}>
                {/* <Header/> */}
           
            </div>
        </div>
    )
}
export default Layout