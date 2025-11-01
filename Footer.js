export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white text-center py-4 mt-10">
      <p>© {new Date().getFullYear()} Mubarak Barade Data App. All rights reserved.</p>
      <p className="text-sm text-gray-400">Powered by Alrahuz Data API</p>
    </footer>
  );
}