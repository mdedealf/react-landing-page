import { FC } from "react";
import Testimoni from "./components/Testimoni";
import { DUMMY_TESTIMONI } from "../../constants/testimoniLists";

const Index: FC = () => {
  return (
    <section id="testimonials" className="flex my-160px mx-80px">
      <div className="font-500px leading-48px basis-30% text-40px">
        Testimonials
      </div>
      <div className="flex flex-col basis-70% gap-y-64px">
        <>
          {DUMMY_TESTIMONI.map((testimoni, index) => (
            <Testimoni key={index} {...testimoni} />
          ))}
        </>
      </div>
    </section>
  );
};

export default Index;
