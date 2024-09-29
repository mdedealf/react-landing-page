import { FC } from "react";
import { Link } from "react-router-dom";

const PageNotFound: FC = () => {
  return (
    <section>
      <div>404 Not Found</div>
      <Link to="/">Back to Home</Link>
    </section>
  );
};

export default PageNotFound;
