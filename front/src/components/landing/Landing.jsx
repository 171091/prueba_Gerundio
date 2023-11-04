import styles from "./Landing.module.css";
import { NavLink } from "react-router-dom";

export default function Landing() {
  return (
    <div className={styles.Landing}>
      <div className={styles.container}>
        <h1>Prueba Manuable TANIA</h1>
        <NavLink to="/home">
          <button>Join Now</button>
        </NavLink>
      </div>
    </div>
  );
}
