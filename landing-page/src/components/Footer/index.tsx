import { FC } from "react";
import AuthorImage from "../../assets/images/author-profile.png";

const Index: FC = () => {
  return (
    <section
      id="footer"
      className="flex flex-col items-center h-[440px] bg-dark-black text-off-white pt-80px px-80px"
    >
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
        <a
          className="bg-off-white text-dark-black px-[48px] py-[24px] rounded-[170px] border-[1px] border-off-white text-18px font-500px leading-[21px]"
          href="#"
        >
          Get in touch
        </a>
      </div>
      <div className="flex w-full pt-[138px] justify-between">
        <div>
          <span>Build with 💖 by Brightscout & Ayush </span>
        </div>
        <div className="flex gap-32px text-light-gray  font-400px text-18px leading-28px">
          <a className="hover:text-off-white" href="#">
            LinkedIn
          </a>
          <a className="hover:text-off-white" href="#">
            X
          </a>
          <a className="hover:text-off-white" href="#">
            Instagram
          </a>
          <a className="hover:text-off-white" href="#">
            Webflow
          </a>
        </div>
      </div>
    </section>
  );
};

export default Index;
