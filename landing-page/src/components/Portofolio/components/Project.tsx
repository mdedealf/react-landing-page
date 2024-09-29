import { FC } from "react";
import LinkButton from "./LinkButton";
import "./styles.css";

const Project: FC<Project> = ({ name, roles, link }) => {
  return (
    <>
      <div className="flex align-middle justify-between">
        <div className="flex flex-col gap-y-18px">
          <div className="text-60px font-400px">{name}</div>
          <div className="flex gap-x-6px text-20px font-400px leading-72px">
            {roles.map((role, index) => (
              <>
                <span key={index}>{role}</span>
                {index < roles.length - 1 && <span>-</span>}
              </>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center p-20px cursor-pointer border border-dark-gray rounded-full h-85px w-85px">
          <LinkButton link={link} />
        </div>
      </div>
    </>
  );
};

export default Project;
