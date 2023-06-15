import React from "react";
import css from "./Portfolio.module.scss";
import { motion } from "framer-motion";
import { fadeIn, staggerChildren } from "../../utils/motion";

const Portfolio = () => {
  return (
    <motion.section
      variants={staggerChildren}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`paddings ${css.wrapper}`}
    >
      <div className={`innerWidth flexCenter ${css.container}`}>
        <div className={`flexCenter ${css.heading}`}>
          <div>
            <span className="primaryText">My Latest Works</span>
            <p style={{ marginTop: "10px" }}>
              Perfect solution fro digital experience
            </p>
          </div>
          {/* <div>
            <span className="secondaryText">Explore More Works</span>
          </div> */}
        </div>

        {/* Images */}
        <div className={`flexCenter ${css.showCase}`}>
          <motion.img
            src="./showCase1.png"
            variants={fadeIn("up", "tween", 0.5, 0.6)}
            alt="Project Completed"
          />
          <motion.img
            src="./showCase2.png"
            variants={fadeIn("up", "tween", 0.7, 0.6)}
            alt="Project Completed"
          />
          <motion.img
            src="./showCase3.png"
            variants={fadeIn("up", "tween", 0.9, 0.6)}
            alt="Project Completed"
          />
        </div>
      </div>
    </motion.section>
  );
};

export default Portfolio;
