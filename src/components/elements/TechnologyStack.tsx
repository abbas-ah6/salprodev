import Image from "next/image";
import Marquee from "react-fast-marquee";

interface TechLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const techLogos: TechLogo[] = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    alt: "React",
    width: 60,
    height: 60,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Nextjs-logo.svg",
    alt: "Next.js",
    width: 60,
    height: 60,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    alt: "Tailwind CSS",
    width: 60,
    height: 60,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    alt: "Node.js",
    width: 60,
    height: 60,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    alt: "JavaScript",
    width: 60,
    height: 60,
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
    alt: "TypeScript",
    width: 60,
    height: 60,
  },
];

const TechnologyStack: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-gray-100 w-full">
      <div className="container mx-auto w-full">
        <h2 className="lg:text-h2 text-h2M font-light leading-small text-center mb-[32px] lg:mb-[52px]">
          Our Technology Stack
        </h2>

        <Marquee
          gradient={true}
          gradientColor="#f3f4f6"
          gradientWidth={100}
          speed={36}
          direction="left"
          className="mb-[48px]"
          autoFill
        >
          <div className="flex items-center opacity-80 hover:opacity-100 duration-500 ease-in-out">
            {techLogos.concat(techLogos).map((logo, index) => (
              <div key={index} className="mx-[32px]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                />
              </div>
            ))}
          </div>
        </Marquee>

        <Marquee
          gradient={true}
          gradientColor="#f3f4f6"
          gradientWidth={100}
          speed={36}
          direction="right"
          autoFill
        >
          <div className="flex items-center opacity-80 hover:opacity-100 duration-500 ease-in-out">
            {techLogos.concat(techLogos).map((logo, index) => (
              <div key={index} className="mx-[32px]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default TechnologyStack;
