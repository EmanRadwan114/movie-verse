import React from "react";
import Container from "./ui/Container";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="flex justify-center items-center bg-secondary py-4 mt-auto">
      <Container>
        <p className="text-foreground/80 capitalize font-semibold text-center">
          all rights reserved &copy; MovieVerse {year}
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
