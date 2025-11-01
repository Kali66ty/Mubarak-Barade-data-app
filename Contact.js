import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-gray-700 px-8">
        <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
        <p>Email: support@mubarakbaradedata.com</p>
        <p>WhatsApp: +234 801 234 5678</p>
      </div>
      <Footer />
    </>
  );
}