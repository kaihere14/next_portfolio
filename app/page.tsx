import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Arman Thakur | Full Stack Developer",
  description:
    "Arman Thakur is a full stack developer specializing in modern web technologies. Experienced in building scalable, high-performance applications with clean architecture, responsive UI, and production-ready backend systems.",
};

const page = () => {
  return <div className="mx-5 md:mx-auto md:max-w-[720px]"></div>;
};

export default page;
