import { useEffect, useState } from "react";
import peopleData from "../../random-people-data.json";

interface Data {
  _id: string;
  name: string;
  dob: string;
  address: {
    street: string;
    town: string;
    postode: string;
  };
  telephone: string;
  pets: string[];
  score: number;
  email: string;
  url: string;
  description: string;
  verified: boolean;
  salary: number;
}

const data = peopleData?.ctRoot || [];

const pageSizeOptions = [10, 20, 30, 40, 50];

const columnHeaders = ["name", "dob", "email", "verified", "salary"];

export default function DataTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [paginatedData, setPaginatedData] = useState<Data[]>([]);

  const totalPages = Math.ceil(data.length / pageSize);

  useEffect(() => {
    const startIndex = (currentPage - 1) * pageSize;
    setPaginatedData(data.slice(startIndex, startIndex + pageSize));
  }, [currentPage, pageSize, data]);

  return (
    <>
      <table>
        <thead>
          <tr>
            {columnHeaders.map((header) => (
              <th key={header}>{header.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row.name}</td>
              <td>{row.dob}</td>
              <td>{row.email}</td>
              <td>{row.verified ? "Yes" : "No"}</td>
              <td>{row.salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div style={{ marginTop: "10px" }}>
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1}>
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>
          Next
        </button>
        <select onChange={(e) => setPageSize(Number(e.target.value))} value={pageSize}>
          {pageSizeOptions.map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </div>
    </>
  );
}
