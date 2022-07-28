import React from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { StyledSubscribe } from "./styled/Subscribe.styled";
import { Flex } from "./styled/Flex.styled";

export default function Subscribe({ content, theme }) {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const boxVariant = {
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3 } },
    hidden: { opacity: 0, scale: 0.8, y: -100 }
  }

  useEffect(() => {
    if (inView) {
      control.start("visible");
    }
    else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
      className="box">
      <Flex style={{ marginTop: theme.containerSpacing }} layout="column">
        <p style={{ maxWidth: "600px", textAlign: "center", color: theme.colors.textColor, fontSize: theme.fonts.size.bigger }}>{content.subscribe.text}</p>
        <StyledSubscribe>
          <div className="title">JOIN NOW</div>
          <div className="subtitle">Book a free trial week!</div>
          <Flex gap={"10"} noMobileGap>
            <div className="input-container ic1">
              <input id="firstname" className="input" type="text" placeholder=" " />
              <label htmlFor="firstname" className="placeholder">First name</label>
            </div>
            <div className="input-container ic2">
              <input id="lastname" className="input" type="text" placeholder=" " />
              <label htmlFor="lastname" className="placeholder">Last name</label>
            </div>
          </Flex>
          <div className="input-container ic2">
            <input id="email" className="input" type="text" placeholder=" " />
            <label htmlFor="email" className="placeholder">Email</label>
          </div>
          <button type="text" className="submit">submit</button>
        </StyledSubscribe>
      </Flex>
    </motion.div>
  )
};
