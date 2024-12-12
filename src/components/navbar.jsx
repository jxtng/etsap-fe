import React, { useEffect, useRef, useState } from "react";
import logo from "@/assets/logo-dark.svg";
import { Link, NavLink, useLocation } from "react-router";
import {
  motion,
  useInView,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const navlinks = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "About us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const location = useLocation();
  const { scrollY } = useScroll();
  const [inView, setInView] = useState(true);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 110 && inView) setInView(false);
    if (latest < 110 && !inView) setInView(true);
  });

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <motion.nav
      animate={{ top: inView ? 0 : 16 }}
      className={cn(
        "px-8 md:px-24 py-4 bg-primary-foreground sticky z-10",
        !inView &&
          "md:px-8 rounded-full max-w-[900px] mx-auto py-2 bg-primary-foreground/80 border-primary border backdrop-blur-sm"
      )}
    >
      <div className="container flex justify-between items-center  mx-auto">
        <Link to="/">
          <img
            src={logo}
            alt="ETSAP Logo"
            className="logo w-20"
            width={92}
            height={52}
          />
        </Link>
        <ul className="flex items-center gap-4 font-bold text-sm text-gray-600">
          {navlinks.map(({ label, href }) => (
            <motion.li
              key={label + href}
              whileHover="drawBorder"
              className="relative"
            >
              <NavLink
                className={cn(
                  "p-2 border-b-2 border-transparent",
                  location.hash == href && "text-secondary"
                )}
                to={href}
              >
                {label}
              </NavLink>
              <motion.div
                variants={{
                  drawBorder: { width: "100%", left: 0 },
                }}
                style={
                  location.hash == href
                    ? { width: "100%", left: 0 }
                    : { width: 0, left: "50%" }
                }
                className={cn("absolute h-0.5 bg-current top-full")}
              ></motion.div>
            </motion.li>
          ))}
          {!location.pathname.startsWith("/register") && (
            <li>
              <Button className="rounded-full" asChild>
                <Link to="/register">Register Now</Link>
              </Button>
            </li>
          )}
        </ul>
      </div>
    </motion.nav>
  );
};

export default Navbar;
