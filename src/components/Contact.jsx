import React from "react";
import styles, { layout } from "../styles";

const Contact = () => (
  <section id="contact" className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Contact Me <span className="ml-2 hidden md:block">👉</span>
        <span className="md:hidden">👇</span>
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Let's keep in touch!
      </p>
    </div>

    <div className="md:mt-0 mt-6 md:w-[35%] w-full">
      <form className="flex flex-col">
        <label className={styles.textInputLabel}>Your Name</label>
        <input type="text" name="name" className={styles.textInputSmall} />
        <label className={styles.textInputLabel}>Your Email</label>
        <input type="text" name="email" className={styles.textInputSmall} />
        <label className={styles.textInputLabel}>Message</label>
        <textarea
          type="text"
          name="message"
          className={styles.textInputLarge}
        />
        <input
          type="submit"
          value="Send"
          className="py-4 px-6 bg-sky-600 font-poppins font-medium text-[18px] text-primary outline-none mt-4"
        />
      </form>
    </div>
  </section>
);

export default Contact;
