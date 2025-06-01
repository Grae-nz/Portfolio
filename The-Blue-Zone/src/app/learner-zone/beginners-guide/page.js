export default function BeginnersGuide() {
    return (
      <main>
        {/* Page header and image */}
        <div className="bg-black text-white p-2 flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 space-y-4 md:pl-8">
            <h1 className="text-4xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Beginner's Guide</h1>
            <h2 className="text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>Understanding prostate cancer, one step at a time</h2>
            <h3 className="text-base" style={{ fontFamily: 'Open Sans, sans-serif' }}>Learn the basics about prostate health, signs and symptoms.</h3>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 aspect-[3/2] max-w-[700px] mx-auto">
            <img src="/images/beginnersguide.png" alt="News Stories Page Header Image" className="w-full h-full object-cover rounded-lg"/>
          </div>
        </div>

        {/* Main content */}
        <div className="bg-white max-w-6xl mx-auto px-4 py-12 space-y-16" style={{ fontFamily: 'Open Sans, sans-serif' }}>

          {/* What is the Prostate? */}
          <div className="bg-gray-50 text-black flex flex-col lg:flex-row gap-8 items-start p-6 rounded-xl shadow-md">
            <section className="space-y-4 text-lg leading-relaxed lg:w-2/3">
              <h2 className="text-xl font-bold text-[#0070C0]">What is the Prostate?</h2>
              <p>The prostate is a small gland about the size of a walnut, located just below the bladder in men.</p>
            </section>
            <div className="lg:w-1/3">
              <img src="/images/prostategland.png" alt="Prostate location" className="w-full rounded-md" />
            </div>
          </div>

          {/* What does the Prostate Do? */}
          <div className="bg-gray-50 text-black flex flex-col lg:flex-row gap-8 items-start p-6 rounded-xl shadow-md">
            <section className="space-y-4 text-lg leading-relaxed lg:w-2/3">
              <h2 className="text-xl font-bold text-[#0070C0]">What does the Prostate Do?</h2>
              <p>It plays a role in producing fluid that makes up part of semen.</p>
            </section>
            <div className="lg:w-1/3">
              <img src="/images/prostatedo.png" alt="Prostate function" className="w-full rounded-md" />
            </div>
          </div>

          {/* What is Prostate Cancer? */}
          <div className="bg-gray-50 text-black flex flex-col lg:flex-row gap-8 items-start p-6 rounded-xl shadow-md">
            <section className="space-y-4 text-lg leading-relaxed lg:w-2/3">
              <h2 className="text-xl font-bold text-[#0070C0]">What is Prostate Cancer?</h2>
              <p>Prostate cancer is when cells in the prostate grow uncontrollably. It is one of the most common types of cancer in men, but many cases grow slowly and are treatable.</p>
            </section>
            <div className="lg:w-1/3">
              <img src="/images/noimage.png" alt="Prostate cancer" className="w-full rounded-md" />
            </div>
          </div>

          {/* Signs and Symptoms */}
          <div className="bg-gray-50 text-black space-y-4 p-6 rounded-xl shadow-md">
            <h2 className="text-xl font-bold text-[#0070C0]">Signs and Symptoms</h2>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
              {[{
                label: 'Trouble urinating', image: '/images/troubleurinating.png' },
                { label: 'Frequent urination at night', image: '/images/frequenturination.png' },
                { label: 'Blood in urine or semen', image: '/images/bloodurine.png' },
                { label: 'Pain or burning during urination', image: '/images/painurine.png' },
                { label: 'Erectile dysfunction', image: '/images/dysfunction.png' },
              ].map(({ label, image }, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img src={image} alt={label} className="w-40 h-40 object-contain rounded-lg mb-1" />
                  <p className="text-base font-bold">{label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Causes and Risks */}
          <div className="bg-gray-50 text-black flex flex-col lg:flex-row gap-8 items-start p-6 rounded-xl shadow-md">
            <section className="space-y-4 text-lg leading-relaxed lg:w-2/3">
              <h2 className="text-xl font-bold text-[#0070C0]">Causes and Risks</h2>
              <p>Age, genetics, ethnicity, and diet can influence your risk. African descent and family history of prostate cancer increase the risk.</p>
            </section>
            <div className="lg:w-1/3">
              <img src="/images/noimage.png" alt="Causes and risks" className="w-full rounded-md shadow-md" />
            </div>
          </div>

          {/* How is it Diagnosed? */}
          <div className="bg-gray-50 text-black flex flex-col lg:flex-row gap-8 items-start p-6 rounded-xl shadow-md">
            <section className="space-y-4 text-lg leading-relaxed lg:w-2/3">
              <h2 className="text-xl font-bold text-[#0070C0]">How is it Diagnosed?</h2>
              <p>Diagnosis may involve a PSA blood test, digital rectal exam (DRE), imaging, and sometimes a biopsy to confirm cancer.</p>
            </section>
            <div className="lg:w-1/3">
              <img src="/images/psatest.png" alt="Diagnosis" className="w-full rounded-md shadow-md" />
            </div>
          </div>

          {/* Staging and Grades */}
          <div className="bg-gray-50 text-black flex flex-col lg:flex-row gap-8 items-start p-6 rounded-xl shadow-md">
            <section className="space-y-4 text-lg leading-relaxed lg:w-2/3">
              <h2 className="text-xl font-bold text-[#0070C0]">Staging and Grades</h2>
              <p>Staging helps determine how far the cancer has spread. The Gleason score indicates how aggressive the cancer might be.</p>
            </section>
            <div className="lg:w-1/3">
              <img src="/images/noimage.png" alt="Staging and grades" className="w-full rounded-md shadow-md" />
            </div>
          </div>

          {/* Treatment Options */}
          <div className="bg-gray-50 text-black flex flex-col lg:flex-row gap-8 items-start p-6 rounded-xl shadow-md">
            <section className="space-y-4 text-lg leading-relaxed lg:w-2/3">
              <h2 className="text-xl font-bold text-[#0070C0]">Treatment Options</h2>
              <p>Treatment can include active surveillance, surgery, radiation therapy, hormone therapy, or chemotherapy depending on the stage and individual health.</p>
            </section>
            <div className="lg:w-1/3">
              <img src="/images/noimage.png" alt="Treatment options" className="w-full rounded-md shadow-md" />
            </div>
          </div>

        </div>
    </main>
    );
  }