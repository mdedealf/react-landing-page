import { FC, useEffect } from "react";
import Header from "../../components/Header/";
import { useAppDispatch, useAppSelector } from "../../hooks/useSelector";
import { fetchSubmittedForm } from "../../features/contactMe/submitFormSlice";
import { TABLE_HEADER } from "../../constants/tableHeader";
import TableData from "../../components/Table/TableData";
import RequestMessage from "../../components/RequestMessage";

const Index: FC = () => {
  const dispatch = useAppDispatch();
  const { lists, status, error } = useAppSelector((state) => state.contactMe);

  // Fetch submitted form data from API
  useEffect(() => {
    dispatch(fetchSubmittedForm());
  }, [dispatch]);

  return (
    <>
      <Header bg={"bg-light-gray"} />
      {status === "loading" && <RequestMessage message="Loading..." />}
      {status === "failed" && <RequestMessage message={error} />}
      {status === "succeeded" && (
        <div className="flex flex-col items-start m-[80px] gap-[30px]">
          <h1 className="text-18px md:text-27px font-bold">
            Submitted Message Table
          </h1>
          <table className="table-auto border-separate border-spacing-2 border border-slate-500 w-full text-18px">
            <thead>
              <tr className="bg-gray-200 text-gray-700">
                {TABLE_HEADER.map((title, index) => (
                  <th className="py-2 px-4 border-b text-left" key={index}>
                    {title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {lists.map((list, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <TableData {...list} />
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default Index;
