"use client";
import { useState } from "react";
import styles from "./sms.module.css";
import { showSwal } from "@/utils/helpers";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

const Sms = ({ hideOtpForm, phone }) => {
  const router = useRouter();
  const [code, setCode] = useState("");

  const verifyCode = async () => {
    // Validation (You) ✅

    const body = { phone, code };
    const res = await fetch("/api/auth/sms/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (res.status === 409) {
      return showSwal("کد وارد شده معتبر نیست", "error", "تلاش مجدد");
    } else if (res.status == 410) {
      return showSwal("کد وارد شده منقضی شده", "error", "تلاش مجدد");
    } else if (res.status === 200) {
      swal({
        title: "ثبت نام شما با موفقیت انجام شد",
        icon: "success",
        buttons: "ورود به پنل کاربری",
      }).then(() => {
        router.replace("p-user");
      });
    }
  };

  return (
    <>
      <div className={styles.form}>
        <p>کد تایید</p>
        <span className={styles.code_title}>
          لطفاً کد تأیید ارسال شده را تایپ کنید
        </span>
        <span className={styles.number}>{phone}</span>
        <input
          className={styles.input}
          type="text"
          value={code}
          onChange={(event) => setCode(event.target.value)}
        />
        <button
          style={{ marginTop: "1rem" }}
          className={styles.btn}
          onClick={verifyCode}
        >
          ثبت کد تایید
        </button>
        <p className={styles.send_again_code}>ارسال مجدد کد یکبار مصرف</p>
      </div>
      <p onClick={hideOtpForm} className={styles.redirect_to_home}>
        لغو
      </p>
    </>
  );
};

export default Sms;
