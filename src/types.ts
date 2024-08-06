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

export interface IProject {
  image: IImage;
  name: string;
  shortDescription: string;
  url: string;
}

export interface IOurProjects {
  heading: string;
  description: string;
  link: IButton;
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

export interface IHero {
  tag?: string;
  heading: string;
  subHeading: string;
  buttons: IButton[];
}

export interface IAboutUs {
  heading: string;
  description: string;
  link: IButton;
  showBanner: boolean;
  image?: IImage;
}

export interface IServicesGrid {
  heading: string;
  description: string;
  link: IButton;
  services: IService[];
}

export interface IBlogCarousel {
  heading: string;
  description: string;
  link: IButton;
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
