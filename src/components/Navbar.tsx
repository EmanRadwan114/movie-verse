"use client";

import React, {
  useCallback,
  useEffect,
  useState,
  type ChangeEvent,
} from "react";
import { Heart, Menu, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Titan_One } from "next/font/google";
import { useAppDispatch, useAppSelector } from "@/redux-toolkit/hooks";
import { initializeFavorites } from "@/redux-toolkit/movieSlice";
import Container from "./ui/Container";

const titanOne = Titan_One({
  weight: ["400"],
  subsets: ["latin"],
});

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useAppDispatch();

  // initialize favorites
  useEffect(() => {
    if (typeof window !== undefined) {
      const savedFavories = localStorage.getItem("movie-favorites");
      if (savedFavories !== null)
        dispatch(initializeFavorites(JSON.parse(savedFavories)));
    }
  }, []);

  // get favorites
  const { favorites } = useAppSelector((state) => state.movies);

  // to update searchParams
  const router = useRouter();
  const searchParams = useSearchParams();

  // generate url to append new search query
  const createSearchParams = useCallback(() => {
    const params = new URLSearchParams(searchParams);
    params.set("query", searchTerm);
    params.set("page", "1");

    return params.toString();
  }, [searchTerm, searchParams]);

  //———————————————————————————————— handlers ————————————————————————————————
  const handleSearch = async () => {
    router.replace(`/?${createSearchParams()}`);
    setSearchTerm("");
    setIsOpen((prev) => !prev);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <header className="sticky top-0 w-full bg-secondary shadow-md border-b border-b-border z-50 text-foreground">
      <Container className="py-2">
        <nav className="flex justify-between items-center relative">
          <Link href={"/"}>
            <h1 className={`flex items-center ${titanOne.className}`}>
              <span className="text-2xl lg:text-3xl text-primary tracking-tighter">
                MovieVerse
              </span>
            </h1>
          </Link>

          <div className="gap-5 justify-end items-center hidden md:flex">
            <Link
              href={"/favorites"}
              className="font-semibold p-2 rounded-sm hover:text-primary transition-colors duration-300 relative text-foreground/60"
            >
              <Heart strokeWidth={1} size={30} />
              {favorites.length ? (
                <Badge
                  variant={"default"}
                  className="w-4 rounded-sm absolute end-0.5 top-0.5 text-xs p-0 flex items-center justify-center"
                >
                  {favorites.length}
                </Badge>
              ) : null}
            </Link>
            <div className="flex flex-col sm:flex-row justify-between gap-1 items-start border dark:border-border border-foreground/40 rounded-sm flex-1">
              <input
                type="text"
                placeholder="Search a Movie"
                className="px-2 py-1.5 focus-within:outline-none w-full"
                value={searchTerm}
                onChange={handleChange}
              />
              <Button
                variant={"default"}
                className="font-semibold w-1/3 rounded-s-none"
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>
          </div>

          {/*———————————————————————————————— mobile menu ————————————————————————————————*/}
          <Menu
            className="cursor-pointer p-2 md:hidden"
            size={40}
            onClick={() => setIsOpen((prev) => !prev)}
          />
          {isOpen && (
            <div className="absolute top-13 end-1 rounded-xl p-4 bg-secondary shadow-lg z-100 flex flex-col gap-3 w-full sm:w-2/3">
              <Link
                href={"/favorites"}
                className="font-semibold p-2 rounded-sm hover:text-primary transition-colors duration-300 relative w-fit mx-auto text-foreground/60"
              >
                <Heart strokeWidth={1} size={30} />
                {favorites.length ? (
                  <Badge
                    variant={"default"}
                    className="w-4 rounded-sm absolute end-0.5 top-0.5 text-xs p-0 flex items-center justify-center"
                  >
                    {favorites.length}
                  </Badge>
                ) : null}
              </Link>
              <div className="flex flex-col sm:flex-row justify-between gap-2 items-start">
                <div className="relative flex-1 w-full">
                  <input
                    type="text"
                    placeholder="Search a Movie"
                    className="border rounded-sm px-2 py-1.5 focus-within:outline-primary focus-within:outline-2 w-full"
                    value={searchTerm}
                    onChange={handleChange}
                  />
                  <Search strokeWidth={1} className="absolute end-2 top-1.5" />
                </div>
                <Button
                  variant={"default"}
                  className="font-semibold w-full sm:w-fit"
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </div>
            </div>
          )}
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
