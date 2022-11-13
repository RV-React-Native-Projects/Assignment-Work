import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SvgComponent(props) {
  return (
    <Svg
      width={props.width || 40}
      height={props.height || 40}
      viewBox="0 0 40 40"
      fill={props.color || "none"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M19.984 11.25a4.375 4.375 0 100-8.75 4.375 4.375 0 000 8.75zM24.047 21.047l5.437 4.219a1.875 1.875 0 002.641-2.641l-6.188-7.953a3.108 3.108 0 00-2.203-.922h-7.5a3.172 3.172 0 00-2.218.922l-6.188 7.953a1.875 1.875 0 002.656 2.64l5.438-4.218-4.344 13.687a1.88 1.88 0 003.406 1.594l5-7.875 5 7.875a1.875 1.875 0 103.391-1.594l-4.328-13.687z"
        stroke={props.stroke || "#526066"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
