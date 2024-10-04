import styles from "./register.module.css";

const Register = () => {
  return (
    <>
      <div className={styles.form}>
        <input className={styles.input} type="text" placeholder="نام" />
        <input
          className={styles.input}
          type="text"
          placeholder="شماره موبایل  "
        />
        <input
          className={styles.input}
          type="email"
          placeholder="ایمیل (دلخواه)"
        />
        {registerWithPass && (
          <input
            className={styles.input}
            type="password"
            placeholder="رمز عبور"
          />
        )}
        <p style={{ marginTop: "1rem" }} className={styles.btn}>
          ثبت نام با کد تایید
        </p>
        <button style={{ marginTop: ".7rem" }} className={styles.btn}>
          ثبت نام با رمزعبور
        </button>
        <p className={styles.back_to_login}>برگشت به ورود</p>
      </div>
      <p className={styles.redirect_to_home}>لغو</p>

      {/* <Sms /> */}
    </>
  );
};

export default Register;
