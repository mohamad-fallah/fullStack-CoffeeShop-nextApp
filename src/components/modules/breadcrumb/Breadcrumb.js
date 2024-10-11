import Link from "next/link";
import styles from "./breadcrumb.module.css";
const Breadcrumb = ({ route }) => {
  return (
    <div className={styles.breadcrumb}>
      <p className={styles.title}>{route}</p>
      <div>
        <Link href={"/"}>خانه</Link>
        <span>/</span>
        <p>{route}</p>
      </div>
    </div>
  );
};

export default Breadcrumb;
