import React from "react";

const servicesData = [
  {
    title: "Infrastructure",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.",
  },
  {
    title: "Cloud Migration",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.",
  },
  {
    title: "Cloud Security",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.",
  },
  {
    title: "Machine Learning",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.",
  },
  {
    title: "Web Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.",
  },
  {
    title: "Mobile Application Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.",
  },
  {
    title: "DevOps",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.",
  },
  {
    title: "Flutter Developer",
    description:
      "Lorem ipsum dolor sit amet consectetur. Massa in integer aliquam elit nunc massa. In commodo magna magna lectus gravida volutpat ac at. Pellentesque iaculis congue massa mi vitae orci volutpat. In ut nisl pharetra nibh feugiat consequat et donec ac.",
  },
];

const Page2 = () => {
  return (
    <section
      className="relative py-8 md:py-10 px-4 md:px-5 overflow-x-hidden"
      style={{
        backgroundColor: "black",
        minHeight: "100vh",
      }}
    >
      {/* ภาพพื้นหลัง Gradients.jpg */}
      <div
        className="absolute block w-auto md:w-1/2 lg:max-w-[700px] h-full"
        style={{
          backgroundImage: "url('/Gradients.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          left: "0",
          top: "6%",
          zIndex: 1,
          opacity: 0.7,
        }}
      ></div>
      {/* เนื้อหาที่ซ้อนบนพื้นหลัง */}
      <div className="relative z-10 container mx-auto">
        <h2
          className="text-2xl md:text-3xl lg:text-4xl text-center font-bold mb-6 md:mb-8"
          style={{
            background: "linear-gradient(90deg, white 36%, transparent)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Our{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #c7d2fe, #818cfa, #2563eb)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Services
          </span>
        </h2>

        <p
          className="text-center text-white italic -mt-[20px] text-sm md:text-base max-w-2xl mx-auto"
          style={{
            marginBottom: "4rem",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="border border-white border-opacity-20 rounded-lg p-4 md:p-5 shadow hover:shadow-lg transition transform hover:-translate-y-1"
              style={{
                background:
                  (Math.floor(index / 4) + index) % 2 === 0
                    ? "rgba(55, 65, 81, 0.5)"
                    : "rgba(17, 24, 39, 0.5)",
                backdropFilter: "blur(10px)",
                maxWidth: "100%", // Added to ensure content fits within container
                overflow: "hidden", // Added to clip overflowing content
              }}
            >
              <div className="bg-white w-10 h-10 md:w-12 md:h-12 mb-3 rounded-lg"></div>
              <h3 className="text-base md:text-lg font-bold mb-2 text-white truncate">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm md:text-base line-clamp-4">{service.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ชั้นโปร่งแสงสีดำทับภาพพื้นหลัง */}
      <div
        className="absolute inset-0 bg-black opacity-50 z-0"
        aria-hidden="true"
      ></div>
    </section>
  );
};

export default Page2;
