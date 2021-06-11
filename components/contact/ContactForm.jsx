import React, { useEffect, useState } from "react";
import styles from "./ContactForm.module.css";
import Notification from "../ui/Notification";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState();
  const [requestError, setRequestError] = useState();

  useEffect(() => {
    let timer;

    if (status === "success" || status === "error") {
      timer = setTimeout(() => {
        setStatus(null);
        setRequestError(null);
      }, 3000);
    }

    return () => clearTimeout(timer);
  });

  async function sendMessageHandler(e) {
    e.preventDefault();

    try {
      setStatus("pending");

      const response = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify({ email, name, message }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await response.json();

      if (!response.ok)
        throw new Error(data.message || "Something went wrong!");

      setStatus("success");
      setMessage("");
      setName("");
      setEmail("");
    } catch (e) {
      setRequestError(e.message);
      setStatus("error");
    }
  }

  let notification;

  if (status === "pending") {
    notification = {
      status,
      message: "Your message is being sent",
      title: "Sending message",
    };
  }
  if (status === "success") {
    notification = {
      status,
      message: "Message sent successfully",
      title: "Success",
    };
  }
  if (status === "error") {
    notification = {
      status,
      message: requestError,
      title: "Error",
    };
  }

  return (
    <section className={styles.contact}>
      <h1>Greetings! Leave your message here.</h1>
      <form action="/" className={styles.form} onSubmit={sendMessageHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              required
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              required
              type="name"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            required
            rows="5"
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <div className={styles.actions}>
          <button>Send Your Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          status={notification.status}
          message={notification.message}
          title={notification.title}
        />
      )}
    </section>
  );
};

export default ContactForm;
