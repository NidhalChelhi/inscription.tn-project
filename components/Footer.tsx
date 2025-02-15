"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => (
  <motion.footer
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.5 }}
    className="w-full sm:px-24 px-12 pt-16 pb-8"
  >
    <div className="w-full mx-auto flex flex-col sm:flex-row items-center justify-between  gap-8">
      <div className="flex flex-row items-center justify-center gap-5">
        <div className="flex items-center justify-center w-10">
          <img src="/assets/tunisia-symbol.png" className="object-cover" />
        </div>
        <div className="flex items-center justify-center w-28">
          <img src="/assets/logo_footer.png" className="object-cover" />
        </div>
      </div>
      <p className="font-normal text-[14px] text-grey-800 opacity-50">
        Copyright © 2024 Ministère de l'Enseignement Supérieur et de la
        Recherche Scientifique - Tunisie
      </p>
      <div className="flex flex-row items-center justify-between gap-5">
        <Link
          className="hover:bg-indigo-100 rounded-full p-2 transition-all ease-in-out duration-200"
          href="https://www.facebook.com/profile.php?id=100064605075098"
          target="_blank"
        >
          <img src="/assets/facebook.png" alt="facebook" width={24} />
        </Link>
        <Link
          className="hover:bg-indigo-100 rounded-full p-2 transition-all ease-in-out duration-200"
          href="https://www.linkedin.com/company/mesrst/"
          target="_blank"
        >
          <img src="/assets/linkedin.png" alt="linkedin" width={24} />
        </Link>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
