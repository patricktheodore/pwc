import React from "react";
import { homeStyles } from "../../styles/HomeStyles";

const TrainingIcon = () => {
  const { classes } = homeStyles();

  return (
    <svg
      height="60"
      width="60"
      className={classes.whyUsGridColIcon}
      enableBackground="new 0 0 512 512"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
    >
      <path d="M461.8 254h-38c-2.2 0-4.1-1.8-4.1-4.1V95.3c0-2.2 1.8-4.1 4.1-4.1h38c2.2 0 4.1 1.8 4.1 4.1v154.7C465.9 252.2 464.1 254 461.8 254zM427.9 245.9h29.9V99.3h-29.9V245.9zM387.7 254h-38c-2.2 0-4.1-1.8-4.1-4.1V125.8c0-2.2 1.8-4.1 4.1-4.1h38c2.2 0 4.1 1.8 4.1 4.1v124.1C391.8 252.2 390 254 387.7 254zM353.8 245.9h29.9v-116h-29.9V245.9zM313.6 254h-38c-2.2 0-4.1-1.8-4.1-4.1v-93.6c0-2.2 1.8-4.1 4.1-4.1h38c2.2 0 4.1 1.8 4.1 4.1v93.6C317.7 252.2 315.9 254 313.6 254zM279.8 245.9h29.8v-85.5h-29.8V245.9z" />
      <path d="M502.1,78.6c5.5,0,9.9-4.4,9.9-9.9v-22c0-5.5-4.4-9.9-9.9-9.9H166c-5.4,0-9.9,4.4-9.9,9.9v22c0,5.4,4.4,9.9,9.9,9.9h9.8v105.2h-58.4c4.2-6.2,6.7-13.8,6.7-21.8v-35.5L152.6,84c0.8-1.2,0.9-2.8,0.2-4.1c-0.7-1.3-2.1-2.1-3.5-2.1H66.4c-11,0-19.9,8.7-20.4,19.6c0,0.2-0.1,0.3-0.1,0.5V162c0,8.2,2.6,15.8,6.9,22.1C23.3,186.5,0,211.2,0,241.4v80.3c0,16.2,13.2,29.3,29.3,29.3h6.4V448c0,15,12.2,27.1,27.1,27.1h50c14.9,0,27.1-12.2,27.1-27.1V251.2c0-0.1,0-0.1,0-0.2v-16.9h35.9v35.1H166c-5.4,0-9.9,4.4-9.9,9.9v22c0,5.4,4.4,9.8,9.9,9.8h72.8l-56.4,121.1c-0.6,1.2-0.5,2.7,0.3,3.8c0.7,1.2,2,1.9,3.4,1.9h30c1.6,0,3-0.9,3.6-2.3L277.6,311H315v122.8c0,2.2,1.8,4,4,4h30c2.2,0,4-1.8,4-4V311h37.4l58,124.5c0.6,1.4,2,2.3,3.6,2.3h30c1.4,0,2.6-0.7,3.4-1.9c0.7-1.1,0.8-2.6,0.2-3.8L429.4,311h72.8c5.5,0,9.9-4.4,9.9-9.8v-22c0-5.4-4.4-9.9-9.9-9.9h-9.8V78.6H502.1z M53.9,98.2c0-6.9,5.6-12.5,12.5-12.5h75.4L118,121.3H53.9V98.2z M53.9,129.3h62.2V162c0,17.2-14,31.1-31.1,31.1c-17.2,0-31.1-14-31.1-31.1V129.3z M117.3,192l-29.5,60.8L58.2,192h1.9c6.8,5.6,15.4,9,24.9,9c9.5,0,18.1-3.4,24.9-9H117.3z M29.3,342.9c-11.7,0-21.3-9.5-21.3-21.3v-80.3c0-24.6,18-45,41.5-48.8l34.3,70.4v80H43.6v-91.7c0-2.2-1.8-4-4-4s-4,1.8-4,4v91.7H29.3z M43.6,448v-97.1h40.1v116.3h-21C52.2,467.2,43.6,458.6,43.6,448z M112.8,467.2h-21V350.9h40.1V448C131.9,458.6,123.4,467.2,112.8,467.2z M135.9,226.2c-2.2,0-4,1.8-4,4v112.8H91.8v-80.1l34.5-71h98.2c9.5,0,17.2,7.7,17.2,17.2c0,9.4-7.6,17.2-17.2,17.2H135.9z M224.5,183.8h-40.7V78.6h300.5v190.6H183.8v-35.1h40.7c14,0,25.2-11.4,25.2-25.2C249.7,195.1,238.4,183.8,224.5,183.8z M213.5,429.8h-21.2L247.6,311h21.2L213.5,429.8z M345,429.8h-22V311h22V429.8z M475.8,429.8h-21.2L399.3,311h21.2L475.8,429.8z M502.1,277.2c1.1,0,1.9,0.8,1.9,1.9v22c0,1-0.8,1.8-1.9,1.8H166c-1,0-1.9-0.8-1.9-1.8v-22c0-1,0.8-1.9,1.9-1.9H502.1z M166,70.6c-1,0-1.9-0.8-1.9-1.9v-22c0-1.1,0.8-1.9,1.9-1.9h336.2c1.1,0,1.9,0.8,1.9,1.9v22c0,1-0.8,1.9-1.9,1.9H166z" />
    </svg>
  );
};

export default TrainingIcon;
