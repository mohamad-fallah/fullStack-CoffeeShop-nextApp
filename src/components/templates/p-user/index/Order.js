import Link from "next/link";
import styles from "./order.module.css";

const Order = () => {
  return (
    <Link href={`/product/123`} className={styles.card}>
      <div>
        <div>
          <p>قهوه عربیکا 40 درصد</p>
          <img
            src="https://set-coffee.com/wp-content/uploads/2022/03/ethiopia-430x430.png"
            alt=""
          />
        </div>
        <p>تکمیل شده</p>
      </div>
      <div>
        <p>8:00 1402/10/21</p>
        <p className={styles.price}>200000 هزار تومان</p>
      </div>
    </Link>
  );
};

export default Order;
