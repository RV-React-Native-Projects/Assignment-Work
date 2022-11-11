const Fonts = {
  Primary_Font: "Poppins_Regular",
  Primary_Bold: "Poppins_Bold",
  Primary_SemiBold: "Poppins_SemiBold",
  Primary_Bold_Italic: "Poppins_BoldItalic",
  Primary_SemiBold_Italic: "Poppins_SemiBold_Italic",
  Primary_Italic: "Poppins_Italic",
  Primary_ExtraBold: "Poppins_Extra_Bold",
  Primary_ExtraBold_Italic: "Poppins_Extra_Bold_Italic",
  Font_Light: "Poppins_Light",
  Font_Light_italic: "Poppins_Light_Italic",
  Secondary_Font: "Poppins_Medium",
  Secondary_Medium_Italic: "Poppins_Medium_Italic",
  Secondary_Regular: "Poppins",
  Secondary_Thin: "Poppins_Regular_Italic",
  Secondary_Thin_Italic: "Poppins_Regular_Italic",
  Poppins_Thin: "Poppins_Thin",
  Poppins_Thin_Italic: "Poppins_Thin_Italic",
};

const colors = {
  primary: "#6200EE",
  secondary: "#8392ab",
  tertiary: "#00AF62",

  black: "#000000",
  white: "#ffffff",
  gray: "#A7A8AE",

  light: "#e9ecef",
  dark: "#252f40",

  warning: "#f53939",
  info: "#17c1e8",
  success: "#82d616",
  error: "#ea0606",
  marketing: "#303AB6",
  defaultTickedColor: "#CCCCCC",
};

const gradient = {
  gradientPrimary: ["#FF0080", "#7928CA"],
  gradientSecondary: ["#A8B8D8", "#627594"],
  gradientInfo: ["#21D4FD", "#2152FF"],
  gradientSuccess: ["#98EC2D", "#17AD37"],
  gradientDanger: ["#FF667C", "#EA0606"],
  gradientWarning: ["#FBCF33", "#F53939"],
  gradientLight: ["#EBEFF4", "#CED4DA"],
  gradientDark: ["#3A416F", "#141727"],
};

const socialColors = {
  facebook: "#3B5998",
  twitter: "#55ACEE",
  dribble: "#EA4C89",
};

const cardColor = {
  cardColor: "#FFFFFF",
  cardBackground: "#E9ECEF",
  cardShadow: "#000000",
  cardOverlay: "rgba(0,0,0,0.3)",
  cardBlack: "#252F40",
  cardLight: "#E9ECEF",
  cardGray: "#A7A8AE",
};

const inputBox = {
  inputBorderWidth: 1,
  inputBorderColor: "#252F40",
  inputFocusBorderColor: "#E293D3",
};

const textColor = {
  title: "#000000",
  header: "#000000",
  subHeader: "#333333",
  paragraph: "#666666",

  textColor: "#252F40",
  primaryText: "#CB0C9F",
  secondaryText: "#627594",
  tertiaryText: "#E8AE4C",
  blackText: "#252F40",
  whiteText: "#FFFFFF",
  darkText: "#252F40",
  lightText: "#E9ECEF",
  grayText: "#A7A8AE",
  linkText: "#CB0C9F",

  primaryButtonText: "#FFFFFF",
  secondaryButtonText: "#FFFFFF",
  tertiaryButtonText: "#FFFFFF",
};

const sizes = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

const fonts = {
  bold: "Bold",
  semiBold: "SemiBold",
  medium: "Medium",
  regular: "Regular",
  light_text: "Light",
};

const fontSizes = {
  h1FontSize: 24,
  h2FontSize: 20,
  h3FontSize: 18,
  h4FontSize: 16,
  h5FontSize: 14,
  h6FontSize: 12,
};

const constantStyles = {
  cardBorderRadius: 6,
  modalBorderRadius: 4,
  borderWidth: 1,
  normalPadding: 10,
  primaryPadding: 15,
  containerPadding: 20,
};

const textInputStyles = {
  placeHolderColor: "#999999",
  textInputBorderColor: "transparent",
  textInputBorderWidth: 0,
  textInputBorderRadius: 6,
  textInputBgColor: "#E3E3E3",
  textInputSize: 14,
  textInputColor: "#666666",
  textInputLabelColor: "#333333",
};

const backgroundColor = {
  modalBackgroundColor: "#FFFFFF",
  appBackgroundColor: "#FFFFFF",
  cardBackgroundColor: "#FFFFFF",
};

const shadow = {
  Shadowlight: {
    shadowColor: colors.gray,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  Shadowmedium: {
    shadowColor: colors.gray,
    shadowOffset: {
      width: 2,
      height: 5,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 5,
  },
  Shadowdark: {
    shadowColor: colors.gray,
    shadowOffset: {
      width: 4,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 6,
    elevation: 14,
  },
};

const theme = {
  ...Fonts,
  ...colors,
  ...sizes,
  ...fonts,
  ...fontSizes,
  ...constantStyles,
  ...textColor,
  ...textInputStyles,
  ...backgroundColor,
  ...shadow,
  ...socialColors,
  ...cardColor,
  ...gradient,
  ...inputBox,
};

export default theme;
