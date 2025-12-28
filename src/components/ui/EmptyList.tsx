import Link from "next/link";
import React from "react";
import { Button } from "./button";

interface IProps {
  message: string;
}

const EmptyList: React.FC<IProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 min-h-[60vh]">
      <p className="text-2xl font-semibold text-foreground text-center capitalize">
        {message}
      </p>
      <Link href="/">
        <Button>Browse Movies</Button>
      </Link>
    </div>
  );
};

export default EmptyList;
