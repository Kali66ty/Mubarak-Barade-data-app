import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServiceCard from "../components/ServiceCard";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="min-h-screen bg-gray-50 text-gray-800">
        <section className="text-center py-16">
          <h1 className="text-4xl font-bold mb-4">Welcome to Mubarak Barade Data App</h1>
          <p className="text-lg mb-8">
            Buy Cheap Data, Airtime, and Bills Payment Instantly — Fast, Reliable, and Secure.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Get Started
          </a>
        </section>

        <section className="grid md:grid-cols-3 gap-6 px-8 pb-16">
          <ServiceCard
            title="Buy Data"
            description="Instantly purchase affordable data bundles for MTN, Airtel, Glo, and 9mobile."
          />
          <ServiceCard
            title="Airtime Top-Up"
            description="Recharge your line within seconds. Available for all Nigerian networks."
          />
          <ServiceCard
            title="Bill Payments"
            description="Pay for electricity, cable TV, and internet subscriptions easily."
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}