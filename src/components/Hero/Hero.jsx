import React from "react";
import css from "./Hero.module.scss";
import { motion } from "framer-motion";
import { fadeIn, slideIn, staggerContainer } from "../../utils/motion";

const Hero = () => {
  return (
    <section className={`paddings  ${css.wrapper}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`innerWidth ${css.container}`}
      >
        {/* Upper Element */}
        <div className={` ${css.upperElements}`}>
          <motion.span
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="primaryText"
          >
            Hey There, <br /> I'm Hussaini.
          </motion.span>
          <motion.span
            variants={fadeIn("left", "tween", 0.4, 1)}
            className="secondaryText"
          >
            I design beautiful simple
            <br />
            things, And i love what i do.
          </motion.span>
        </div>

        {/* person Image */}
        <motion.div
          variants={fadeIn("up", "tween", 0.3, 1)}
          className={`${css.person}`}
        >
          <motion.img
            variants={slideIn("up", "tween", 0.5, 1)}
            src="./person.png"
            alt=""
          />
        </motion.div>

        {/* EMail */}
        <a href="mailto:hussainimjy@gmail.com" className={css.email}>
          hussainimjy@gmail.com
        </a>

        {/* Lower Element */}
        <div className={`${css.lowerElements}`}>
          <motion.div
            variants={fadeIn("right", "tween", 0.3, 1)}
            className={`${css.experience}`}
          >
            <div className="primaryText">5</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>
          <motion.div
            variants={fadeIn("left", "tween", 0.5, 1)}
            className={`${css.certificate}`}
          >
            <img src="./certificate.png" alt="" />
            <span>JUNIOR FRONTEND DEVELOPER,</span>
            <span>PYTHON DEVELOPER</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
