import React from "react";

const Loader = () => {
  React.useEffect(() => {
    const loader = document.getElementById("Loader");

    const hideLoader = () => {
      if (loader) {
        loader.style.opacity = "0";
        loader.style.transition = "opacity 1s ease-out";
        setTimeout(() => {
          loader.style.display = "none";
        }, 500); // Match the timeout with the transition duration
      }
    };

    window.addEventListener("load", hideLoader);

    return () => {
      window.removeEventListener("load", hideLoader);
    };
  }, []);

  return <div id="Loader" style={{ opacity: 1 }}></div>;
};

export default Loader;
