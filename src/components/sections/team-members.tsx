"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ITeamMember, ITeamMembers } from "@/types";
import Link from "next/link";

const TeamMemberCard: React.FC<{
  teamMember: ITeamMember;
  isSelected: boolean;
  onClick: () => void;
}> = ({ teamMember, isSelected, onClick }) => (
  <div
    className={`px-[24px] py-[12px] border border-solid h-fit ${
      isSelected ? "border-brand-purple" : "border-brand-light-purple"
    } cursor-pointer transition-all duration-300 ease-in-out`}
    onClick={onClick}
  >
    <span
      className={`m-0 text-lB font-normal ${
        isSelected ? "text-brand-purple" : "text-brand-black"
      }  w-full max-w-full`}
    >
      {teamMember.name || ""}
    </span>
  </div>
);

const TeamMemebers: React.FC<ITeamMembers> = ({
  heading,
  subHeading,
  teamMembers,
}) => {
  const [selectedTeamMember, setSelectedTeamMember] =
    useState<ITeamMember | null>(
      teamMembers && teamMembers.length > 0 ? teamMembers[0] : null
    );

  const handleMemberClick = (teamMember: ITeamMember) => {
    setSelectedTeamMember(teamMember);
  };

  return (
    <section className="flex flex-col w-full bg-white">
      <div className="flex flex-col lg:px-[30px] lg:py-[60px] py-[36px] px-[24px] w-full container mx-auto">
        <div className="flex flex-col max-w-full w-full justify-center items-center">
          <h3 className="mt-4 lg:text-h3 text-h3M leading-small text-center text-brand-purple">
            {heading || ""}
          </h3>
          <p className="text-b18 text-brand-gray leading-medium mt-[24px] text-center">
            {subHeading || ""}
          </p>
          {/* <Link className="mt-[24px] w-fit" href={"#"}>
            <Button
              type={link?.type}
              loading={false}
              children={link?.children || ""}
            />
          </Link> */}
        </div>
        <div className="relative mt-[48px] flex flex-col-reverse lg:flex-row w-full gap-[42px]">
          <div className="flex-1 grid lg:grid-cols-1 grid-cols-1 gap-[24px] h-fit">
            {teamMembers &&
              teamMembers.length > 0 &&
              teamMembers.map((teamMember, index) => (
                <TeamMemberCard
                  key={index}
                  teamMember={teamMember}
                  isSelected={selectedTeamMember?.name === teamMember.name}
                  onClick={() => handleMemberClick(teamMember)}
                />
              ))}
          </div>
          <div className="flex-1 flex flex-col relative">
            {selectedTeamMember && (
              <div className="group w-full flex flex-col pb-[24px]">
                <div className="absolute right-0 w-0 group-hover:w-full duration-500 ease-in-out bottom-0 h-[2px] bg-gradient-to-l from-brand-blue to-white"></div>
                <Image
                  loading="lazy"
                  src={selectedTeamMember.image?.src || ""}
                  alt={selectedTeamMember.image?.alt || "Project Image"}
                  width={350}
                  height={350}
                  className="w-full lg:max-h-[350px] max-h-[250px] lg;max-w-[350px] max-w-[250px] object-cover object-center transition-all duration-300 ease-in-out"
                />
                <span className="mt-[16px] text-lB text-brand-blue">
                  {selectedTeamMember.role || ""}
                </span>
                <p className="mt-[8px] text-b16 text-brand-gray leading-medium max-w-[640px]">
                  {selectedTeamMember.description || ""}
                </p>
                {selectedTeamMember?.socials &&
                  selectedTeamMember?.socials.length > 0 && (
                    <div className="flex flex-row gap-[8px] mt-[12px] justify-end items-center">
                      {selectedTeamMember?.socials?.map((item, index) => {
                        return (
                          <Link
                            className="hover:translate-y-[-4px] duration-300 ease-in-out"
                            target="_blank"
                            href={item?.socialUrl || "#"}
                            key={index}
                          >
                            <Image
                              className="w-full h-full max-w-[24px] max-h-[24px] object-contain object-center"
                              src={item?.icon?.src || ""}
                              width={24}
                              height={24}
                              alt={item?.icon?.alt || "Social Button"}
                            />
                          </Link>
                        );
                      })}
                    </div>
                  )}
                {/* <span className="group-hover:text-brand-blue mt-[24px] text-lB text-brand-black duration-500 ease-in-out leading-medium">
                  Learn More
                </span> */}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMemebers;
