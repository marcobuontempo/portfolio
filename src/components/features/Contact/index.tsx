import { useState, type ChangeEvent, type FormEvent } from "react";
import Section from "../../common/Section";
import styles from "./styles.module.css";
import { FaEnvelope, FaSquareGithub, FaLinkedin } from "react-icons/fa6";

type Props = {};

const Contact = ({}: Props) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    _honey: "",
  });
  const [submitStatus, setSubmitStatus] = useState<
    "pending" | "success" | "error"
  >("pending");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitStatus("pending");

    fetch("https://formsubmit.co/ajax/marcobuontempo96@gmail.com", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        ...formData,
        _subject: "Contact Form Submission - marcobuontempo.com",
        _replyto: formData.email,
        _template: "table",
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setSubmitStatus("success");
      })
      .catch((error) => {
        console.log(error);
        setSubmitStatus("error");
      });
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Section title="Contact" id="contact" className={styles.contact}>
      <div className={styles.container}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input type="text" name="_honey" className={styles._honey} />
          <input
            className={styles.input}
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            type="text"
            placeholder="NAME*"
          />
          <input
            className={styles.input}
            name="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="EMAIL*"
          />
          <textarea
            className={styles.input}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="MESSAGE*"
          />
          <button
            className={styles.input}
            disabled={
              formData.name === "" ||
              formData.email === "" ||
              formData.message === "" ||
              submitStatus === "success"
            }
          >
            {submitStatus === "success"
              ? "SENT!"
              : submitStatus === "error"
              ? "ERROR - TRY AGAIN"
              : "SUBMIT"}
          </button>
        </form>

        <ul className={styles.links}>
          <li>
            <a
              href="mailto:marcobuontempo96@gmail.com"
              aria-label="Email Address (Mail-To) for Marco Buontempo"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <FaEnvelope className={styles.link} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/marcobuontempo/"
              aria-label="GitHub Account for Marco Buontempo"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <FaSquareGithub className={styles.link} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/marcobuontempo/"
              aria-label="LinkedIn Account for Marco Buontempo"
              target="_blank"
              referrerPolicy="no-referrer"
            >
              <FaLinkedin className={styles.link} />
            </a>
          </li>
        </ul>
      </div>
    </Section>
  );
};

export default Contact;
