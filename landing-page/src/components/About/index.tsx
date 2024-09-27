import { FC } from "react";
import "./styles.css";

const Index: FC = () => {
  return (
    <>
      <section id="about" className="flex ml-80px mt-160px mr-80px mb-160px">
        <div className="basis-30% text-40px font-500px leading-48px">About</div>
        <div className="basis-70% leading-37px font-400px text-27px">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </section>
    </>
  );
};

export default Index;
