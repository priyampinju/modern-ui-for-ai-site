import { smallSphere, stars } from "../assets";
import Heading from "./Heading";
import PricingList from "./PricingList";
import Section from "./Section";
import { LeftLine, RightLine } from "./design/Pricing";

const Pricing = (crosses) => {
  return (
    <Section crosses>
      <div className="overflow-hidden">
        <div className="container relative z-2">
          <div className="hidden relative justify-center mb-[6.5rem] lg:flex">
            <img
              src={smallSphere}
              className="relative z-1"
              width={255}
              height={255}
              alt="sphere"
            />

            <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <img src={stars} alt="stars" width={950} height={400} />
            </div>
          </div>

          <Heading
            tag="Get started with Brainwave"
            title="Pay once, use forever."
          />

          <div className="relative">
            <PricingList />
            <LeftLine />
            <RightLine />
          </div>

          <div className="flex justify-center mt-10">
            <a
              href="/pricing"
              className="text-xs font-code font-bold tracking-wide uppercase border-b"
            >
              See the full detail
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Pricing;
