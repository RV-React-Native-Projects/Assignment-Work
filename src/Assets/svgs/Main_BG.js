import * as React from "react";
import Svg, { G, Path, Defs } from "react-native-svg";
/* SVGR has dropped some elements not supported by react-native-svg: filter */

function SvgComponent(props) {
  return (
    <Svg
      width={props.width || 375}
      height={props.height || 704}
      viewBox="0 0 375 704"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G filter="url(#filter0_i_4_120)">
        <Path
          d="M0 572.546V0h374.995s-.805 529.919 0 572.546c.714 37.855-70.826 68.336-128.863 72.221-9.299.623-17.636 11.64-18.479 20.921-1.564 17.204-11.399 37.553-40.156 37.553-31.04 0-39.451-23.709-39.949-41.58-.231-8.283-6.416-17.396-14.549-18.982C85.818 633.478 0 598.74 0 572.546z"
          fill="#fff"
        />
      </G>
      <Defs></Defs>
    </Svg>
  );
}

export default SvgComponent;
