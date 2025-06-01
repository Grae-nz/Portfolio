export default function ProstateCancerInfo() {
    return (
      <main>
        {/* Page header and image */}
        <div className="bg-black text-white p-2 flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 space-y-4 md:pl-8">
            <h1 className="text-4xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Prostate Cancer Information</h1>
            <h2 className="text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>Understanding the four stages of prostate cancer</h2>
            <h3 className="text-base" style={{ fontFamily: 'Open Sans, sans-serif' }}> Whether you're newly diagnosed or learning more, knowing the stages of prostate cancer can help you feel informed and prepared.</h3>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 aspect-[3/2] max-w-[700px] mx-auto">
            <img src="/images/pcinfo.png" alt="pcinfo Page Header Image" className="w-full h-full object-cover rounded-lg"/>
          </div>
        </div>

        {/* Page content */}
        <div className="bg-white max-w-6xl mx-auto px-4 py-12 space-y-16">

          {/* Page Header */}
          <section className="text-center">
            <h1 className="text-4xl font-bold text-[#0070C0] mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>Stages of Prostate Cancer</h1>
            <h3 className="text-base text-black mt-2" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              Understanding prostate cancer stages helps guide treatment and provides insight into how far the disease has progressed.
            </h3>
            <img src="/images/stages.jpg" alt="Prostate stages image"/>
          </section>

          {/* Stage I */}
          <section className="bg-gray-50 space-y-4 text-lg leading-relaxed text-black p-6 rounded-xl shadow-md" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <h2 className="text-xl font-bold text-[#0070C0]">Stage 1</h2>
            <p><strong>Description:</strong> Cancer is usually slow-growing and confined to one-half of one side of the prostate or less.</p>
            <ul className="list-disc list-inside space-y-2">
              <li>Tumor cannot be felt.</li>
              <li>PSA levels are low.</li>
              <li>Cancer cells are well-differentiated, resembling healthy cells.</li>
            </ul>
          </section>

          {/* Stage 2 */}
          <section className="bg-gray-50 space-y-4 text-lg leading-relaxed text-black p-6 rounded-xl shadow-md" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <h2 className="text-xl font-bold text-[#0070C0]">Stage 2</h2>
            <p><strong>Description:</strong> Cancer is found only in the prostate and may have an increasing risk of growing and spreading.</p>

            {/* Stage 2a */}
            <div>
              <h3 className="font-bold">Stage 2A:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Tumor cannot be felt and involves half of one side of the prostate or less.</li>
                <li>PSA levels are medium.</li>
                <li>Cancer cells are well-differentiated.</li>
              </ul>
            </div>

            {/* Stage 2b */}
            <div>
              <h3 className="font-bold">Stage 2B:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Tumor is found only inside the prostate and may be large enough to be felt during DRE.</li>
                <li>PSA level is medium.</li>
                <li>Cancer cells are moderately differentiated.</li>
              </ul>
            </div>

            {/* Stage 2c */}
            <div>
              <h3 className="font-bold">Stage 2C:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Tumor is found only inside the prostate and may be large enough to be felt during DRE.</li>
                <li>PSA level is medium.</li>
                <li>Cancer cells may be moderately or poorly differentiated.</li>
              </ul>
            </div>
          </section>

          {/* Stage 3 */}
          <section className="bg-gray-50 space-y-4 text-lg leading-relaxed text-black p-6 rounded-xl shadow-md" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <h2 className="text-xl font-bold text-[#0070C0]">Stage 3</h2>
            <p><strong>Description:</strong> Cancer is locally advanced, likely to grow and spread.</p>

            {/* Stage 3a */}
            <div>
              <h3 className="font-bold">Stage 3A:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Cancer has spread beyond the outer layer of the prostate into nearby tissues.</li>
                <li>PSA level is high.</li>
              </ul>
            </div>

            {/* Stage 3b */}
            <div>
              <h3 className="font-bold">Stage 3B:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Tumor has grown outside the prostate gland and may have invaded nearby structures.</li>
              </ul>
            </div>

            {/* Stage 3c */}
            <div>
              <h3 className="font-bold">Stage 3C:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Cancer cells are poorly differentiated.</li>
              </ul>
            </div>
          </section>

          {/* Stage 4 */}
          <section className="bg-gray-50 space-y-4 text-lg leading-relaxed text-black p-6 rounded-xl shadow-md" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <h2 className="text-xl font-bold text-[#0070C0]">Stage 4</h2>
            <p><strong>Description:</strong> Cancer has spread beyond the prostate.</p>

            {/* Stage 4a */}
            <div>
              <h3 className="font-bold">Stage 4A:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Cancer has spread to regional lymph nodes.</li>
              </ul>
            </div>

            {/* Stage 4b */}
            <div>
              <h3 className="font-bold">Stage 4B:</h3>
              <ul className="list-disc list-inside space-y-2">
                <li>Cancer has spread to distant lymph nodes, bones, or other parts of the body.</li>
              </ul>
            </div>
          </section>

          {/* Recurrent Prostate Cancer */}
          <section className="bg-gray-50 space-y-4 text-lg leading-relaxed text-black p-6 rounded-xl shadow-md" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            <h2 className="text-xl font-bold text-[#0070C0]">Recurrent Prostate Cancer</h2>
            <p><strong>Description:</strong> Cancer that has returned after treatment, either in the prostate area or other parts of the body.</p>
            <p><strong>Process:</strong> Another round of tests similar to the original diagnosis is conducted to determine the extent of the recurrence.</p>
          </section>

          {/* Consult */}
          <p className="italic mt-6 text-gray-700 text-base text-center max-w-3xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            For more detailed information and personalized advice, please consult with a health practitioner.
          </p>

          {/* Links */}
          <section className="mt-12">
            <h2 className="text-2xl text-[#0070C0] font-bold mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}>Want to Learn More?</h2>
            <ul className="list-disc list-inside text-blue-600 underline text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              <li><a href="#" target="_blank">Staging Prostate Cancer – Prostate Matters (PDF)</a></li>
            </ul>
          </section>

        </div>

    </main>
    );
  }