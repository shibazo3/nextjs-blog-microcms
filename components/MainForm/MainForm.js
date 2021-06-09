import React, { useState } from "react";
import styles from "./mainForm.module.css";
import Router from "next/router";

const MainForm = () => {
  const key = process.env.ACCESS_KEY
    ? process.env.ACCESS_KEY
    : process.env.X_ACCESS_KEY;
  const [contact, setContact] = useState({
    name: "",
    email: "",
    subject: "お問い合わせ",
    message: "",
    replyTo: "shibazou3@gmail.com",
    accessKey: key,
  });

  const [response, setResponse] = useState({
    type: "",
    message: "",
  });

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("https://api.staticforms.xyz/submit", {
        method: "POST",
        body: JSON.stringify(contact),
        headers: { "Content-Type": "application/json" },
      });
      const json = await res.json();
      if (json.success) {
        //成功したらsuccessページに飛ぶ
        Router.push({
          pathname: "/success",
          query: { id: "thanks" },
        });
      } else {
        setResponse({
          type: "error",
          message: json.message,
        });
      }
    } catch (e) {
      console.log("An error occurred", e);
      setResponse({
        type: "error",
        message: "An error occured while submitting the form",
      });
    }
  };
  return (
    <>
      <div className={styles.mainForm}>
        <p>{response.message}</p>
        <h2 className={styles.heading1}>お問い合わせ</h2>
        <p className={styles.text1}>
          ご依頼・お問い合わせなどございましたら、下記よりお気軽にご連絡ください。
        </p>
        <form
          action="https://api.staticforms.xyz/submit"
          method="post"
          onSubmit={handleSubmit}
        >
          <div>
            <label className={styles.label}>
              お名前<span className={styles.mark}>必須</span>
            </label>
            <input
              className={styles.name}
              type="text"
              name="name"
              onChange={handleChange}
              placeholder="山田太郎"
              required
            />
          </div>

          <div>
            <label className={styles.label}>
              メールアドレス<span className={styles.mark}>必須</span>
            </label>
            <input
              className={styles.mail}
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="example＠example.com"
              required
            />
          </div>

          <div>
            <label className={styles.label}>
              お問い合わせ内容<span className={styles.mark}>必須</span>
            </label>
            <textarea
              className={styles.message}
              name="message"
              onChange={handleChange}
              placeholder="仕事を依頼したい"
              required
            />
          </div>

          <div className={styles.wrapper}>
            <button type="submit" className={styles.submit}>
              送信
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default MainForm;
