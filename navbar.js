export default function Navbar() {
  return (
    <nav className="bg-green-700 text-white py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold">MB Data</h1>
      <div className="space-x-4">
        <a href="/" className="hover:text-yellow-300">Home</a>
        <a href="/about" className="hover:text-yellow-300">About</a>
        <a href="/contact" className="hover:text-yellow-300">Contact</a>
      </div>
    </nav>
  );
}