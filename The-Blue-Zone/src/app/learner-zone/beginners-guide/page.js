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

        {/* Educational sections */}
        <div
          className="max-w-4xl mx-auto space-y-12 px-4 pb-16"
          style={{ fontFamily: 'Open Sans, sans-serif' }}
        >
          <section>
            <h2 className="text-2xl text-[#0070C0] font-bold mb-4">What is the Prostate?</h2>
            <img
              src="/images/prostategland.png"
              alt="Prostate location"
              className="w-full max-w-md mx-auto mb-4 rounded-lg"
            />
            <p className="text-base leading-relaxed font-bold text-center">
              The prostate is a small gland about the size of a walnut, located just below the bladder in men.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#0070C0] font-bold mb-4">What does the Prostate Do?</h2>
            <p className="text-base leading-relaxed font-bold">
              It plays a role in producing fluid that makes up part of semen.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#0070C0] font-bold mb-4">What is Prostate Cancer?</h2>
            <p className="text-base leading-relaxed font-bold">
              Prostate cancer is when cells in the prostate grow uncontrollably. It is one of the most common types of cancer in men, but many cases grow slowly and are treatable.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#0070C0] font-bold mb-4">Signs and Symptoms</h2>
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-6">
              {[
                { label: 'Trouble urinating', image: '/images/troubleurinating.png' },
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
          </section>

          <section>
            <h2 className="text-2xl text-[#0070C0] font-bold mb-4">Causes and Risks</h2>
            <p className="text-base leading-relaxed font-bold">
              Age, genetics, ethnicity, and diet can influence your risk. African descent and family history of prostate cancer increase the risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#0070C0] font-bold mb-4">How is it Diagnosed?</h2>
            <p className="text-base leading-relaxed font-bold">
              Diagnosis may involve a PSA blood test, digital rectal exam (DRE), imaging, and sometimes a biopsy to confirm cancer.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#0070C0] font-bold mb-4">Staging and Grades</h2>
            <p className="text-base leading-relaxed font-bold">
              Staging helps determine how far the cancer has spread. The Gleason score indicates how aggressive the cancer might be.
            </p>
          </section>

          <section>
            <h2 className="text-2xl text-[#0070C0] font-bold mb-4">Treatment Options</h2>
            <p className="text-base leading-relaxed font-bold">
              Treatment can include active surveillance, surgery, radiation therapy, hormone therapy, or chemotherapy—depending on the stage and individual health.
            </p>
          </section>
        </div>
    </main>
    );
  }