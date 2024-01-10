import { useEffect } from "react";
import { Button } from "antd";

const Toggle = () => {
  const toggleTheme = () => {
    const htmlElement = document.querySelector("html");

    if (htmlElement) {
      const currentTheme = htmlElement.getAttribute("data-theme");

      if (currentTheme === "light") {
        htmlElement.setAttribute("data-theme", "dark");
        localStorage.setItem("theme", "dark");
      } else {
        htmlElement.setAttribute("data-theme", "light");
        localStorage.setItem("theme", "light");
      }
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const htmlElement = document.querySelector("html");

    if (savedTheme && htmlElement) {
      htmlElement.setAttribute("data-theme", savedTheme);
    }
  }, []);

  return <Button onClick={toggleTheme}>Toggle Theme</Button>;
};

export default Toggle;
