import { FC } from "react";
import ContactForm from "./components/ContactForm";
import AuthorImage from "../../assets/images/author-profile-large.png";
import { Link } from "react-router-dom";
import { CONTACT_LINKS } from "../../constants/contacLinks";

const Contact: FC = () => {
  return (
    <section className="flex items-start justify-evenly mx-80px my-160px gap-[120px]">
      <div className="flex flex-col gap-[56px]">
        <img
          className="min-h-[300px] min-w-300px] object-cover"
          src={AuthorImage}
          alt="Author image"
        />
        <div className="flex flex-col gap-40px">
          <div className="flex flex-col gap-[8px]">
            <span className="text-18px font-400px leading-28px text-dark-gray">
              Contact Details
            </span>
            <div className="flex flex-col text-27px font-400px leading-37px text-dark-black gap-6px">
              <span>ayush.barnwal@brightscout.com</span>
              <span>+91 8651447521</span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[8px]">
            <span className="text-18px font-400px leading-28px text-dark-gray">
              Socials
            </span>
            <div className="flex flex-col items-start text-27px font-400px leading-37px text-dark-black gap-6px">
              <>
                {CONTACT_LINKS.map((link, index) => (
                  <Link
                    className="hover:text-light-gray transition-all"
                    to={link.link}
                    key={index}
                  >
                    {link.label}
                  </Link>
                ))}
              </>
            </div>
          </div>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default Contact;
