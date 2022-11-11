import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={props.width || 40}
      height={props.height || 40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M20 33.75c7.594 0 13.75-6.156 13.75-13.75S27.594 6.25 20 6.25 6.25 12.406 6.25 20 12.406 33.75 20 33.75z"
        stroke="#526066"
        strokeWidth={2}
        strokeMiterlimit={10}
      />
      <Path
        d="M20 20l6.188-6.188M16.25 1.25h7.5"
        stroke="#526066"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
