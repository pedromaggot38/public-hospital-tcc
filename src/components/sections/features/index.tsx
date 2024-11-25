import Image from "next/image";
import Link from "next/link";

interface ButtonData {
  href: string;
  title: string;
  icon: string;
  bgColor: string;
  hoverColor: string;
  description?: string;
}

interface FeaturesProps {
  buttonsData: ButtonData[];
  sectionTitle: string;
  sectionDescription: string;
  badge: string;
  target?: "_self" | "_blank";
}

export default function Features({
  buttonsData,
  sectionTitle,
  sectionDescription,
  badge,
  target = "_self",
}: FeaturesProps) {
  return (
    <section className="pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <span className="py-1 px-4 bg-blue-100 rounded-full text-xs font-medium text-blue-600 text-center">
            {badge}
          </span>
          <h2 className="text-3xl text-center font-bold text-gray-900 py-5">
            {sectionTitle}
          </h2>
          <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
            {sectionDescription}
          </p>
          <div className="flex mt-6 justify-center">
            <div className="w-16 h-1 rounded-full bg-blue-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
          {buttonsData.map((button, index) => (
            <div
              key={index}
              className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4"
            >
              <Link href={button.href} target={target}>
                <div
                  className={`bg-gray-100 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 ${button.bgColor} ${button.hoverColor}`}
                >
                  <Image
                    src={button.icon}
                    alt={button.title}
                    width={30}
                    height={30}
                    className="stroke-current transition-all duration-500"
                  />
                </div>
              </Link>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                {button.title}
              </h4>
              <p className="text-sm font-normal text-gray-500">
                {button.description
                  ? button.description
                  : `Clique para mais informações sobre os ${button.title}.`}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
