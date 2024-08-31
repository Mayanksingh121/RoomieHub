import { ABOUT_US, VISION, MISSION, CHOOSE_US } from "../constant/constant";

export default function About() {
  return (
    <section className="bg-gray-100" id="about-us">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-montserrat font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg font-roboto"> {ABOUT_US}</p>
            <div className="mt-8">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 font-medium font-roboto"
              >
                Learn more about us
                <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
