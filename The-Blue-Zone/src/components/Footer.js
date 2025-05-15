"use client";
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0070C0] p-4 flex flex-col shadow-xl text-white font-bold font-[\'Open Sans\',sans-serif]">
      <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
          
          {/* Logo and nav links */}
          <div>
            <img src="/images/TBZLogo.png" alt="TBZ Logo" className="h-36 w-36 object-contain" />
          </div>
          <ul className="flex flex-col space-y-4">
            <li><a href="/" className="hover:bg-[#00B0F0]">Home</a></li>
            <li>
              <Link href="/information-support" className="hover:bg-[#00B0F0]">Information & Support</Link>
            </li>
            <li>
              <Link href="/research" className="hover:bg-[#00B0F0]">Research</Link>
              </li>
            <li>
              <Link href="/about-us" className="hover:bg-[#00B0F0]">About Us</Link>
            </li>
          </ul>
        </div>
        
        {/* Contact Us */}
        <div className="flex flex-col space-y-2 md:ml-auto pr-4 md:pr-8">
          <p className="text-2xl font-bold">Contact Us</p>
          <p>0800placeholder</p>
          <p><a href="mailto:info@thebluezone.org.nz" className="underline">info@thebluezone.org.nz</a></p>
          <div className="flex space-x-4 mt-2 text-xl">
            <a href="https://facebook.com" target="_blank" className="hover:text-[#00B0F0]">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://instagram.com" target="_blank" className="hover:text-[#00B0F0]">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" className="hover:text-[#00B0F0]">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      
      {/* Copyright info */}
      <div className="flex flex-col md:flex-row justify-between items-center py-4 mt-8">
        <p className="text-sm">© 2025 The Blue Zone NZ. All rights reserved.</p>
      </div>
    </footer>
  );
}