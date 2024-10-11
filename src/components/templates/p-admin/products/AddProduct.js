"use client";
import React, { useState } from "react";
import styles from "./table.module.css";
import swal from "sweetalert";
import { useRouter } from "next/navigation";

function AddProduct() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [weight, setWeight] = useState("");
  const [suitableFor, setSuitableFor] = useState("");
  const [smell, setSmell] = useState("");
  const [tags, setTags] = useState("");
  const [img, setImg] = useState({});

  const addProduct = async () => {
    // Validation (You) ✅👇

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("shortDescription", shortDescription);
    formData.append("longDescription", longDescription);
    formData.append("weight", weight);
    formData.append("suitableFor", suitableFor);
    formData.append("smell", smell);
    formData.append("tags", tags.split("،"));
    formData.append("img", img);

    const res = await fetch("/api/products", {
      method: "POST",
      body: formData,
    });

    console.log("Res ->", res);

    if (res.status === 201) {
      swal({
        title: "محصول مورد نظر با موفقیت ایجاد شد",
        icon: "success",
        buttons: "فهمیدم",
      }).then(() => {
        router.refresh();
      });
    }
  };
  return (
    <section className={styles.discount}>
      <p>افزودن محصول جدید</p>
      <div className={styles.discount_main}>
        <div>
          <label>نام محصول</label>
          <input
            value={name}
            onChange={(event) => setName(event.target.value)}
            placeholder="لطفا نام محصول را وارد کنید"
            type="text"
          />
        </div>
        <div>
          <label>مبلغ محصول</label>
          <input
            value={price}
            onChange={(event) => setPrice(event.target.value)}
            placeholder="لطفا مبلغ محصول را وارد کنید"
            type="text"
          />
        </div>

        <div>
          <label>توضیحات کوتاه</label>
          <input
            value={shortDescription}
            onChange={(event) => setShortDescription(event.target.value)}
            placeholder="توضیحات کوتاه محصول"
            type="text"
          />
        </div>
        <div>
          <label>توضیحات بلند</label>
          <input
            value={longDescription}
            onChange={(event) => setLongDescription(event.target.value)}
            placeholder="توضیحات بلند محصول"
            type="text"
          />
        </div>
        <div>
          <label>وزن</label>
          <input
            value={weight}
            onChange={(event) => setWeight(event.target.value)}
            placeholder="وزن محصول"
            type="text"
          />
        </div>
        <div>
          <label>مناسب برای:</label>
          <input
            value={suitableFor}
            onChange={(event) => setSuitableFor(event.target.value)}
            placeholder="مناسب برای ..."
            type="text"
          />
        </div>
        <div>
          <label>میزان بو</label>
          <input
            value={smell}
            onChange={(event) => setSmell(event.target.value)}
            placeholder="میزان بو"
            type="text"
          />
        </div>
        <div>
          <label>تگ های محصول</label>
          <input
            value={tags}
            onChange={(event) => setTags(event.target.value)}
            placeholder="مثال: قهوه،قهوه ترک، قهوه اسپرسو"
            type="text"
          />
        </div>
        <div>
          <label>تصویر محصول</label>
          <input
            onChange={(event) => setImg(event.target.files[0])}
            type="file"
          />
        </div>
      </div>
      <button onClick={addProduct}>افزودن</button>
    </section>
  );
}

export default AddProduct;
