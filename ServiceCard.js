export default function ServiceCard({ title, description }) {
  return (
    <div className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-3">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}