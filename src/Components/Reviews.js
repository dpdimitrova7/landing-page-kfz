import React from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { StyledCard } from "./styled/Card.styled";
import { VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Flex } from "./styled/Flex.styled";

export default function Reviews({ onClick, item: { name, review, image } }) {
  const visibility = React.useContext(VisibilityContext);
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
      <StyledCard onClick={() => onClick(visibility)}
        style={{ maxWidth: "none" }}
        heightOption
        tabIndex={0}
        hoverColor="#eee"
        smallPadding>
        <div className="data-card">
          <Flex className="wrapper">
            <h4 className="name">{name}</h4>
            <img src={image} alt=""></img>
          </Flex>
          <p>{review}</p>
        </div>
      </StyledCard>
    </motion.div>
  )
};
