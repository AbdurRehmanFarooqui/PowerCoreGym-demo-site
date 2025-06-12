const trainers = [
  {
    name: 'Ahsan Khan',
    specialty: 'Strength & Conditioning',
    image: '/images/trainer1.jpg',
  },
  {
    name: 'Sara Malik',
    specialty: 'Yoga & Mobility',
    image: '/images/trainer2.jpg',
  },
  {
    name: 'Imran Ali',
    specialty: 'Personal Training',
    image: '/images/trainer3.jpg',
  },
];

export default function Trainers() {
  return (
    <section id="trainers" className="bg-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 font-['Oswald']">Meet Our Trainers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 font-['Inter']">
          {trainers.map((trainer, index) => (
            <div key={index} className="bg-gray-100 rounded-xl shadow-md overflow-hidden">
              <img
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">{trainer.name}</h3>
                <p className="text-gray-600">{trainer.specialty}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
