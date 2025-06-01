export default function LearnerZone() {
    return (
      <main>
        {/* Page header and image */}
        <div className="bg-black text-white p-2 flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 space-y-4 md:pl-8">
            <h1 className="text-4xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Learner Zone</h1>
            <h2 className="text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>A place to start for learning about prostate cancer</h2>
            <h3 className="text-base" style={{ fontFamily: 'Open Sans, sans-serif' }}>Discover our beginner’s guide and explore the interactive zone designed to help you understand prostate cancer in an engaging, easy to follow way.</h3>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 aspect-[3/2] max-w-[700px] mx-auto">
            <img src="/images/learnerzone.png" alt="News Stories Page Header Image" className="w-full h-full object-cover rounded-lg"/>
          </div>
        </div>

        {/* Menu/image info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
      {[
        {
          href: '/learner-zone/beginners-guide',
          title: 'Beginners Guide',
          image: '/images/beginnersguide.png',
          description: "Little knowledge? We've got you!",
        },
        {
          href: '/learner-zone/interactive-zone',
          title: 'Interactive Zone',
          image: '/images/interactivezone.png',
          description: 'Test your knowledge!',
        },


      ].map(({ href, title, image, description }, index) => (
        <div className="flex justify-center" key={index}>
          <a href={href} className="transition-transform duration-300 hover:scale-105 relative w-3/4">
            <img src={image} alt={`${title} Image`} className="object-contain rounded-lg shadow-lg w-full z-0"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white rounded-lg px-2 z-10">
              <h2 className="text-2xl font-bold bg-[#00B0F0] rounded-full px-4 py-1" style={{ fontFamily: 'Montserrat, sans-serif' }}> {title}</h2>
              <h3 className="text-sm mt-2 bg-white text-black rounded-full px-4 py-1 font-bold" style={{ fontFamily: 'Open Sans, sans-serif' }}> {description}</h3>
            </div>
          </a>
        </div>
      ))}
    </div>
    </main>
    );
  }