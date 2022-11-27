import React from "react";
import styles, { layout } from "../styles";
import { useForm } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";

const Contact = () => {
  // initialize form vars
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  // TODO change to EmailJS API call
  const onSubmit = (data) => console.log(data);

  return (
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
        <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
          <label className={styles.textInputLabel}>Your Name</label>
          <input
            {...register("name", { required: "Your name is required." })}
            type="text"
            name="name"
            className={styles.textInputSmall}
          />
          {errors.name && (
            <p className={styles.formInputError}>
              <BiErrorCircle className={styles.formErrorIcon} />
              {errors.name?.message}
            </p>
          )}

          <label className={styles.textInputLabel}>Your Email</label>
          <input
            {...register("email", {
              required: "Your email is required.",
              pattern:
                /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
            })}
            type="text"
            name="email"
            className={styles.textInputSmall}
          />
          {errors.email && (
            <p className={styles.formInputError}>{errors.email?.message}</p>
          )}
          {errors.email?.type === "pattern" && (
            <p className={styles.formInputError}>
              <BiErrorCircle className={styles.formErrorIcon} />
              Please enter a valid email address.
            </p>
          )}

          <label className={styles.textInputLabel}>Message</label>
          <textarea
            {...register("message", { required: "A message is required." })}
            type="text"
            name="message"
            className={styles.textInputLarge}
          />
          {errors.message && (
            <p className={styles.formInputError}>
              <BiErrorCircle className={styles.formErrorIcon} />
              {errors.message?.message}
            </p>
          )}

          <input
            type="submit"
            value="Send"
            className="py-4 px-6 bg-sky-600 font-poppins font-medium text-[18px] text-primary outline-none mt-4"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
