export default function ProstateTests() {
    return (
      <main>
        {/* Page header and image */}
        <div className="bg-black text-white p-2 flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 space-y-4 md:pl-8">
            <h1 className="text-4xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Prostate Tests</h1>
            <h2 className="text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>What Tests Are Available?</h2>
            <h3 className="text-base" style={{ fontFamily: 'Open Sans, sans-serif' }}>A range of tests are used to detect changes in the prostate and identify cancer early. Understanding how each test works can help you have more informed discussions with your healthcare provider.</h3>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 aspect-[3/2] max-w-[700px] mx-auto">
            <img src="/images/prostatetests.png" alt="Home Page Header Image" className="w-full h-full object-cover rounded-lg"/>
          </div>
        </div>

        {/* Page content */}
        <div className="bg-white max-w-6xl mx-auto px-4 py-12 space-y-16">

          {/* PSA Test */}
          <section className="bg-gray-50 text-black flex flex-col lg:flex-row items-start gap-8 p-6 rounded-xl shadow-md">
            <div className="lg:w-2/3">
              <h2 className="text-xl font-semibold text-[#0070C0]">PSA Test (Prostate-Specific Antigen)</h2>
              <p className="text-lg leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                A blood test that measures the level of PSA, a protein produced by the prostate gland. Elevated levels may indicate prostate cancer, but can also be caused by other conditions.
              </p>
            </div>
            <div className="lg:w-1/3">
              <img src="/images/psatest.png" alt="PSA Test" className="w-full rounded-xl shadow-md" />
            </div>
          </section>

          {/* DRE Test */}
          <section className="bg-gray-50 text-black flex flex-col lg:flex-row items-start gap-8 p-6 rounded-xl shadow-md">
            <div className="lg:w-2/3">
              <h2 className="text-xl font-semibold text-[#0070C0]">DRE (Digital Rectal Examination)</h2>
              <p className="text-lg leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                A physical examination where a doctor inserts a gloved, lubricated finger into the rectum to feel the prostate for abnormalities in size, shape, or texture. It can help detect advanced cancers but is less effective for early-stage cancers.
              </p>
            </div>
            <div className="lg:w-1/3">
              <img src="/images/dretest.png" alt="DRE Exam" className="w-full rounded-xl shadow-md" />
            </div>
          </section>

          {/* Biopsy */}
          <section className="bg-gray-50 text-black flex flex-col lg:flex-row items-start gap-8 p-6 rounded-xl shadow-md">
            <div className="lg:w-2/3">
              <h2 className="text-xl font-semibold text-[#0070C0]">Prostate Biopsy</h2>
              <p className="text-lg leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                A procedure where small samples of prostate tissue are removed and examined under a microscope to detect cancer cells. It is usually guided by ultrasound and sometimes MRI.
              </p>
            </div>
            <div className="lg:w-1/3">
              <img src="/images/biopsytest.png" alt="Prostate Biopsy" className="w-full rounded-xl shadow-md" />
            </div>
          </section>

          {/* MRI */}
          <section className="bg-gray-50 text-black flex flex-col lg:flex-row items-start gap-8 p-6 rounded-xl shadow-md">
            <div className="lg:w-2/3">
              <h2 className="text-xl font-semibold text-[#0070C0]">MRI (Magnetic Resonance Imaging)</h2>
              <p className="text-lg leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                An imaging test that provides detailed pictures of the prostate and surrounding tissues. It is often used in conjunction with a biopsy to guide the procedure and assess the extent of cancer.
              </p>
            </div>
            <div className="lg:w-1/3">
              <img src="/images/mritest.png" alt="MRI" className="w-full rounded-xl shadow-md" />
            </div>
          </section>

          {/* Ultrasound */}
          <section className="bg-gray-50 text-black flex flex-col lg:flex-row items-start gap-8 p-6 rounded-xl shadow-md">
            <div className="lg:w-2/3">
              <h2 className="text-xl font-semibold text-[#0070C0]">Ultrasound</h2>
              <p className="text-lg leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                An imaging test that uses sound waves to create a picture of the prostate. It is commonly used to guide a biopsy.
              </p>
            </div>
            <div className="lg:w-1/3">
              <img src="/images/ultrasoundtest.png" alt="Ultrasound" className="w-full rounded-xl shadow-md" />
            </div>
          </section>

          {/* Consult */}
          <p className="italic mt-6 text-gray-700 text-base text-center max-w-3xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            These tests are used in combination to diagnose and assess the risk of prostate cancer. It is important to discuss with a healthcare practitioner to determine the most appropriate tests based on individual risk factors and symptoms.
          </p>

          {/* Links */}
          <section className="mt-12">
            <h2 className="text-2xl text-[#0070C0] font-bold mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}> Want to Learn More?</h2>
            <ul className="list-disc list-inside text-blue-600 underline text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              <li><a href="#" target="_blank">Prostate Org NZ – Getting Tested (PDF)</a></li>
              <li><a href="#" target="_blank">BPAC NZ – Prostate Testing (PDF)</a></li>
            </ul>
          </section>
        </div>
    </main>
    );
  }