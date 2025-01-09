"use client";

// import Video from "@/components/Video";
import { Metadata } from "next";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Brand } from "@/types/brand";
import brandsData from "./brandsData";
import SectionTitle from "@/components/Common/SectionTitle";
import featuresData from "../components/Skill/featuresData";
import { Feature } from "@/types/feature";
import Typewriter from "typewriter-effect";
const TypingAnimation = dynamic(() => import("./TypingAnimation"), {
  ssr: false, // Disable server-side rendering
});

export default function Home() {
  const downloadPDF = () => {
    const link = document.createElement("a");
    link.href = "/sachin_gurjar_resume.pdf"; // Path to the PDF file
    link.download = "sachin_gurjar_resume.pdf"; // File name for download
    link.click();
  };

  // document.addEventListener("DOMContentLoaded", () => {
  //   const app = document.getElementById("app");

  //   if (app) {
  //     const typewriter = new Typewriter(app, {
  //       loop: true,
  //     });

  //     typewriter
  //       .typeString("I Am Web Designer")
  //       .pauseFor(2500)
  //       .deleteAll()
  //       .typeString("I Am Graphics Designer")
  //       .pauseFor(2500)
  //       .deleteAll()
  //       .typeString("I Am Creative")
  //       .pauseFor(2500)
  //       .start();
  //   } else {
  //     console.error("Element with ID 'app' not found.");
  //   }
  // });

  let typingData = [
    '<span class="text-blue-500">a Software Developer</span>',
    '<span class="text-green-500">a Programmer</span>',
    '<span class="text-red-500">a Full Stack Developer</span>',
    '<span class="text-yellow-500">an Expert in ReactJS</span>',
    '<span class="text-teal-500">a React Native Developer</span>',
    '<span class="text-orange-500">a Software Developer</span>',
    '<span class="text-pink-500">a Full Stack Developer</span>',
    '<span class="text-cyan-500">a Programmer</span>',
    '<span class="text-purple-500">a React Native Developer</span>',
    '<span class="text-lime-500">a Software Developer</span>',
    '<span class="text-gray-500">a Programmer</span>',
    '<span class="text-amber-500">a Full Stack Developer</span>',
    '<span class="text-rose-500">a Software Developer</span>',
    '<span class="text-fuchsia-500">a React Native Developer</span>',
  ];

const projectData = [
  {
    title: "Project 1",
    description: "Description of Project 1",
    technologies: ["React", "Node.js", "TailwindCSS"],
    link: "#",
    lightImage: "/images/about/about-image-2.svg", // Light mode image path
    darkImage: "/images/about/about-image-2-dark.svg", // Dark mode image path
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    technologies: ["Next.js", "Firebase", "GraphQL"],
    link: "#",
    lightImage: "/images/about/about-image-2.svg", // Light mode image path
    darkImage: "/images/about/about-image-2-dark.svg", // Dark mode image path
  },
  {
    title: "Project 1",
    description: "Description of Project 1",
    technologies: ["React", "Node.js", "TailwindCSS"],
    link: "#",
    lightImage: "/images/about/about-image-2.svg", // Light mode image path
    darkImage: "/images/about/about-image-2-dark.svg", // Dark mode image path
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    technologies: ["Next.js", "Firebase", "GraphQL"],
    link: "#",
    lightImage: "/images/about/about-image-2.svg", // Light mode image path
    darkImage: "/images/about/about-image-2-dark.svg", // Dark mode image path
  },
  {
    title: "Project 1",
    description: "Description of Project 1",
    technologies: ["React", "Node.js", "TailwindCSS"],
    link: "#",
    lightImage: "/images/about/about-image-2.svg", // Light mode image path
    darkImage: "/images/about/about-image-2-dark.svg", // Dark mode image path
  },
  {
    title: "Project 2",
    description: "Description of Project 2",
    technologies: ["Next.js", "Firebase", "GraphQL"],
    link: "#",
    lightImage: "/images/about/about-image-2.svg", // Light mode image path
    darkImage: "/images/about/about-image-2-dark.svg", // Dark mode image path
  },
  // Add more projects...
];



  return (
    <>
      <section
        id="about"
        className="relative z-10 overflow-hidden bg-white pb-16 pt-[80px] dark:bg-gray-dark md:pb-[70px] md:pt-[100px] xl:pb-[50px] xl:pt-[110px] 2xl:pb-[60px] 2xl:pt-[130px]"
      >
        <div className="container px-4 sm:px-8 lg:px-16">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="flex flex-col items-center justify-evenly space-y-6 sm:flex-row sm:space-x-6 sm:space-y-0">
                {/* Text Section */}

                <div className="w-full text-center sm:ml-4 sm:w-1/2 sm:text-left">
                  {" "}
                  {/* Added sm:ml-4 to shift the text left */}
                  <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-3xl md:text-4xl">
                    {"Hi, I'm"}{" "}
                  </h1>
                  <h1 className="mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl md:text-4xl">
                    Sachin Gurjar
                  </h1>
                  {/* typewriter */}
                  <div className="mb-5 text-2xl font-bold leading-tight text-black dark:text-white sm:text-3xl md:text-4xl">
                    <div className="flex  gap-2">
                      {"I'm"}{" "}
                      <span>
                        <Typewriter
                          options={{
                            strings: typingData,
                            autoStart: true,
                            loop: true,
                          }}
                        />
                      </span>
                    </div>
                  </div>
                  <p className="mb-8 text-sm text-body-color dark:text-body-color-dark sm:text-base md:text-lg">
                    {"I'm"} a passionate software developer with experience in
                    creating robust, scalable, and user-friendly applications.
                    My focus is on developing web and mobile solutions that
                    provide a seamless experience for users. I have expertise in
                    technologies such as React, JavaScript, CSS, React Native,
                    and more. {"I'm"} always excited to learn and adapt to new tools
                    and frameworks.
                  </p>
                </div>

                {/* Image Section */}
                <div className="flex justify-center sm:justify-start">
                  <Image
                    src="/images/sachin.HEIC"
                    width={350}
                    height={350}
                    alt="Sachin Gurjar"
                    loading="lazy"
                    className=" border-2 border-gray-400"
                  />
                </div>
              </div>

              {/* Button Section */}
              <div className="mt-6 flex justify-center sm:justify-start ">
                <button
                  onClick={downloadPDF}
                  className="flex transform items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-6 py-3 text-white shadow-lg transition-transform duration-300 
    hover:scale-110 hover:from-blue-600 hover:to-purple-700 hover:shadow-2xl"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 16v-8m0 0l-3 3m3-3l3 3m6 8H6m6 0v-8"
                    />
                  </svg>
                  Download My Resume
                </button>
              </div>
            </div>

            {/* <div className="mt-12">
              <h2 className="mb-6 text-2xl font-bold text-black dark:text-white">
                My Skills
              </h2>
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
                {["React", "JavaScript", "CSS", "React Native", "Node.js"].map(
                  (skill) => (
                    <div
                      key={skill}
                      className="flex items-center justify-center rounded-lg border-2 border-gray-300 p-4 text-sm font-medium shadow-md"
                    >
                      {skill}
                    </div>
                  ),
                )}
              </div>
            </div> */}
          </div>
        </div>

        <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="450"
            height="556"
            viewBox="0 0 450 556"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="277"
              cy="63"
              r="225"
              fill="url(#paint0_linear_25:217)"
            />
            <circle
              cx="17.9997"
              cy="182"
              r="18"
              fill="url(#paint1_radial_25:217)"
            />
            <circle
              cx="76.9997"
              cy="288"
              r="34"
              fill="url(#paint2_radial_25:217)"
            />
            <circle
              cx="325.486"
              cy="302.87"
              r="180"
              transform="rotate(-37.6852 325.486 302.87)"
              fill="url(#paint3_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="184.521"
              cy="315.521"
              r="132.862"
              transform="rotate(114.874 184.521 315.521)"
              stroke="url(#paint4_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="356"
              cy="290"
              r="179.5"
              transform="rotate(-30 356 290)"
              stroke="url(#paint5_linear_25:217)"
            />
            <circle
              opacity="0.8"
              cx="191.659"
              cy="302.659"
              r="133.362"
              transform="rotate(133.319 191.659 302.659)"
              fill="url(#paint6_linear_25:217)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_25:217"
                x1="-54.5003"
                y1="-178"
                x2="222"
                y2="288"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint1_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(17.9997 182) rotate(90) scale(18)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <radialGradient
                id="paint2_radial_25:217"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(76.9997 288) rotate(90) scale(34)"
              >
                <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" />
              </radialGradient>
              <linearGradient
                id="paint3_linear_25:217"
                x1="226.775"
                y1="-66.1548"
                x2="292.157"
                y2="351.421"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:217"
                x1="184.521"
                y1="182.159"
                x2="184.521"
                y2="448.882"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint5_linear_25:217"
                x1="356"
                y1="110"
                x2="356"
                y2="470"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
              <linearGradient
                id="paint6_linear_25:217"
                x1="118.524"
                y1="29.2497"
                x2="166.965"
                y2="338.63"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
          <svg
            width="364"
            height="201"
            viewBox="0 0 364 201"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24"
              stroke="url(#paint0_linear_25:218)"
            />
            <path
              d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24"
              stroke="url(#paint1_linear_25:218)"
            />
            <path
              d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24"
              stroke="url(#paint2_linear_25:218)"
            />
            <path
              d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481"
              stroke="url(#paint3_linear_25:218)"
            />
            <circle
              opacity="0.8"
              cx="214.505"
              cy="60.5054"
              r="49.7205"
              transform="rotate(-13.421 214.505 60.5054)"
              stroke="url(#paint4_linear_25:218)"
            />
            <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" />
            <defs>
              <linearGradient
                id="paint0_linear_25:218"
                x1="184.389"
                y1="69.2405"
                x2="184.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_25:218"
                x1="156.389"
                y1="69.2405"
                x2="156.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_25:218"
                x1="125.389"
                y1="69.2405"
                x2="125.389"
                y2="212.24"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint3_linear_25:218"
                x1="93.8507"
                y1="67.2674"
                x2="89.9278"
                y2="210.214"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" stopOpacity="0" />
                <stop offset="1" stopColor="#4A6CF7" />
              </linearGradient>
              <linearGradient
                id="paint4_linear_25:218"
                x1="214.505"
                y1="10.2849"
                x2="212.684"
                y2="99.5816"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#4A6CF7" />
                <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
              </linearGradient>
              <radialGradient
                id="paint5_radial_25:218"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(220 63) rotate(90) scale(43)"
              >
                <stop offset="0.145833" stopColor="white" stopOpacity="0" />
                <stop offset="1" stopColor="white" stopOpacity="0.08" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </section>

      <section className="pt-16">
        <div data-aos="fade-up" id="skill" className="container">
          <SectionTitle
            title="My Skill"
            paragraph="Here are some of my skills on which I have been working on for the past 2 years."
            center
          />

          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              {/* Row for Frontend and Backend */}
              <div className="flex flex-wrap items-start justify-between space-x-4 rounded-sm bg-gray-light p-8 dark:bg-gray-dark">
                {/* Frontend Section */}
                <div className="w-full sm:w-1/2 lg:w-[48%]">
                  <div
                    data-aos="fade-up"
                    className="mb-4 text-center text-xl font-bold text-gray-800 dark:text-white sm:text-2xl md:text-3xl"
                  >
                    Frontend
                  </div>
                  <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light p-6 dark:bg-gray-dark ">
                    {brandsData
                      .filter((brand) => brand.category === "frontend") // Example filter for frontend brands
                      .map((brand) => (
                        <SingleBrand key={brand.id} brand={brand} />
                      ))}
                  </div>
                </div>

                {/* Backend Section */}
                <div className="w-full sm:w-1/2 lg:w-[48%]">
                  <div
                    data-aos="fade-up"
                    className="mb-4 text-center text-xl font-bold text-gray-800 dark:text-white sm:text-2xl md:text-3xl"
                  >
                    Backend
                  </div>
                  <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light p-6 dark:bg-gray-dark">
                    {brandsData
                      .filter((brand) => brand.category === "backend") // Example filter for backend brands
                      .map((brand) => (
                        <SingleBrand key={brand.id} brand={brand} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              {/* Row for native and devops */}
              <div className="flex flex-wrap items-start justify-between space-x-4 rounded-sm bg-gray-light p-8 dark:bg-gray-dark">
                {/* native Section */}
                <div className="w-full sm:w-1/2 lg:w-[48%]">
                  <div
                    data-aos="fade-up"
                    className="mb-4 text-center text-xl font-bold text-gray-800 dark:text-white sm:text-2xl md:text-3xl"
                  >
                    React Native
                  </div>
                  <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light p-6 dark:bg-gray-dark">
                    {brandsData
                      .filter((brand) => brand.category === "native") // Example filter for native brands
                      .map((brand) => (
                        <SingleBrand key={brand.id} brand={brand} />
                      ))}
                  </div>
                </div>

                {/* devops Section */}
                <div className="w-full sm:w-1/2 lg:w-[48%]">
                  <div
                    data-aos="fade-up"
                    className="mb-4 text-center text-xl font-bold text-gray-800 dark:text-white sm:text-2xl md:text-3xl"
                  >
                    DevOps
                  </div>
                  <div className="flex flex-wrap items-center justify-center rounded-sm bg-gray-light p-6 dark:bg-gray-dark">
                    {brandsData
                      .filter((brand) => brand.category === "devops") // Example filter for devops brands
                      .map((brand) => (
                        <SingleBrand key={brand.id} brand={brand} />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
         

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {featuresData.map((feature) => (
              <SingleFeature key={feature.id} feature={feature} />
            ))}
          </div>
        </div>
      </section> */}

      <section id="experience" className="pt-16 md:pt-20 lg:pt-28">
        <div className="container">
          <div className="border-b border-body-color/[.15] pb-16 dark:border-white/[.15] md:pb-20 lg:pb-28">
            <div
              data-aos="fade-up"
              className=" flex w-full justify-center text-center"
            >
              <SectionTitle
                title="Work Experience"
                paragraph="Here’s an overview of my professional journey as a software developer."
                mb="44px"
              />
            </div>

            <div className="flex flex-wrap justify-center gap-8">
              {/* Experience Card 1 */}
              <div
                data-aos="fade-up"
                className="w-full max-w-[500px] rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <Image
                  src="/images/ps.png"
                  alt="PS Softech"
                  width={100}
                  height={50}
                  className="mb-4"
                />
                <h3 className="text-lg font-semibold text-blue-500">
                  PS Softech
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Jan 2022 - Jun 2022
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  Worked as a software developer intern, gaining hands-on
                  experience in web and mobile development.
                </p>
              </div>

              {/* Experience Card 2 */}
              <div
                data-aos="fade-up"
                className="w-full max-w-[500px] rounded-lg border border-gray-200 p-6 shadow-md dark:border-gray-700 dark:bg-gray-800"
              >
                <Image
                  src="/images/oriol.png"
                  alt="Oriol Infotech Solutions"
                  width={100}
                  height={50}
                  className="mb-4"
                />
                <h3 className="text-lg font-semibold text-blue-500">
                  Oriol Infotech Solutions
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Jun 2022 - Present
                </p>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  Working as a software developer focusing on React Native for
                  food applications, managing front-end and back-end features
                  like user authentication, payment integration, and database
                  management.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            {/* <div className="mt-12">
  <h3 className="mb-6 text-2xl font-bold text-blue-500 text-center">
    Skills
  </h3>
  <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
    {[
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Express.js",
      "Next.js",
      "React.js",
      "Redux",
      "React Native",
      "MySQL",
      "Firebase",
      "Git",
      "GitHub",
      "Postman",
    ].map((skill, index) => (
      <div
        key={index}
        className="flex items-center justify-center rounded-lg  from-blue-500 to-purple-600 px-4 py-2 text-sm font-semibold  shadow-md transition-transform duration-300 hover:scale-105"
      >
        {skill}
      </div>
    ))}
  </div>
</div> */}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="bg-white py-16 dark:bg-gray-900 md:py-20 lg:py-28"
      >
        <div className="container">
          
         
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
              My Projects
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Explore some of the projects {"I've"} worked on, showcasing my skills
              in web and mobile app development.
            </p>
          </div>

          {/* Projects Grid */}
          <div className=" grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
            {projectData.map((project, index) => (
              <div
                key={index}
                className="relative flex flex-col overflow-hidden rounded-lg bg-cover bg-center shadow-lg transition-transform duration-300 hover:scale-105"
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/20 dark:bg-black/70"></div>

                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${project.lightImage})`, // Light mode image
                  }}
                ></div>
                <div
                  className="absolute inset-0 hidden bg-cover bg-center dark:block"
                  style={{
                    backgroundImage: `url(${project.darkImage})`, // Dark mode image
                  }}
                ></div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  <h3 className="text-lg font-bold dark:text-white sm:text-xl lg:text-2xl">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm dark:text-gray-300 sm:text-base">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    <h4 className="mb-2 text-sm font-semibold dark:text-gray-200 sm:text-base">
                      Technologies:
                    </h4>
                    <ul className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <li
                          key={techIndex}
                          className="rounded-full bg-blue-600 px-3 py-1 text-xs font-medium dark:bg-indigo-500"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <a
                    href={project.link}
                    className="mt-6 inline-block rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 px-4 py-2 text-sm font-medium text-white shadow-md hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Project
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section
        id="projects"
        className="bg-white py-16 dark:bg-gray-900 md:py-20 lg:py-28"
      >
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold text-black dark:text-white sm:text-4xl">
              Contect Me
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Explore some of the projects {"I've"} worked on, showcasing my skills
              in web and mobile app development.
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

const SingleBrand = ({ brand }: { brand: Brand }) => {
  const { href, image, imageLight, name } = brand;

  return (
    <div
      data-aos="fade-up"
      className="flex items-center justify-center px-4 py-4 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6"
    >
      <div
        // href={href}
        // target=""
        rel="nofollow noreferrer"
        className="relative flex h-[70px] w-[70px] flex-col items-center justify-center space-y-2 rounded-full opacity-100 transition transition-transform duration-300 hover:scale-150 hover:opacity-100
        dark:opacity-100
        dark:hover:opacity-100"
      >
        <Image
          src={imageLight}
          alt={name}
          width={70}
          height={70}
          className="hidden dark:block"
        />
        <Image
          src={image}
          alt={name}
          width={70}
          height={70}
          className="block dark:hidden "
        />
        <p className="text-center text-xs text-gray-700 dark:text-gray-200">
          {name}
        </p>
      </div>
    </div>
  );
};

const SingleFeature = ({ feature }: { feature: Feature }) => {
  const { icon, title, paragraph } = feature;
  return (
    <div className="w-full">
      <div className="wow fadeInUp" data-wow-delay=".15s">
        <div className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
          {icon}
        </div>
        <h3 className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>
        <p className="pr-[10px] text-base font-medium leading-relaxed text-body-color">
          {paragraph}
        </p>
      </div>
    </div>
  );
};
