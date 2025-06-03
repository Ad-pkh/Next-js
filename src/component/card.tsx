
export default function Card({ id, title, description }: { id: string, title: string, description: string }) {
  return (
    <div style={{ flex: "0 1 300px", display: "flex", justifyContent: "center" }}>
      <div className="bg-blue-300 rounded shadow p-6 m-10 w-full">
        <h2 className="text-xl font-bold mb-2">Book ID: {id}</h2>
        <h3 className="text-lg font-semibold mb-1">Book Title: {title}</h3>
        <p className="text-gray-700 mb-4">Description: {description}</p>
      </div>
    </div>
  );
}