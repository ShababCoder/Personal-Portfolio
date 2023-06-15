import React, { useState, useRef } from "react";
import css from "./Header.module.scss";
import { BiPhoneCall, BiMenuAltRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { getMenuStyles, headerVariants } from "../../utils/motion";
import useHeaderShadow from "../../hooks/useHeaderShadow";
import useOutsideAlerter from "../../hooks/useOutsideAlerter";

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerShadow = useHeaderShadow();
  const menuRef = useRef(null);

  //to handle click outside of sidebar on mobile
  useOutsideAlerter({
    menuRef,
    setMenuOpened,
  });

  // return (
  //   <motion.div
  //     initial="hidden"
  //     variants={headerVariants}
  //     whileInView="show"
  //     viewport={{ once: false, amount: 0.25 }}
  //     className={`bg-primary paddings ${css.wrapper}`}
  //     style={{ boxShadow: headerShadow }}
  //   >
  //     <div className={`flexCenter innerWidth ${css.container}`}>
  //       <div className={css.name}>My Portfolio</div>

  //       <ul
  //         style={getMenuStyles(menuOpened)}
  //         ref={menuRef}
  //         className={`flexCenter ${css.menu}`}
  //       >
  //         <li>
  //           <a href="#expertise">Services</a>
  //         </li>
  //         <li>
  //           <a href="#work">Experience</a>
  //         </li>
  //         <li>
  //           <a href="#portfolio">Portfolio</a>
  //         </li>
  //         <li>
  //           <a href="#people">Testimonials</a>
  //         </li>
  //         <li className={`flexCenter ${css.phone}`}>
  //           <p>+234 971-086-651</p>

  //           <BiPhoneCall size={"40px"} />
  //         </li>
  //       </ul>

  //       {/* Menu For Medium and Small Screens only */}
  //       <div
  //         className={css.menuItem}
  //         onClick={() => setMenuOpened((prev) => !prev)}
  //       >
  //         <BiMenuAltRight size={30} />
  //       </div>
  //     </div>
  //   </motion.div>
  // );

  return (
    <motion.div
      variants={headerVariants}
      initial="hidden"
      whileInView="show"
      className={`bg-primary paddings ${css.wrapper}`}
      viewport={{ once: true, amount: 0.25 }}
      style={{ boxShadow: headerShadow }}
    >
      <div className={`innerWidth ${css.container} flexCenter`}>
        <div className={css.name}>My Portfolio</div>
        <ul
          className={`flexCenter ${css.menu}`}
          ref={menuRef}
          style={getMenuStyles(menuOpened)}
        >
          <li>
            <a href="#expertise">Services</a>
          </li>
          <li>
            <a href="#work">Experience</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#people">Testimonials</a>
          </li>
          <li className={`flexCenter ${css.phone}`}>
            <p>+001 (313) 345 678</p>
            <BiPhoneCall size={"40px"} />
          </li>
        </ul>

        {/* for medium and small screens */}
        <div
          className={css.menuIcon}
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </motion.div>
  );
};

export default Header;
