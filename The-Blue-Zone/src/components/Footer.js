import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#0070C0] p-4 flex flex-col shadow-xl text-white font-bold font-[\'Open Sans\',sans-serif]">
      <div className="flex flex-col md:flex-row justify-between items-start space-y-6 md:space-y-0 md:space-x-8">
        <div className="flex flex-col md:flex-row md:items-start md:space-x-8">
  
          {/* Logo */}
          <div>
            <img src="/images/TBZLogo.png" alt="TBZ Logo" className="h-36 w-36 object-contain" />
          </div>

          {/* Nav links - now horizontal */}
          <ul className="flex flex-col md:flex-row md:items-start md:space-x-8 space-y-6 md:space-y-0">

            {/* Home */}
            <li>
              <Link href="/" className="text-xl underline hover:bg-[#00B0F0] px-3 py-1 rounded block">Home</Link>
            </li>

            {/* Information & Support */}
            <li>
              <Link href="/information-support" className="text-xl underline hover:bg-[#00B0F0] px-3 py-1 rounded block">Information & Support</Link>
              <ul className="pl-4 space-y-1 mt-1">
                <li><Link href="/information-support/prostate-cancer-info" className="hover:text-[#00B0F0]">Prostate Cancer Information</Link></li>
                <li><Link href="/information-support/risks-symptoms" className="hover:text-[#00B0F0]">Risks & Symptoms</Link></li>
                <li><Link href="/information-support/prostate-tests" className="hover:text-[#00B0F0]">Prostate Tests</Link></li>
                <li><Link href="/information-support/prevention" className="hover:text-[#00B0F0]">Prevention</Link></li>
                <li><Link href="/information-support/just-diagnosed" className="hover:text-[#00B0F0]">Just Diagnosed</Link></li>
                <li><Link href="/information-support/get-support" className="hover:text-[#00B0F0]">Get Support</Link></li>
              </ul>
            </li>

            {/* Learner Zone */}
            <li>
              <Link href="/learner-zone" className="text-xl underline hover:bg-[#00B0F0] px-3 py-1 rounded block">Learner Zone</Link>
              <ul className="pl-4 space-y-1 mt-1">
                <li><Link href="/learner-zone/beginners-guide" className="hover:text-[#00B0F0]">Beginners Guide</Link></li>
                <li><Link href="/learner-zone/interactive-zone" className="hover:text-[#00B0F0]">Interactive Zone</Link></li>
              </ul>
            </li>

            {/* News & Stories */}
            <li>
              <Link href="/news-stories" className="text-xl underline hover:bg-[#00B0F0] px-3 py-1 rounded block">News & Stories</Link>
              <ul className="pl-4 space-y-1 mt-1">
                <li><Link href="/news-stories?category=Latest%20News" className="hover:text-[#00B0F0]">Latest News</Link></li>
                <li><Link href="/news-stories?category=Events" className="hover:text-[#00B0F0]">Events</Link></li>
                <li><Link href="/news-stories?category=Real%20Stories" className="hover:text-[#00B0F0]">Real Stories</Link></li>
              </ul>
            </li>

            {/* research */}
            <li>
              <Link href="/research" className="text-xl underline hover:bg-[#00B0F0] px-3 py-1 rounded block">Research</Link>
              <ul className="pl-4 space-y-1 mt-1">
                <li><Link href="/research?category=Clinical%20Trials" className="hover:text-[#00B0F0]">Clinical Trials</Link></li>
                <li><Link href="/research?category=Latest%20Findings" className="hover:text-[#00B0F0]">Latest Findings</Link></li>
              </ul>
            </li>

            {/* About us */}
            <li><Link href="/about-us" className="text-xl underline hover:bg-[#00B0F0] px-3 py-1 rounded block">About Us</Link></li>
          </ul>
        </div>
        
        {/* Contact Us */}
        <div className="flex flex-col space-y-2 md:ml-auto pr-4 md:pr-8">
          <p className="text-2xl font-bold">Contact Us</p>
          <p>0800placeholder</p>
          <p><a href="mailto:info@thebluezone.org.nz" className="underline hover:text-[#00B0F0]">info@thebluezone.org.nz</a></p>
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