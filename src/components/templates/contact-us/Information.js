import {
  FaEnvelopeOpenText,
  FaInternetExplorer,
  FaPhone,
  FaTelegramPlane,
} from "react-icons/fa";
import styles from "./information.module.css";
import { PiCoffeeFill } from "react-icons/pi";
import { BiSolidContact } from "react-icons/bi";

const Information = () => {
  return (
    <section className={styles.Information}>
      <span>تماس با ما</span>
      <p>اطلاعات تماس</p>
      <div>
        <PiCoffeeFill />
        <p>شرکت فنجان داغ خوارزمی (کارخانه قهوه ست )</p>
      </div>
      <div>
        <FaInternetExplorer />
        <p>set-coffee.com</p>
      </div>
      <div>
        <BiSolidContact />
        <p>
          {" "}
          تهران. پاکدشت . شهرک صنعتی خوارزمی. فاز 2 . بلوار بهارستان. خیابان
          ماگنولیا بلوک آ117{" "}
        </p>
      </div>
      <div>
        <FaPhone />
        <p>021-36479228</p>
      </div>
      <div>
        <FaEnvelopeOpenText />
        <p>offee[at]set-coffee.com</p>
      </div>
      <div>
        <FaEnvelopeOpenText />
        <p>whole[at]set-coffee.com</p>
      </div>
      <div>
        <FaTelegramPlane />
        <p>تماس با مدیریت از طریق واتساپ و یا تلگرام : 09366726563</p>
      </div>
    </section>
  );
};

export default Information;
