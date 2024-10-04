import { FC, useEffect } from "react";
import Header from "../../components/Header/";
import { useAppDispatch, useAppSelector } from "../../hooks/useSelector";
import { fetchSubmittedForm } from "../../features/contactMe/submitFormSlice";

const Index: FC = () => {
  const dispatch = useAppDispatch();
  const { lists, status, error } = useAppSelector((state) => state.contactMe);

  // Fetch submitted form data from API
  useEffect(() => {
    dispatch(fetchSubmittedForm());
  }, [dispatch]);

  if (status === "failed") return <div>{error}</div>;
  if (status === "loading") return <div>Loading</div>;
  return (
    <>
      <Header bg={"bg-transparent"} />
      <div className="flex flex-col items-start m-[80px] gap-[30px] ">
        <h1 className="text-27px font-bold">Submitted Message</h1>
        <table className="table-auto border-collapse border border-slate-500 w-full text-18px">
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Subject</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {lists.map((list, index) => (
              <tr key={index}>
                <td>{list.id}</td>
                <td>{list.name}</td>
                <td>{list.email}</td>
                <td>{list.subject}</td>
                <td>{list.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Index;
