import { ABOUT_US, MISSION, VISION, CHOOSE_US } from "../constant/constant";
import { FaBullseye, FaEye, FaThumbsUp } from "react-icons/fa";

export default function About() {
  return (
    <div className="flex flex-col">
      <main className="flex-1 bg-gray-50">
        <section className="w-full py-12 md:py-24 lg:py-10">
          <div className="container px-4 md:px-6">
            <h2 className="text-xl md:text-4xl text-center font-bold text-[#333333] mb-2 md:mb-8">
              About Us
            </h2>
            <div className="flex flex-col lg:flex-row gap-6 w-full">
              <div className="space-y-4 w-full">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Who We Are
                </h2>
                <p className="w-full text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {ABOUT_US}
                </p>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="310"
                alt="About Us"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              <div className="bg-gray-100 rounded-lg p-6 space-y-4 shadow-md">
                <div className="bg-primary text-white rounded-md p-3 flex items-center justify-center">
                  <FaBullseye className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
                <p className="text-gray-600">
                  {MISSION}
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 space-y-4 shadow-md">
                <div className="bg-secondary text-white rounded-md p-3 flex items-center justify-center">
                  <FaEye className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
                <p className="text-gray-600">
                  {VISION}
                </p>
              </div>
              <div className="bg-gray-100 rounded-lg p-6 space-y-4 shadow-md">
                <div className="bg-accent text-white rounded-md p-3 flex items-center justify-center">
                  <FaThumbsUp className="text-2xl" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">Why Choose Us</h3>
                <p className="text-gray-600">
                  {CHOOSE_US}
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

