import WebFont from "webfontloader";
import { useEffect } from "react";

export const loadFonts = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Poppins"],
      },
    });
  });
};
