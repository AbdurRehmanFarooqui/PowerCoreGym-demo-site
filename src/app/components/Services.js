export default function Services() {
  const services = [
    {
      title: 'Personal Training',
      description: 'Work one-on-one with certified trainers to reach your goals faster with customized workout plans.',
    },
    {
      title: 'Group Classes',
      description: 'From HIIT to yoga, our energetic group classes keep you motivated and moving.',
    },
    {
      title: 'Strength Training',
      description: 'Build muscle and improve endurance with our world-class equipment and expert guidance.',
    },
    {
      title: 'Cardio Zone',
      description: 'Get your heart pumping with treadmills, bikes, and rowers in our high-energy cardio section.',
    },
  ];

  return (
    <section id="services" className="bg-gray-800 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-10 font-['Oswald']">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-['Inter']">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md p-6 text-left hover:shadow-lg transition">
              <h3 className="text-2xl font-semibold text-yellow-500 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
