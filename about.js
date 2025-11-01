import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-700 px-8">
        <h1 className="text-3xl font-bold mb-4">About Us</h1>
        <p className="max-w-xl text-center">
          Mubarak Barade Data App is a reliable platform for instant data, airtime, and bill payment services.
          We aim to make connectivity affordable for everyone with fast delivery and trusted partners.
        </p>
      </div>
      <Footer />
    </>
  );
}