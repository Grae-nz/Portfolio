export default function Prevention() {
    return (
      <main>
        {/* Page header and image */}
        <div className="bg-black text-white p-2 flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 space-y-4 md:pl-8">
            <h1 className="text-4xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Prevention</h1>
            <h2 className="text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>Ways to reduce the chances of getting prostate cancer </h2>
            <h3 className="text-base" style={{ fontFamily: 'Open Sans, sans-serif' }}>Learn how nutrition, exercise, and lifestyle habits contribute to reducing prostate cancer risk and improving overall wellness.</h3>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 aspect-[3/2] max-w-[700px] mx-auto">
            <img src="/images/prevention.png" alt="Home Page Header Image" className="w-full h-full object-cover rounded-lg"/>
          </div>
        </div>

        {/* Page content */}
        <div className="bg-white max-w-6xl mx-auto px-4 py-12 space-y-16">

          {/* Diet and Nutrition */}
          <div className="bg-gray-50 text-black flex flex-col lg:flex-row gap-8 items-start p-6 rounded-xl shadow-md">
            <section className="space-y-4 text-lg leading-relaxed lg:w-2/3" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              <h2 className="text-xl font-bold text-[#0070C0]">Diet and Nutrition</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Tomatoes and Lycopene:</strong> Consuming foods rich in lycopene, such as tomatoes and watermelon, may reduce the risk of prostate cancer. Cooked tomatoes are especially beneficial.</li>
                <li><strong>Brassicas:</strong> Cruciferous vegetables like broccoli, cauliflower, spinach, chard, cabbage, and Brussels sprouts can reduce the risk of various cancers.</li>
                <li><strong>Coffee:</strong> Drinking about 4 cups daily, whether caffeinated or decaffeinated, may reduce prostate cancer risk and improve treatment outcomes.</li>
                <li><strong>Avoid Processed Meats:</strong> Cured, salted, and smoked meats raise cancer risk. Consume sparingly or avoid altogether.</li>
                <li><strong>Healthy Diet:</strong> A vegetable-based diet with limited fatty foods supports prostate health.</li>
              </ul>
            </section>
            <div className="lg:w-1/3">
              <img src="/images/noimage.png" alt="Diet and Nutrition" className="w-full rounded-md shadow-md" />
            </div>
          </div>

          {/* Exercise */}
          <div className="bg-gray-50 text-black flex flex-col lg:flex-row gap-8 items-start p-6 rounded-xl shadow-md">
            <section className="space-y-4 text-lg leading-relaxed lg:w-2/3" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              <h2 className="text-xl font-bold text-[#0070C0]">Exercise</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Regular Exercise:</strong> Vigorous activity three times a week (30+ minutes) significantly lowers cancer mortality. Even moderate exercise like walking helps.</li>
                <li><strong>Exercise for Hormone Therapy Patients:</strong> Physical activity helps reduce hormone therapy side effects and improves quality of life.</li>
              </ul>
            </section>
            <div className="lg:w-1/3">
              <img src="/images/noimage.png" alt="Exercise" className="w-full rounded-md shadow-md" />
            </div>
          </div>

          {/* Lifestyle Choices */}
          <div className="bg-gray-50 text-black flex flex-col lg:flex-row gap-8 items-start p-6 rounded-xl shadow-md">
            <section className="space-y-4 text-lg leading-relaxed lg:w-2/3" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              <h2 className="text-xl font-bold text-[#0070C0]">Lifestyle Choices</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Avoid Smoking:</strong> Smoking increases the risk of prostate and other cancers. Quitting smoking greatly benefits overall health.</li>
                <li><strong>Moderate Alcohol Intake:</strong> Heavy alcohol consumption increases cancer risk. Limit intake for better health.</li>
              </ul>
            </section>
            <div className="lg:w-1/3">
              <img src="/images/noimage.png" alt="Lifestyle Choices" className="w-full rounded-md shadow-md" />
            </div>
          </div>

          {/* Supplements */}
          <div className="bg-gray-50 text-black flex flex-col lg:flex-row gap-8 items-start p-6 rounded-xl shadow-md">
            <section className="space-y-4 text-lg leading-relaxed lg:w-2/3" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              <h2 className="text-xl font-bold text-[#0070C0]">Supplements</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Avoid Certain Supplements:</strong> Selenium and vitamin E supplements have been linked to increased prostate cancer risk.</li>
              </ul>
            </section>
            <div className="lg:w-1/3">
              <img src="/images/noimage.png" alt="Supplements" className="w-full rounded-md shadow-md" />
            </div>
          </div>

          {/* General Health */}
          <div className="bg-gray-50 text-black flex flex-col lg:flex-row gap-8 items-start p-6 rounded-xl shadow-md">
            <section className="space-y-4 text-lg leading-relaxed lg:w-2/3" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              <h2 className="text-xl font-bold text-[#0070C0]">General Health</h2>
              <ul className="list-disc list-inside space-y-2">
                <li><strong>Maintain a Healthy Weight:</strong> Keeping your BMI in a healthy range supports overall health and lowers cancer risk. Focus on sustainable eating and consistent physical activity.</li>
              </ul>
            </section>
            <div className="lg:w-1/3">
              <img src="/images/noimage.png" alt="General Health" className="w-full rounded-md shadow-md" />
            </div>
          </div>

          {/* Consult */}
          <p className="italic mt-6 text-gray-700 text-base text-center max-w-3xl mx-auto" style={{ fontFamily: 'Open Sans, sans-serif' }}>
            For personalized advice and more detailed information, it is essential to consult with a health practitioner.
          </p>

          {/* Links */}
          <section className="mt-12">
            <h2 className="text-2xl text-[#0070C0] font-bold mb-4" style={{ fontFamily: 'Open Sans, sans-serif' }}> Want to Learn More?</h2>
            <ul className="list-disc list-inside text-blue-600 underline text-lg" style={{ fontFamily: 'Open Sans, sans-serif' }}>
              <li><a href="#" target="_blank">Prostate Cancer Diet and Lifestyle – Prostate Matters (PDF)</a></li>
            </ul>
          </section>

        </div>
    </main>
    );
  }