import React from 'react'
import { StyledDescription } from "./styled/Description.styled";
import { Flex } from "./styled/Flex.styled";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export default function Description({ item: { id, description, image } }) {
  const control = useAnimation()
  const [ref, inView] = useInView()
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
      <StyledDescription>
        <Flex layout={id % 2 === 0 && 'row-reverse'}>
          <p>{description}</p>
          <img src={image} alt=""></img>
        </Flex>
      </StyledDescription >
    </motion.div>
  )
}
