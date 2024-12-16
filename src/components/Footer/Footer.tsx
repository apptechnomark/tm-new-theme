"use client";
import { useTheme } from "components/ThemeContext/ThemeContext";
import { motion, useInView } from "framer-motion";
import MailIcon from "Icons/MailIcon";
import PhoneIcons from "Icons/PhoneIcons";
import WhatsappIcon from "Icons/WhatsappIcons";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { FaLinkedinIn, FaTwitter, FaYoutube } from "react-icons/fa";
import { GrFacebookOption } from "react-icons/gr";
import styles from "./Footer.module.css";

interface FooterProps {
  footerData: {
    name: string;
    children: {
      name: string;
      link: string;
    }[];
  }[];
}

const Footer: React.FC<FooterProps> = ({ footerData }) => {
  const { theme } = useTheme();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: false });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const imageSrc =
    theme === "dark" ? "/images/TM-Logo.svg" : "/images/TM-Logo-light.svg";

  const svgColor = theme === "dark" ? "white" : "black";

  return (
    <motion.div
      className="flex flex-col h-full justify-end"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5 }}
    >
      <Image
        className="mx-auto mb-4"
        onClick={scrollToTop}
        src="/images/footerarrow.svg"
        alt="footer arrow"
        height={40}
        width={40}
      />
      <footer className={`relative ${styles.footerContainer} mx-8`}>
        <div className={`container mx-auto w-full py-8`}>
          <div className={`md:flex mx-6`}>
            <div className={`maw-w-1/3 mb-10 md:mb-0 `}>
              <Link href="/" className={`flex items-center`}>
                <Image src={imageSrc} alt="Logo" height={35} width={215} />
              </Link>
              <div className={`${styles.companyinfo} flex flex-col my-8 `}>
                <Link
                  href="tel:+1-2063471395"
                  className="flex items-center w-fit text-left mb-3"
                >
                  <PhoneIcons color={svgColor} />
                  <span>USA: +1 (206) 347 1395</span>
                </Link>
                <Link
                  href="tel:+44-2034236509"
                  className="flex items-center w-fit mb-3"
                >
                  <PhoneIcons color={svgColor} />
                  <span>UK: +44 (203) 423 6509</span>
                </Link>
                <Link
                  href="https://wa.me/7069008181"
                  target="_blank"
                  className="flex items-center w-fit mb-3"
                >
                  <WhatsappIcon color={svgColor} />
                  <span>Whatsapp | +91 - 7069008181</span>
                </Link>
                <Link
                  href="mailto:info@technomark.io"
                  className="flex items-center w-fit mb-3"
                >
                  <MailIcon color={svgColor} />
                  <span>info@technomark.io</span>
                </Link>

                <Image
                  src="/images/dmca-badge.svg"
                  alt="dmca-badge"
                  height={50}
                  width={130}
                />
                <div className="mt-4">
                  <label className="block pb-3">Get the latest information</label>
                  <div className="flex items-center  overflow-hidden">
                    <input
                      type="text"
                      placeholder="Enter your email"
                      className="p-2 outline-none bg-transparent rounded-e-none max-w-48 border border-white rounded-md placeholder-opacity-25 placeholder-current"
                    />
                    <button className="bg-white text-[var(--text-red)] border-l-0 border rounded-e-[6px] underline p-2  focus:outline-none">
                      Subscribe
                    </button>
                  </div>
                </div>
              </div>
              <div className={`${styles.sociallinks} flex`}>
                <Link
                  href="https://www.facebook.com/TechnoMarkio"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 border rounded-full"
                >
                  <GrFacebookOption
                    size={20}
                    color={"white"}
                    className="bg-transparent"
                  />
                </Link>
                <Link
                  href="https://www.youtube.com/@TechnoMarkSolutions"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 border rounded-full"
                >
                  <FaYoutube
                    size={20}
                    color={"white"}
                    className="bg-transparent"
                  />
                </Link>
                <Link
                  href="https://www.linkedin.com/company/technomarkio/"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 border rounded-full"
                >
                  <FaLinkedinIn
                    size={20}
                    color={"white"}
                    className="bg-transparent"
                  />
                </Link>
                <Link
                  href="https://twitter.com/Technomark_io"
                  target="_blank"
                  className="flex items-center justify-center w-10 h-10 border rounded-full"
                >
                  <FaTwitter
                    size={20}
                    color={"white"}
                    className="bg-transparent"
                  />
                </Link>
              </div>
            </div>
            <div
              className={`${styles.footerlinks} max-w-2/3 flex justify-around w-full`}
            >
              {footerData?.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  <h3 className="mb-6 font-semibold capitalize">
                    {section.name.trim() && section.name}
                  </h3>
                  <ul className={`${styles.footerlinksul} ${(footerData.length == sectionIndex + 1) ? styles.lastIndexColumn : ""}`}>
                    {section.children.map((link, linkIndex) => (
                      <li
                        className={`mb-3`}
                        key={linkIndex}
                      >
                        <Link href={link.link}>
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={`py-6 mx-6 border-t`}>
          <div className="container">
            <div className="flex justify-between">
              <span>
                Copyright © 2024 <Link href="/">TechnoMark.</Link> All Rights
                Reserved.
              </span>
              <div className={`flex items-center`}>
                <Link href={"/termsofuse"}>Terms of Use</Link>
                <span className="mx-6">|</span>
                <Link href={"/privacypolicy"}>Privacy Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Footer;
