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
        d="M33.75 11.25H6.25c-.69 0-1.25.56-1.25 1.25v20c0 .69.56 1.25 1.25 1.25h27.5c.69 0 1.25-.56 1.25-1.25v-20c0-.69-.56-1.25-1.25-1.25z"
        stroke={props.stroke || "#526066"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M26.25 33.75v-25a2.5 2.5 0 00-2.5-2.5h-7.5a2.5 2.5 0 00-2.5 2.5v25"
        stroke={props.stroke || "#526066"}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default SvgComponent;
