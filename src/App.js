import React, { useRef } from 'react';
import { ThemeProvider } from "styled-components";
import Header from './Components/Header';
import Card from "./Components/Card";
import Description from './Components/Description';
import Subscribe from './Components/Subscribe';
import Reviews from './Components/Reviews';
import Faqs from './Components/Faqs';
import Footer from './Components/Footer';
import theme from './theme';
import content from "./content";
import "./styles.css";
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { Container } from './Components/styled/Container.styled';
import { Flex } from './Components/styled/Flex.styled';
import { SectionSeparator } from './Components/styled/SectionSeparator.styled';
import { Background } from "./Components/styled/Background.styled";

function App() {
  const { cards, information_cards, testimonials } = content;
  const getItems = () =>
    Array(20)
      .fill(0)
      .map((_, ind) => ({ id: `element-${ind}` }));
  const [items, setItems] = React.useState(getItems);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);
  const isItemSelected = (id) => !!selected.find((el) => el === id);

  function LeftArrow() {
    const { isFirstItemVisible, scrollPrev } = React.useContext(VisibilityContext);

    return (
      <FiChevronLeft size={25} disabled={isFirstItemVisible} cursor={"pointer"} color={"#753BBD"} onClick={() => scrollPrev()}>
        Left
      </FiChevronLeft>
    );
  };

  function RightArrow() {
    const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

    return (
      <FiChevronRight size={25} disabled={isLastItemVisible} cursor={"pointer"} color={"#753BBD"} onClick={() => scrollNext()}>
        Right
      </FiChevronRight>
    );
  };

  const myRef = useRef(null)
  const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <ThemeProvider theme={theme}>
      <Header content={content} onClick={executeScroll} />
      <Container ref={myRef}>
        <Flex style={{ marginTop: theme.containerSpacing }}>
          {cards.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Flex>
      </Container>
      <Background bgColor={theme.colors.highlight}>
        <Container className="information-cards">
          {information_cards.map((item, index) => (
            <Description key={index} item={item} />
          ))}
        </Container>
      </Background>
      <Container>
        <Subscribe content={content} theme={theme} />
      </Container>
      <Faqs content={content} />
      <Container>
        <SectionSeparator>
          <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {testimonials.map((item, id) => (
              <Reviews
                itemId={id}
                title={id}
                key={id}
                selected={isItemSelected(id)}
                item={item} />
            ))}
          </ScrollMenu>
        </SectionSeparator>
      </Container>
      <Background bgColor={theme.colors.highlight}>
        <Container>
          <Footer content={content} />
        </Container>
      </Background>
    </ThemeProvider >
  );
};

export default App;
