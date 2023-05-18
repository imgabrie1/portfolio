import { styled } from "@/styles/stitches.config";
import { colors } from "@/styles/Global";

export const Button = styled("button", {
  height: "2.75rem",
  appearance: "none",
  background: "$whiteFixed",
  color: "$grey1",
  fontWeight: "600",
  padding: "0 2rem",
  border: "2px solid $whiteFixed",
  borderRadius: "$1",
  cursor: "pointer",
  fontSize: "1rem",
  fontFamily: "$texts",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "max-content",

  variants: {
    type: {
      btLink: {
        background: "transparent",
        borderColor: "brand2",
      },
      primary: {
        background: "$brand2",
        borderColor: "$brand2",
        color: "$whiteFixed",
        "&:hover": {
          opacity: 0.7,
        },
      },
      whatsapp: {
        background: "$brand3",
        borderColor: "$brand3",
        color: "$whiteFixed",
        "&:hover": {
          opacity: 0.7,
        },
      },
      icon: {
        borderColor: "$grey5",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "$brand2",
        },
      },
      github: {
        borderColor: "$grey5",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "#181717",
        },
      },
      linkedin: {
        borderColor: "$grey5",
        backgroundColor: "transparent",
        "&:hover": {
          backgroundColor: "#0077B5",
        },
      },
      circle: {
        borderColor: "$grey5",
        backgroundColor: "$whiteFixed",
        borderRadius: "50%",
        padding: "0",
        width: "2.75rem",
        height: "2.75rem",
        "&:hover": {
          backgroundColor: "$grey5",
        },
      },
    },
    ...colors,
  },
});
