import StudentsTable from "./StudentsTable";

export const revalidate = 60; // optional, revalidate every 60s

export default async function StudentsPage() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const students = await res.json();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Students List</h1>
      <StudentsTable students={students} />
    </div>
  );
}
