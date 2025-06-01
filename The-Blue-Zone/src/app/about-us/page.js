export default function AboutUs() {
    return (
      <main>
        {/* Page header and image */}
        <div className="bg-black text-white p-2 flex flex-col md:flex-row items-center justify-between mb-12">
          <div className="md:w-1/2 space-y-4 md:pl-8">
            <h1 className="text-4xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif' }}>About Us</h1>
            <h2 className="text-2xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>Placeholder Header</h2>
            <h3 className="text-base" style={{ fontFamily: 'Open Sans, sans-serif' }}>Placeholder text...</h3>
          </div>
          <div className="md:w-1/2 mt-6 md:mt-0 aspect-[3/2] max-w-[700px] mx-auto">
            <img src="/images/Logo2.png" alt="Logo Image" className="w-full h-full object-cover rounded-lg"/>
          </div>
        </div>

        {/* Page content */}
        <div className="bg-white max-w-6xl mx-auto px-4 py-12 space-y-16">

          {/* Who we are */}
          <section className="bg-gray-50 text-black flex flex-col lg:flex-row items-start gap-8 p-6 rounded-xl shadow-md">
            <div className="lg:w-2/3">
              <h1 className="text-4xl text-[#0070C0] font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Who we are</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Vestibulum gravida nec dui a interdum. Maecenas efficitur neque sed erat placerat, at malesuada arcu rhoncus. Cras non justo congue, hendrerit urna vel, auctor justo. 
                Pellentesque maximus quam nec justo faucibus maximus. Integer sit amet nibh vitae sapien porttitor elementum a a massa. 
                Aenean blandit a nisi non ornare. Nullam scelerisque, urna eu interdum sollicitudin, quam eros venenatis nulla, sit amet elementum risus libero posuere diam. Integer eu sapien turpis.</p>
            </div>
            <div className="lg:w-1/2">
              <img src="/images/noimage.png" alt="Risks visual" className="w-full rounded-xl shadow-md" />
            </div>
          </section>

          {/* Contact us */}
          <section className="bg-gray-50 text-black flex flex-col lg:flex-row items-start gap-8 p-6 rounded-xl shadow-md">
            <div className="lg:w-2/3">
              <h1 className="text-4xl text-[#0070C0] font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>Contact us</h1>
              <div className="flex space-x-4 mt-2 text-xl">
                <a href="https://facebook.com" target="_blank" className="hover:text-[#00B0F0]"><i className="fab fa-facebook-f"></i></a>
                <a href="https://instagram.com" target="_blank" className="hover:text-[#00B0F0]"><i className="fab fa-instagram"></i></a>
                <a href="https://linkedin.com" target="_blank" className="hover:text-[#00B0F0]"><i className="fab fa-linkedin-in"></i></a>
              </div>
              <p>0800placeholder</p>
              <p><a href="mailto:info@thebluezone.org.nz" className="underline">info@thebluezone.org.nz</a></p>
            </div>
          </section>
        </div>

    </main>
    );
  }