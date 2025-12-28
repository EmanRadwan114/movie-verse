import React from "react";
import img from "@/assets/404-error-page-found.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const NotFound: React.FC = () => {
  return (
    <div className="min-h-[60vh] text-center">
      <Image src={img} alt="404 not found" className="w-64 mx-auto" />
      <Link href={"/"}>
        <Button className="capitalize font-semibold">Back to home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
