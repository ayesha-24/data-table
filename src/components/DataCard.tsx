import closeIcon from "../assets/xmark.svg";

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

interface DataCardProps {
  record: Data | null;
  onClose: () => void;
}

export default function DataCard({ record, onClose }: DataCardProps) {
  if (!record) return null;

  return (
    <div className="data-card-container">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h2>{record.name}</h2>
        <img src={closeIcon} onClick={onClose} alt="Close icon" title="Close" />
      </div>
      <p>
        <strong>DOB: </strong>
        {new Date(record.dob).toLocaleDateString("en-GB", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <p>
        <strong>Email: </strong>
        {record.email}
      </p>
      <p>
        <strong>Verified: </strong>
        {record.verified ? "Yes ✅" : "No ❌"}
      </p>
      <p>
        <strong>Salary: </strong>£{record.salary.toLocaleString()}
      </p>
      <p>
        <strong>Telephone: </strong>
        {record.telephone}
      </p>
      <p>
        <strong>Address: </strong>
        {record.address.street}, {record.address.town}, {record.address.postode}
      </p>
      <p>
        <strong>Pets: </strong>
        {record.pets.length > 0 ? record.pets.join(", ") : "None"}
      </p>
      <p>
        <strong>Score: </strong>
        {record.score}
      </p>
      <p>
        <strong>Website: </strong>
        <a href={record.url} target="_blank" rel="noopener noreferrer">
          {record.url}
        </a>
      </p>
      <p>
        <strong>Description: </strong>
        {record.description}
      </p>
    </div>
  );
}
