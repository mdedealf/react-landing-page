import { FC } from "react";
import AuthorImage from "../../../assets/images/author-profile.png";
import { NavLink } from "react-router-dom";

const Contact: FC = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex flex-col items-start justify-start gap-12px">
        <span className="text-60px leading-72px font-500px">
          Have something in mind?
        </span>
        <div className="flex items-center justify-start gap-12px">
          <img
            className="w-[80px] h-[80px] object-cover"
            src={AuthorImage}
            alt="Author image"
          />
          <span className="text-60px leading-72px font-500px">
            let’s build it together.
          </span>
        </div>
      </div>
      <NavLink
        className="bg-off-white text-dark-black px-[48px] py-[24px] rounded-[170px] border-[1px] border-off-white text-18px font-500px leading-[21px]"
        to="contact-us"
      >
        Get in touch
      </NavLink>
    </div>
  );
};

export default Contact;
