import { IoClose } from "react-icons/io5";
import styles from "./modal.module.css";
const Modal = ({ hideModal, title, children }) => {
  return (
    <div className={styles.modal}>
      <div onClick={hideModal} className={styles.modal_overlay}></div>
      <div className={styles.modal_main}>
        <div className={styles.modal_header}>
          <span>{title}</span>
          <IoClose onClick={hideModal} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
