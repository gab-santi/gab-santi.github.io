import React from "react";

import { Link } from "react-router-dom";

const Button = ({ styles }) => {
  return (
    <Link to="/#contact">
      <button
        type="button"
        className={`py-4 px-6 bg-sky-600 font-poppins font-medium text-[18px] text-primary outline-none ${styles}`}
      >
        Contact Me
      </button>
    </Link>
  );
};

export default Button;
