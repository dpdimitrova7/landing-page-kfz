import React from 'react';
import "./styled/faqs-styles.css";
import Accordion from './Accordion';
import { StyledFaqs } from "./styled/Faqs.styled";
import { Container } from "./styled/Container.styled";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";


export default function Faqs({ content }) {
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
    <StyledFaqs>
      <motion.div
        ref={ref}
        variants={boxVariant}
        initial="hidden"
        animate={control}
        className="box">
        <Container>
          <h1>FAQs</h1>
          <div className="accordion">
            {content.faqs.map(({ question, answer, index }) => {
              return (
                <Accordion key={index} question={question} answer={answer} />
              );
            })}
          </div>
        </Container>
      </motion.div>
    </StyledFaqs >

  );
};
