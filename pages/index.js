import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  const networks = [
    { name: "MTN", color: "bg-yellow-400", price: "₦300 / 1GB" },
    { name: "Airtel", color: "bg-red-500", price: "₦280 / 1GB" },
    { name: "Glo", color: "bg-green-500", price: "₦270 / 1GB" },
    { name: "9mobile", color: "bg-emerald-500", price: "₦290 / 1GB" },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-grow flex flex-col items-center justify-center p-6">
        <h1 className="text-3xl font-bold mb-2 text-center">
          Welcome to Mubarak Barade Data
        </h1>
        <p className="text-gray-600 mb-8 text-center">
          Your reliable platform for buying data and airtime.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-3xl">
          {networks.map((net) => (
            <div
              key={net.name}
              className={`rounded-2xl p-6 text-white text-center shadow-lg ${net.color}`}
            >
              <h2 className="text-xl font-bold">{net.name}</h2>
              <p className="mt-2 text-lg">{net.price}</p>
              <button className="mt-4 bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-200">
                Buy Now
              </button>
            </div>
          ))}
        </div>

        <section
          id="contact"
          className="mt-16 bg-gray-100 p-8 rounded-xl shadow max-w-lg w-full text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
          <p>Email: mubarakbaradedata@gmail.com</p>
          <p>Phone: +234 80x xxx xxxx</p>
          <p className="mt-2 text-gray-500">
            We respond within 24 hours. Your satisfaction is our priority.
          </p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
