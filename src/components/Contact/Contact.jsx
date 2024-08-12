import React, { useState, useEffect, useRef } from 'react';
import styles from "./ContactStyles.module.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      });
    }, {
      threshold: 0.1, // Trigger when 10% of the section is visible
    });

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    fetch('https://formspree.io/f/xgvwvdwy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    }).then((response) => {
      setLoading(false);
      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        console.error('Failed to send message.');
      }
    }).catch((err) => {
      setLoading(false);
      console.error('Failed to send message:', err);
    });
  };

  return (
    <section
      id="contact"
      className={`${styles.contact} ${isVisible ? styles.fadeIn : styles.fadeOut}`}
      ref={contactRef}
    >
      <div className={styles.container1}>
        <p className={styles.tag}>Contact</p>
        <p className={styles.title}>Reach out to me</p>
        {loading ? (
          <div className={styles.loader}>
            <div className={styles.container}>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
              <div className={styles.dot}></div>
            </div>
          </div>
        ) : submitted ? (
          <p className={styles.successMessage}>Thank you for reaching out! I will get back to you shortly.</p>
        ) : (
          <form onSubmit={handleSubmit} className={styles.form}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              className={styles.input}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className={styles.input}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className={styles.textarea}
              required
            />
            <button type="submit" className={styles.button}>Send</button>
          </form>
        )}
      </div>
    </section>
  );
}

export default Contact;
