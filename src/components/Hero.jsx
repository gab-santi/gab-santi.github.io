import styles from '../styles'
import React from 'react'

{/* Hero component */}
const Hero = () => (
  // main section
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    {/* subheader section */}
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">Hello world!</span>
        </p>
      </div>

      {/* main header section */}
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white">
          My name <br /> is <span className="text-gradient">Gab Santiago.</span>
        </h1>
      </div>
    </div>
  </section>
)

export default Hero