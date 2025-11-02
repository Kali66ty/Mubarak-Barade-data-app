import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-100 flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg mb-4">We’d love to hear from you!</p>
        <p>Email: <a href="mailto:mubarakbaradedata@gmail.com" className="text-blue-600">mubarakbaradedata@gmail.com</a></p>
        <p>WhatsApp: <a href="https://wa.me/234XXXXXXXXXX" className="text-blue-600">Chat with us</a></p>
      </main>
      <Footer />
    </>
  );
}
