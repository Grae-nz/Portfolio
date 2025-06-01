export default function GetSupport() {
    return (
      <main>
        {/* Page header and image */}
        <div className="bg-black text-white p-2 flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 space-y-4 md:pl-8">
            <h1 className="text-4xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Get Support</h1>
            <h2 className="text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>You're not alone</h2>
            <h3 className="text-base" style={{ fontFamily: 'Open Sans, sans-serif' }}>Whether you’ve been diagnosed with prostate cancer or supporting a loved one, we have resources to help</h3>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 aspect-[3/2] max-w-[700px] mx-auto">
            <img src="/images/getsupport.png" alt="Get support Image" className="w-full h-full object-cover rounded-lg"/>
          </div>
        </div>

        {/* Page Content */}
        <div className="bg-white max-w-6xl mx-auto px-4 py-12 space-y-16" style={{ fontFamily: 'Open Sans, sans-serif' }}>

          {/* Prostate Org NZ Support Groups */}
          <section className="bg-gray-50 text-black p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-[#0070C0]">Prostate.org.nz</h2>
            <h3 className="font-semibold">Services Provided:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Free in-person and remote support services</li>
              <li>Holistic support from a national network of trained volunteers</li>
              <li>Nurse-led 0800 Information Service</li>
              <li>Prost-FIT classes</li>
            </ul>
            <h3 className="font-semibold">Contact Details:</h3>
            <p>Information Service: 0800 66 0800</p>
            <p>Email: <a href="mailto:infoservice@prostate.org.nz" className="text-blue-600 underline">infoservice@prostate.org.nz</a></p>
            <h3 className="font-semibold mt-4">Links:</h3>
            <ul className="list-disc pl-6">
              <li><a href="https://prostate.org.nz/support-groups" className="text-blue-600 underline">Regional Support Lines</a></li>
              <li><a href="https://prostatecancernz.ning.com/" className="text-blue-600 underline">Online Support Forum</a></li>
              <li><a href="https://prostate.org.nz/counselling" className="text-blue-600 underline">Counselling Service</a></li>
              <li><a href="https://prostate.org.nz/welfare-grants-fund" className="text-blue-600 underline">Welfare Grants Fund</a></li>
              <li><a href="https://prostate.org.nz/prost-fit" className="text-blue-600 underline">Prost-FIT</a></li>
            </ul>
          </section>

          {/* Prostate Matters */}
          <section className="bg-gray-50 text-black p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-[#0070C0]">Prostate Matters</h2>
            <h3 className="font-semibold">Services Provided:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Free expert advice about prostate issues from leading Clinical Authorities</li>
              <li>Information on various prostate cancer treatments including theranostics, immunotherapy, and assessing response to treatment</li>
            </ul>
            <h3 className="font-semibold">Contact Details:</h3>
            <p>Email: <a href="mailto:info@prostatematters.co.nz" className="text-blue-600 underline">info@prostatematters.co.nz</a></p>
            <h3 className="font-bold mt-4">Links:</h3>
            <ul className="list-disc pl-6">
              <li><a href="https://prostatematters.co.nz/" className="text-blue-600 underline">Prostate Matters</a></li>
            </ul>
          </section>

          {/* Rainbow Blue */}
          <section className="bg-gray-50 text-black p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-[#0070C0]">Rainbow Blue</h2>
            <h3 className="font-semibold">Services Provided:</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Peer support for the LGBTQ+ community</li>
              <li>Awareness on men’s health, including prostate cancer</li>
              <li>Supportive environment for discussing concerns</li>
            </ul>
            <h3 className="font-semibold">Contact Details:</h3>
            <p>Phone: 0800 66 0800 (Mon - Fri, 10am - 6pm)</p>
            <p>Email: <a href="mailto:rainbowblue@prostate.org.nz" className="text-blue-600 underline">rainbowblue@prostate.org.nz</a></p>
            <h3 className="font-semibold mt-4">Links:</h3>
            <ul className="list-disc pl-6">
              <li><a href="https://prostate.org.nz/rainbow-blue" className="text-blue-600 underline">Rainbow Blue</a></li>
            </ul>
          </section>

        </div>

    </main>
    );
  }