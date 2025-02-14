export default function CallToAction() {
  return (
    <section className="py-16 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Begin Your Inclusive Learning Journey
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Join our supportive community of learners and educators dedicated to 
            making education accessible for everyone.
          </p>
          
          <div className="mt-8 flex justify-center gap-4">
            <button className="px-6 py-3 text-primary-600 bg-white rounded-lg font-semibold 
              hover:bg-primary-50 transition-colors duration-300">
              Get Started
            </button>
            <button className="px-6 py-3 text-white border-2 border-white rounded-lg 
              font-semibold hover:bg-primary-700 transition-colors duration-300">
              Learn More
            </button>
          </div>
          
          <p className="mt-6 text-sm text-primary-100">
            Join thousands of learners in our inclusive educational community
          </p>
        </div>
      </div>
    </section>
  )
} 