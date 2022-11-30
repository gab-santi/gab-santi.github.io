import React, { useRef, useState } from "react";
import styles, { layout } from "../styles";
import { useForm } from "react-hook-form";
import { BiErrorCircle } from "react-icons/bi";
import { credentials } from "../constants/emailjs_creds";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  // initialize form vars
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const formRef = useRef();

  const [isLoading, setIsLoading] = useState(false);

  const sendEmail = () => {
    setIsLoading(true);

    emailjs
      .sendForm(
        credentials.service_id,
        credentials.template_id,
        formRef.current,
        credentials.public_key
      )
      .then(
        (result) => {
          setIsLoading(false);
          toast.success("Your message has been sent!", {
            position: toast.POSITION.TOP_CENTER,
          });
        },
        (error) => {
          toast.error("Please try again.", {
            position: toast.POSITION.TOP_CENTER,
          });
          setIsLoading(false);
        }
      );
  };

  // TODO change to EmailJS API call
  const onSubmit = (data) => sendEmail(data);

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
        <form
          ref={formRef}
          className="flex flex-col"
          onSubmit={handleSubmit(onSubmit)}
        >
          <label className={styles.textInputLabel}>Your Name</label>
          <input
            {...register("name", { required: "Your name is required." })}
            type="text"
            name="name"
            className={styles.textInputSmall}
            disabled={isLoading}
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
            disabled={isLoading}
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
            disabled={isLoading}
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
            className="py-4 px-6 bg-sky-600 font-poppins font-medium text-[18px] text-primary outline-none mt-4 disabled:bg-neutral-400"
            disabled={isLoading}
          />
        </form>
        <ToastContainer bodyClassName="font-poppins" autoClose={3000} />
      </div>
    </section>
  );
};

export default Contact;
