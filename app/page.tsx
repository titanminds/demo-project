"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-white">

      {/* 🔹 Navbar */}
      <nav className="w-full flex justify-between items-center py-5 px-8 bg-white/70 dark:bg-gray-900/70 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">
          Malika
        </h1>
        <ul className="hidden md:flex gap-8 text-sm font-medium">
          <li className="hover:text-blue-600 cursor-pointer">Home</li>
          <li className="hover:text-blue-600 cursor-pointer">About</li>
          <li className="hover:text-blue-600 cursor-pointer">Services</li>
          <li className="hover:text-blue-600 cursor-pointer">Contact</li>
        </ul>
        <button className="md:hidden border px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-600 hover:text-white transition">
          Menu
        </button>
      </nav>

      {/* 🔹 Hero Section */}
      <main className="flex flex-col md:flex-row items-center justify-between flex-grow px-8 md:px-20 py-16 md:py-24 gap-12">
        <div className="flex flex-col items-start text-center md:text-left max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Welcome to{" "}
            <span className="text-blue-600 dark:text-blue-400">Malika</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
            Empowering your business with professional solutions, digital innovation,
            and reliable support to help you grow and succeed.
          </p>
          <div className="flex gap-4 flex-col sm:flex-row">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
              Get Started
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-600 hover:text-white transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center">
          <Image
            src="/assets/images/hero-image.png"
            alt="Professional team"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </main>

      {/* 🔹 Services Section */}
      <section className="bg-white dark:bg-gray-900 py-20 px-8 md:px-20 text-center">
        <h3 className="text-3xl font-bold mb-10">
          Our <span className="text-blue-600">Services</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="p-8 rounded-xl bg-gray-50 dark:bg-gray-800 shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Business Strategy</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              We help companies define clear goals, streamline operations, and achieve measurable growth.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-gray-50 dark:bg-gray-800 shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Digital Solutions</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Build modern websites, apps, and systems to bring your ideas to life with cutting-edge technology.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-gray-50 dark:bg-gray-800 shadow hover:shadow-lg transition">
            <h4 className="text-xl font-semibold mb-3">Consulting & Support</h4>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              Our experts guide you with personalized consulting and ongoing professional support.
            </p>
          </div>
        </div>
      </section>

      {/* 🔹 Footer */}
      <footer className="py-8 text-center border-t border-gray-200 dark:border-gray-700 text-sm">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold">Malika</span>. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
