"use client";
import { useTheme } from "components/ThemeContext/ThemeContext";
import ThemeToggle from "components/ThemeContext/ThemeToggle";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const { theme } = useTheme();
  const imageSrc =
    theme === "dark" ? "/images/TM-Logo.svg" : "/images/TM-Logo-light.svg";

  return (
    <header className={`sticky top-0 z-10`}>
      <div className="container">
        <div className="flex items-center justify-between py-4">
          <Image src={imageSrc} width={180} height={40} alt="Logo" />
          <nav className="flex items-center">
            {[
              "Home",
              "Services",
              "Start-up Services",
              "Resources",
              "Company",
            ].map((item, index) => (
              <Link
                className="px-4"
                key={index}
                href={`/${item.toLowerCase().replace(/ /g, "-")}`}
              >
                {item}
              </Link>
            ))}
            <div className="flex items-center">
              <span className="opacity-30 pl-4 pr-8">|</span>
              <ThemeToggle />
            </div>
          </nav>
          <button className="py-2 px-5 text-white bg-[var(--button-bg)] font-semibold">
            Let&apos;s Brainstorm
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
