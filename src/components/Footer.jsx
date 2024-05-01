import { socials } from "../constants";
import Section from "./Section";

const Footer = ({ crosses }) => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div className="flex container justify-center sm:justify-between ">
        <h2>
          Developed with ❤ by{" "}
          <a href="https://priyampinju.vercel.app"> Pinju</a>
        </h2>
        <p className="caption text-n-4 lg:block">
          ©{new Date().getFullYear()}. All rights reserved
        </p>

        <ul className="flex gap-5 flex-wrap">
          {socials.map((item) => (
            <a
              href="{item.url}"
              key={item.id}
              target="_blank"
              className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
            >
              <img src={item.iconUrl} alt="{item.title}" />
            </a>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
