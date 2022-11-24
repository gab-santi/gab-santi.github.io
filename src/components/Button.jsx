import React from "react";

const Button = ({ styles }) => {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-sky-600 font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
    >
      Contact Me
    </button>
  );
};

export default Button;
