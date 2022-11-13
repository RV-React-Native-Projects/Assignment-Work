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
        d="M33.75 10H27.5V8.75A3.765 3.765 0 0023.75 5h-7.5a3.766 3.766 0 00-3.75 3.75V10H6.25a2.5 2.5 0 00-2.5 2.5v20a2.5 2.5 0 002.5 2.5h27.5a2.5 2.5 0 002.5-2.5v-20a2.5 2.5 0 00-2.5-2.5zM15 12.5h10v20H15v-20zm0-3.75a1.25 1.25 0 011.25-1.25h7.5A1.25 1.25 0 0125 8.75V10H15V8.75z"
        fill={props.color || "#07B594"}
      />
    </Svg>
  );
}

export default SvgComponent;
