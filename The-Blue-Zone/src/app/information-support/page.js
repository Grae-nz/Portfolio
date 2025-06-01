export default function InformationSupport() {
    return (
      <main>
        {/* Page header and image */}
        <div className="bg-black text-white p-2 flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 space-y-4 md:pl-8">
            <h1 className="text-4xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Information & Support</h1>
            <h2 className="text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>Explore prostate related information and support resourses</h2>
            <h3 className="text-base" style={{ fontFamily: 'Open Sans, sans-serif' }}>From understanding your diagnosis to finding the right support group, we've got the essentials covered.</h3>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 aspect-[3/2] max-w-[700px] mx-auto">
            <img src="/images/informationsupport.png" alt="Info-support Page Header Image" className="w-full h-full object-cover rounded-lg"/>
          </div>
        </div>

        {/* Menu/image info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
      {[
        {
          href: '/information-support/prostate-cancer-info',
          title: 'Prostate Cancer Information',
          image: '/images/pcinfo.png',
          description: 'Understand the four stages of prostate cancer',
        },
        {
          href: '/information-support/risks-symptoms',
          title: 'Risks & Symptoms',
          image: '/images/riskssymptons.png',
          description: 'Explore risks and symptons',
        },
        {
          href: '/information-support/prostate-tests',
          title: 'Prostate Tests',
          image: '/images/prostatetests.png',
          description: 'What tests are available?',
        },
        {
          href: '/information-support/prevention',
          title: 'Prevention',
          image: '/images/prevention.png',
          description: 'Reduce the chances of getting prostate cancer',
        },
        {
            href: '/information-support/just-diagnosed',
            title: 'Just Diagnosed',
            image: '/images/justdiagnosed.png',
            description: 'Explore treatment options',
          },
          {
            href: '/information-support/get-support',
            title: 'Get Support',
            image: '/images/getsupport.png',
            description: 'Support services and resources',
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