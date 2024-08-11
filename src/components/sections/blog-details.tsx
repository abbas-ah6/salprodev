import { IBlogDetails } from "@/types";
import React from "react";

const BlogDetails: React.FC<IBlogDetails> = ({ blogContent }) => {
  return (
    <section className="relative w-full bg-white hero-container">
      <div className="gap-[48px] items-center overflow-hidden container mx-auto lg:px-[30px] px-[24px] w-full flex justify-center flex-col min-h-[580px]">
        <div className="prose lg:prose-xl max-w-[920px] w-full">
          <div dangerouslySetInnerHTML={{ __html: blogContent || '' }} />
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
