import { FC } from "react";

const Testimoni: FC<Testimoni> = ({ name, image, role, description }) => {
  return (
    <div className="flex flex-col gap-y-28px">
      <p className="text-27px leading-37px font-400px">{description}</p>
      <div className="flex items-center justify-start gap-12px">
        <img
          className="w-64px h-64px object-cover"
          src={image}
          alt="Testiomoni img 1"
        />
        <div className="flex flex-col">
          <span className="text-18px font-500px leading-28px">{name}</span>
          <span className="text-14px">{role}</span>
        </div>
      </div>
    </div>
  );
};

export default Testimoni;
