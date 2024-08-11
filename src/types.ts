export interface IButton {
  children: React.ReactNode;
  type?: "primary" | "secondary";
  loading?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export interface IImage {
  src: string;
  alt: string;
}

export interface ILink {
  children: React.ReactNode;
  url?: string;
  type?: "primary" | "secondary";
  loading?: boolean;
  newTab?: boolean;
}

export interface IProject {
  image: IImage;
  name: string;
  shortDescription: string;
  url: string;
}

export interface IOurProjects {
  heading: string;
  description: string;
  link: ILink;
  projects: IProject[];
}

export interface IService {
  serviceImage: IImage;
  name: string;
  shortDescription: string;
  serviceUrl: string;
}
export interface IBlog {
  blogImage: IImage;
  name: string;
  shortDescription: string;
  blogUrl: string;
}

export interface IFaqItem {
  question: string;
  answer: string;
}

export interface ISocial {
  icon: IImage;
  socialUrl: string;
}

export interface ITeamMember {
  image: IImage;
  name: string;
  role: string;
  description: string;
  socials: ISocial[];
}

export interface IWhyChooseUsCard {
  icon: IImage;
  heading: string;
  description: string;
  index?: number;
}

export interface IBulletPoint {
  text: string;
}

export interface IHero {
  tag?: string;
  heading: string;
  subHeading: string;
  buttons: IButton[];
  links: ILink[];
}

export interface IAboutUs {
  heading: string;
  description: string;
  link: ILink;
  showBanner: boolean;
  image?: IImage;
}

export interface IServicesGrid {
  heading: string;
  description: string;
  link: ILink;
  services: IService[];
}

export interface IBlogCarousel {
  heading: string;
  description: string;
  link: ILink;
  blogs: IBlog[];
}

export interface IFaqs {
  heading: string;
  description: string;
  image: IImage;
  faqs: IFaqItem[];
}

export interface IHubSpotForm {
  heading: string;
  subHeading: string;
}

export interface IAboutUsMissionVision {
  missionHeading: string;
  missionDescription: string;
  image: IImage;
  visionHeading: string;
  visionDescription: string;
}

export interface ITeamMembers {
  heading: string;
  subHeading: string;
  teamMembers: ITeamMember[];
}

export interface IWhyChooseUs {
  heading: string;
  description: string;
  link: ILink;
  image: IImage;
  cards: IWhyChooseUsCard[];
  imageAlignment: "left" | "right";
}

export interface IOurProcess {
  heading: string;
  description: string;
  cards: IWhyChooseUsCard[];
}

export interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  tag: keyof JSX.IntrinsicElements;
}

export interface IServiceHero {
  tag: string;
  heading: string;
  subHeading: string;
  buttons: IButton[];
  links: ILink[];
  image: IImage;
}

export interface ITextWithImage {
  heading: string;
  description: string;
  image: IImage;
  bulletPoints?: IBulletPoint[];
  link: ILink;
}

export interface IBlogHero {
  heading: string;
  authorImage?: IImage;
  authorName?: string;
  image?: IImage;
}

export interface IBlogDetails {
  blogContent: string;
}
