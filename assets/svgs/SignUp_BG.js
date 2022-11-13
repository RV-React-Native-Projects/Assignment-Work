import * as React from "react";
import Svg, { G, Path, Defs, LinearGradient, Stop } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={props.width || 375}
      height={props.height || 666}
      viewBox="0 0 375 666"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_i_4_304)">
        <Path
          d="M0 176.996a57 57 0 0132.502-51.467L282.063 6.738C325.197-13.794 375 17.658 375 65.428V666H0V176.996z"
          fill="url(#paint0_linear_4_304)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="paint0_linear_4_304"
          x1={195.5}
          y1={75.5}
          x2={187.5}
          y2={666}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#FAFAFA" />
          <Stop offset={1} stopColor="#fff" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}

export default SvgComponent;
