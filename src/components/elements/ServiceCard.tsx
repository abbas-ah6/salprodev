import Link from "next/link";
import Image from "next/image";

type ServiceCardProps = {
  icon: string;
  title: string;
  description: string;
  link: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  link = "#",
}) => (
  <Link href={link}>
    <div className="overflow-hidden service-card flex flex-col p-8 min-h-[200px] h-[100%] hover:shadow-service-card-shadow ease-in-out duration-700 rounded-lg border border-solid border-[#151F44] border-opacity-25 justify-between gap-4 w-full relative">
      <div className="flex flex-row w-full items-center justify-between text-2xl font-medium leading-6 text-[#3E4662]">
        <h3 className="">{title}</h3>
        <Image
          loading="lazy"
          src={icon}
          alt={`${title} icon`}
          width={40}
          height={43}
          className="w-9 aspect-[0.93]"
        />
      </div>
      <p className="mt-6 text-base leading-6 text-slate-500">{description}</p>
      <div className="ellipse"></div>
    </div>
  </Link>
);

export default ServiceCard;
