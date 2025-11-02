import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Pricing() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-3xl font-bold mb-4">Our Pricing</h1>
        <p className="text-lg mb-8">Choose a plan that suits your data needs</p>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl">
          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">Basic Plan</h2>
            <p>₦500 for 1GB</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">Standard Plan</h2>
            <p>₦1000 for 3GB</p>
          </div>
          <div className="bg-white shadow-lg p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">Premium Plan</h2>
            <p>₦2000 for 6GB</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
    }
