export default function Hero() {

  return (

    <section className="bg-[url('/images/hero-gym.jpg')] bg-cover bg-center text-white h-screen flex items-center">

      <div className="bg-black bg-opacity-60 w-full h-full flex items-center justify-center">

        <div className="text-center px-4">

          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-['Oswald']">

            Transform Your Body at <span className="text-yellow-400">PowerCore Gym</span>

          </h1>

          <p className="text-lg md:text-xl mb-6 font-['Oswald']">

            Train with experts. Build strength. Join our fitness community in Karachi today.

          </p>

          <a

            href="#contact"

            className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full transition font-['Inter']"

          >

            Join Now

          </a>

        </div>

      </div>

    </section>

  );

}