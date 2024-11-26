import React from "react";

interface PagesTitlesProps {
  title: string;
}

const PagesTitles: React.FC<PagesTitlesProps> = ({ title }) => {
  return (
    <section className="border-l-[5px] border-blue-500 pl-5">
      <h2 className="text-xl sm:text-3xl font-bold my-5 text-dark dark:text-white">
        {title}
      </h2>
    </section>
  );
};

export default PagesTitles;
