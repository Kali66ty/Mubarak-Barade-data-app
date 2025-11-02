import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-3xl font-bold mb-4">About Mubarak Barade Data</h1>
        <p className="max-w-2xl text-lg">
          Mubarak Barade Data is a trusted provider of affordable and fast data and airtime services in Nigeria.
          Our mission is to make digital access simple, reliable, and available to everyone.
        </p>
      </main>
      <Footer />
    </>
  );
    }
