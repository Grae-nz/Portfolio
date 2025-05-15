export default function InformationSupport() {
    return (
      <main>
        {/* Page header and image */}
        <div className="bg-black text-white p-8 flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 space-y-4 md:pl-8">
            <h1 className="text-4xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>Information & Support</h1>
            <h2 className="text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>Placeholder Header</h2>
            <h3 className="text-base" style={{ fontFamily: 'Open Sans, sans-serif' }}>Placeholder text...</h3>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
            <img src="/images/noimage.png" alt="Home Page Header Image" className="w-1/2 object-contain" />
          </div>
        </div>

        {/* Menu/image info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pb-16">
      {[
        {
          href: '/information-support/prostate-cancer-info',
          title: 'Prostate Cancer Information',
          image: '/images/noimage.png',
          description: 'placeholder text',
        },
        {
          href: '/information-support/risks-symptoms',
          title: 'Risks & Symptoms',
          image: '/images/noimage.png',
          description: 'placeholder text',
        },
        {
          href: '/information-support/prostate-tests',
          title: 'Prostate Tests',
          image: '/images/noimage.png',
          description: 'placeholder text',
        },
        {
          href: '/information-support/prevention',
          title: 'Prevention',
          image: '/images/noimage.png',
          description: 'placeholder text',
        },
        {
            href: '/information-support/just-diagnosed',
            title: 'Just Diagnosed',
            image: '/images/justdiagnosed.png',
            description: 'placeholder text',
          },
          {
            href: '/information-support/get-support',
            title: 'Get Support',
            image: '/images/noimage.png',
            description: 'placeholder text',
          },

      ].map(({ href, title, image, description }, index) => (
        <div className="flex justify-center" key={index}>
          <a href={href} className="transition-transform duration-300 hover:scale-105 relative w-3/4">
            <img src={image} alt={`${title} Image`} className="object-contain rounded-lg shadow-lg w-full z-0"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white bg-black bg-black/25 rounded-lg px-2 z-10">
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