import Section from "./Section";
import Heading from "./Heading";
import Arrow from "../assets/svg/Arrow";
import { benefits } from "../constants";
import { GradientLight } from "./design/Benefits";

import ClipPath from "../assets/svg/ClipPath";
const Benefites = () => {
  return (
    <Section id="features">
      <div className="container relative z-2">
        <Heading
          className="text-center md:max-w-md lg:max-w-2xl"
          title="Chat Smarter, Not Harder With Brainwave"
        />

        <div className="flex flex-wrap justify-center mb-10 gap-9 ">
          {benefits.map((item) => (
            <div
              key={item.id}
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{ backgroundImage: `url(${item.backgroundUrl})` }}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="mb-5 h5">{item.title}</h5>
                <p className="mb-6 body-2 text-n-3">{item.text}</p>

                <div className="flex items-center mt-auto">
                  <img
                    src={item.iconUrl}
                    width={48}
                    height={48}
                    alt={item.title}
                  />
                  <p className="ml-auto text-xs font-bold tracking-wider uppercase frot-code text-n-1">
                    Explore More
                  </p>
                  <Arrow />
                </div>
              </div>

              {item.light && <GradientLight />}

              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              >
                <div className="absolute inset-0 transition-opacity opacity-0 hover:opacity-10">
                  {item.imageUrl && (
                    <img
                      src={item.imageUrl}
                      width={380}
                      height={362}
                      alt={item.title}
                      className="object-cover w-full h-full"
                    />
                  )}
                </div>
              </div>

              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefites;
