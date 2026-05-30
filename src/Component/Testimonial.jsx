import React from "react";
import { IoStarSharp } from "react-icons/io5";
import car1 from "../Assets/car1.png";
import car2 from "../Assets/car2.jpeg";
import car3 from "../Assets/car3.jpeg";

const arr = [
  {
    id: 1,
    image: car1,
    Name: "Mohit Saraswat",
    Contant:
      "I had a wonderful experience using E-State for finding my new apartment. The platform offered many modern and affordable property options. The images, pricing, and property details were very accurate and helpful. Customer service made the entire process smooth and stress-free. E-State truly made home buying easy and reliable for me.",
  },
  {
    id: 2,
    image: car2,
    Name: "Mukul Sharma",
    Contant:
      "E-State made my home buying journey very easy. The platform had many verified premium properties. Customer support guided me throughout the process. I could compare prices and locations easily. I highly recommend E-State to every buyer.",
  },
  {
    id: 3,
    image: car3,
    Name: "Ajay Nayak",
    Contant:
      "E-State provided an excellent property search experience from start to finish. The website was simple to use and had detailed property listings. Their support team was very responsive and professional throughout. I was able to find a perfect home within my budget quickly. I would definitely recommend E-State to anyone looking for quality properties.",
  },
];

const CustomerReview = () => {
  return (
    <section
      id="Testimonial"
      className="
        min-h-screen
        py-16
        px-4
        sm:px-6
        md:px-10
        lg:px-20
      "
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h1
          className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            font-bold
          "
        >
          Customer{" "}
          <span className="text-orange-500">
            Reviews
          </span>
        </h1>

        <p className="text-gray-500 mt-3">
          What our customers say about E-State
        </p>
      </div>

      {/* Cards */}
      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          xl:grid-cols-3
          gap-8
        "
      >
        {arr.map((elm) => (
          <div
            key={elm.id}
            className="
              bg-gray-100
              rounded-2xl
              shadow-md
              hover:shadow-xl
              transition-all
              duration-300
              p-6
              flex
              flex-col
            "
          >
            {/* Profile */}
            <div className="flex flex-col items-center">
              <img
                src={elm.image}
                alt={elm.Name}
                className="
                  h-24
                  w-24
                  rounded-full
                  object-cover
                  border-4
                  border-orange-500
                "
              />

              <h2 className="text-xl font-bold mt-4">
                {elm.Name}
              </h2>
            </div>

            {/* Review */}
            <p
              className="
                text-gray-600
                mt-5
                leading-7
                text-center
                flex-grow
              "
            >
              {elm.Contant}
            </p>

            {/* Rating */}
            <div className="mt-6">
              <h3 className="font-semibold text-center">
                Rating
              </h3>

              <div className="flex justify-center mt-2 text-orange-500 gap-1">
                <IoStarSharp size={20} />
                <IoStarSharp size={20} />
                <IoStarSharp size={20} />
                <IoStarSharp size={20} />
                <IoStarSharp size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerReview;