export default function RisksAndSymptoms() {
    return (
      <main>
        {/* Page header and image */}
        <div className="bg-black text-white p-2 flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 space-y-4 md:pl-8">
            <h1 className="text-4xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Risks & Symptoms</h1>
            <h2 className="text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>Understanding Prostate cancer</h2>
            <h3 className="text-base" style={{ fontFamily: 'Open Sans, sans-serif' }}> Learn about common symptoms and the risk factors that may increase the chances of developing prostate cancer.</h3>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 aspect-[3/2] max-w-[700px] mx-auto">
            <img src="/images/riskssymptons.png" alt="risks-symptons Image" className="w-full h-full object-cover rounded-lg"/>
          </div>
        </div>

        {/* Page content */}
        <div className="bg-white max-w-6xl mx-auto px-4 py-12 space-y-16">

          {/* Risks section */}
          <section className="bg-gray-50 text-black flex flex-col lg:flex-row items-start gap-8 p-6 rounded-xl shadow-md">
            <div className="lg:w-2/3">
              <h1 className="text-4xl text-[#0070C0] font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}> Risks of Prostate Cancer</h1>
              <ul className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                <li><strong>Family History:</strong> Men with a first-degree male relative who had prostate cancer are twice as likely to develop the disease. The risk increases if two or more first-degree relatives were diagnosed under the age of 65 or if they carry the BRAC2 gene.</li>
                <li><strong>Ethnicity:</strong> Māori men have a slightly lower incidence of prostate cancer but a higher death rate compared to other men.</li>
                <li><strong>Age:</strong> The likelihood of developing prostate cancer increases with age.</li>
                <li><strong>Genetic Factors:</strong> Carrying certain genes like BRAC2 can increase the risk.</li>
                <li><strong>Environmental and Lifestyle Factors:</strong> Maintaining a healthy weight, eating a balanced diet, and being physically active can lower the risk of health problems, although no one knows how to prevent prostate cancer entirely.</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img src="/images/noimage.png" alt="Risks visual" className="w-full rounded-xl shadow-md" />
            </div>
          </section>

          {/* Symptoms section */}
          <section className="bg-gray-50 text-black flex flex-col lg:flex-row items-start gap-8 p-6 rounded-xl shadow-md">
            <div className="lg:w-2/3">
              <h1 className="text-4xl text-[#0070C0] font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}> Symptoms of Prostate Cancer</h1>
              <ul className="space-y-4 text-lg leading-relaxed" style={{ fontFamily: 'Open Sans, sans-serif' }}>
                <li><strong>Frequent or Sudden Need to Urinate:</strong> Especially at night.</li>
                <li><strong>Difficulty Urinating:</strong> Trouble starting or not being able to urinate when the feeling is there.</li>
                <li><strong>Discomfort When Urinating:</strong> Pain or discomfort during urination.</li>
                <li><strong>Blood in Urine or Semen:</strong> This should never be ignored.</li>
                <li><strong>Pain in Lower Back, Upper Thighs, or Hips:</strong> Persistent pain in these areas.</li>
                <li><strong>Bone Pain:</strong> Pain in the bones can be a symptom of advanced prostate cancer.</li>
                <li><strong>Unexpected Weight Loss:</strong> Sudden and unexplained weight loss.</li>
              </ul>
            </div>
            <div className="lg:w-1/2">
              <img src="/images/noimage.png" alt="Symptoms visual" className="w-full rounded-xl shadow-md" />
            </div>
          </section>

          {/* Consult */}
          <p className="italic mt-6 text-gray-700 text-base text-center max-w-3xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            Please consult with a health professional for personalized medical advice and further information.
          </p>
        </div>
    </main>
    );
  }