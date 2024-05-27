import React from "react";
import ScrollToTopButton from "./ScrollToTopButton";

const Footer = () => {
  return (
    <footer className="bg-gray-200 py-4 text-center sm:px-6 lg:px-8">
      <p className="text-sm sm:text-base">
        &copy; 2023 Vendo Smart. All rights and changes reserved.
      </p>
      <ScrollToTopButton />
    </footer>
  );
};

export default Footer;
