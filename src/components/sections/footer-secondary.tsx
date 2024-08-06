import Link from "next/link";
import * as React from "react";

const SecondaryFooter: React.FC = () => {
  return (
    <section
      id="contact-footer"
      className="flex flex-col px-16 pt-20 pb-6 max-md:px-5 bg-[#FEF1E9]"
    >
      <div className="flex flex-col container mx-auto">
        <div className="flex flex-col gap-5 justify-between mt-4 w-full max-md:flex-wrap max-md:max-w-full">
          <div className="flex flex-row justify-between w-full items-center">
            <img
              loading="lazy"
              src="/images/primary-logo.svg"
              className="self-center aspect-[5.56] min-w-[225px]"
              alt="Footer logo"
            />
            <div className="flex gap-5 ">
              <Link
                className="hover:-translate-y-1 duration-200 ease-in-out"
                target="_blank"
                href={"https://www.facebook.com/azandpartners"}
              >
                <img
                  loading="lazy"
                  src="/icons/az-fb-icon.svg"
                  className="shrink-0 aspect-[0.55] w-[11px]"
                  alt="Social icon"
                />
              </Link>
              <Link
                className="hover:-translate-y-1 duration-200 ease-in-out"
                target="_blank"
                href={"https://www.linkedin.com/company/azandpartners"}
              >
                <img
                  loading="lazy"
                  src="/icons/az-linkedin-icon.svg"
                  className="shrink-0 w-5 aspect-square"
                  alt="Social icon"
                />
              </Link>
            </div>
          </div>
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col pt-8 text-base font-semibold text-center rounded-lg text-[#3E4662] max-md:mt-6 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="/icons/location-icon.svg"
                    className="self-center w-8 aspect-square"
                  />
                  <div className="mt-2 text-2xl leading-7 max-md:max-w-full">
                    Visit us
                  </div>
                  <div className="mt-2 leading-[150%] max-md:max-w-full">
                    Get directions to our office in Paramatta, Sydney
                  </div>
                  <div className="mt-6 leading-6 max-md:max-w-full">
                    Address
                    <br />
                    <a
                      href="https://www.google.com/maps/place/3%2F411+Church+St,+Parramatta+NSW+2150,+Australia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3E4662] hover:text-[#F17720] duration-200"
                    >
                      3/411 Church St
                      <br />
                      Parramatta NSW 2150
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow pt-8 text-base font-semibold leading-6 text-center rounded-lg text-[#3E4662] max-md:mt-6 max-md:max-w-full">
                  <img
                    loading="lazy"
                    src="/icons/call-icon.svg"
                    className="self-center w-8 aspect-square"
                  />
                  <div className="mt-2 text-2xl leading-7 max-md:max-w-full">
                    Call or email us directly
                  </div>
                  <div className="mt-2 leading-[150%] max-md:max-w-full">
                    Get in touch with us with one phone call, or drop us an
                    email
                  </div>
                  <div className="mt-6 max-md:max-w-full">
                    Phone
                    <br />
                    <a
                      href="tel:1300145560"
                      className="text-[#3E4662] hover:text-[#F17720] duration-200"
                    >
                      1300 450 621
                    </a>
                  </div>
                  <div className="mt-4 max-md:max-w-full">
                    Email Address
                    <br />
                    <a
                      href="mailto:sales@azaccountingservices.com"
                      className="text-[#3E4662] hover:text-[#F17720] duration-200"
                    >
                      sales@azaccountingservices.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-14 px-16 w-full flex justify-center items-center">
          <p className="text-[14px] text-center leading-[120%] lg:max-w-full max-w-[520px] w-full text-[#3E4662]">
            Liability limited by a Scheme approved under Professional Standards
            Legislation
          </p>
        </div>
        <div
          className="shrink-0 h-[1px] mt-[12px] w-full max-md:max-w-full"
          style={{
            background:
              "linear-gradient(to right, #ffffff00 0%, #979EC0 50%, #ffffff00 100%)",
          }}
        />
        <div className="justify-center text-center items-center px-16 mt-6 text-xs leading-4 text-[#3E4662] max-md:px-5 max-md:max-w-full">
          2024 AZ & Partners. All rights reserved.
        </div>
      </div>
    </section>
  );
};

export default SecondaryFooter;
