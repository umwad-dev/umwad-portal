import React, { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Container,
  Ellipse,
  EllipseContainer,
} from "./Slider.styles";
import ArrowLeftImg from "../../../../assets/stories/arrow-left.webp";
import ArrowRightImg from "../../../../assets/stories/arrow-right.webp";
import EllipseActiveImg from "../../../../assets/stories/ellipse-active.webp";
import EllipseImg from "../../../../assets/stories/ellipse.webp";

const Slider = () => {
  const [activeNum, setActiveNum] = useState(0);
  const [activeArray, setActiveArray] = useState([true, false, false]);

  const assignActiveArray = (num) => {
    if (num === 0) {
      setActiveArray([true, false, false]);
      setActiveNum(0);
    } else if (num === 1) {
      setActiveArray([false, true, false]);
      setActiveNum(1);
    } else if (num === 2) {
      setActiveArray([false, false, true]);
      setActiveNum(2);
    }
  };

  const arrowClicked = (position) => {
    if (position === "left") {
      if (activeNum === 0) {
        return;
      } else if (activeNum === 1) {
        setActiveNum(0);
        setActiveArray([true, false, false]);
      } else if (activeNum === 2) {
        setActiveNum(1);
        setActiveArray([false, true, false]);
      }
    } else if (position === "right") {
      if (activeNum === 0) {
        setActiveNum(1);
        setActiveArray([false, true, false]);
      } else if (activeNum === 1) {
        setActiveNum(2);
        setActiveArray([false, false, true]);
      } else if (activeNum === 2) {
        return;
      }
    }
  };

  return (
    <Container>
      <ArrowLeft
        alt="arrow left"
        onClick={() => arrowClicked("left")}
        src={ArrowLeftImg}
      />
      <EllipseContainer>
        <Ellipse
          alt="ellipse"
          onClick={() => assignActiveArray(0)}
          src={activeArray[0] ? EllipseActiveImg : EllipseImg}
        />
        <Ellipse
          alt="ellipse"
          onClick={() => assignActiveArray(1)}
          src={activeArray[1] ? EllipseActiveImg : EllipseImg}
        />
        <Ellipse
          alt="ellipse"
          onClick={() => assignActiveArray(2)}
          src={activeArray[2] ? EllipseActiveImg : EllipseImg}
        />
      </EllipseContainer>
      <ArrowRight
        alt="arrow right"
        onClick={() => arrowClicked("right")}
        src={ArrowRightImg}
      />
    </Container>
  );
};

export default Slider;
