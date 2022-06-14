import {
  faChevronLeft,
  faChevronRight,
  faL,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { homeStyles } from "../../styles/HomeStyles";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { Container } from "@mantine/core";
import TestimonialCard from "../organisms/TestimonialCard";
import { TestimonalData } from "../atoms/TestimonialData";

const TestimonialCarousel = () => {
  const { classes } = homeStyles();
  return (
    <Container className={classes.testimonialCarouselContainer}>
      <Carousel
        transitionTime={500}
        ariaLabel="Testimonials"
        autoPlay={false}
        emulateTouch={true}
        infiniteLoop={true}
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        showArrows={false}
        // dynamicHeight={true}
        useKeyboardArrows={true}
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          const defStyle = {
            padding: "20px 20px",
            color: "gray",
            cursor: "pointer",
            marginTop: "2rem",
            fontSize: "0.5rem",
            backgroundColor: "transparent",
            border: "none",
          };
          const style = isSelected
            ? { ...defStyle, color: "orange" }
            : { ...defStyle };
          return (
            <button
              style={style}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              type="button"
              tabIndex={1}
            >
              <FontAwesomeIcon icon={faCircle} />
            </button>
          );
        }}
        renderArrowNext={(onClickHandler, hasNext, label) => {
          return (
            <button
              className={classes.testimonialCarouselArrows}
              type="button"
              onClick={onClickHandler}
              style={{
                right: 0,
              }}
            >
              <FontAwesomeIcon icon={faChevronRight} size="2x" />
            </button>
          );
        }}
        renderArrowPrev={(onClickHandler, hasPrev, label) => {
          return (
            <button
              className={classes.testimonialCarouselArrows}
              type="button"
              onClick={onClickHandler}
              style={{
                left: 0,
              }}
            >
              <FontAwesomeIcon icon={faChevronLeft} size="2x" />
            </button>
          );
        }}
      >
        {TestimonalData.map((x) => {
          return <TestimonialCard item={x} key={x.id} />;
        })}
      </Carousel>
    </Container>
  );
};

export default TestimonialCarousel;
