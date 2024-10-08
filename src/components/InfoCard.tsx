/**
 * This code was generated by Builder.io.
 */
import * as React from "react";

const InfoCard: React.FC<{ title: string; description: string }> = ({
  title,
  description,
}) => {
  return (
    <section className="flex flex-col p-4 rounded-lg border border-solid border-indigo-950 border-opacity-10">
      <header className="flex flex-col px-16 text-2xl font-medium leading-6 whitespace-nowrap text-[#3E4662] max-md:px-5">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7c67102ce64d6ea0cd88a42a91c2c16835dd2133bf2b6709918acda71a0deb41?apiKey=50b53e651a2945f4b1a7a00ab2b0dab7&"
          alt=""
          className="self-center w-9 aspect-[0.93]"
        />
        <h2 className="mt-2">{title}</h2>
      </header>
      <p className="self-center mt-6 text-sm leading-5 text-center text-slate-500">
        {description}
      </p>
    </section>
  );
};

const DataComponent: React.FC = () => {
  const data = [
    {
      title: "Responsiveness",
      description:
        "We build long-lasting relationships with our clients, tailoring our services to your needs as we go.",
    },
  ];

  return (
    <main>
      {data.map((item, index) => (
        <InfoCard key={index} title={item.title} description={item.description} />
      ))}
    </main>
  );
};

export default DataComponent;