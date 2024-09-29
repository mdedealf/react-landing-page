import { FC } from "react";
import { Link } from "react-router-dom";

const PageNotFound: FC = () => {
  return (
    <section className="flex flex-col items-center justify-center h-screen w-screen gap-32px text-60px ">
      <div>404 Page Not Found</div>
      <Link className="hover:text-light-gray" to="/">
        Back to Home
      </Link>
    </section>
  );
};

export default PageNotFound;
