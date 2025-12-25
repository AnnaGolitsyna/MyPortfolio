function ProjectsPage() {
  return (
    <div>
      {/* CTA Section */}
      <section className="relative min-h-screen bg-gradient-to-b from-background-dark to-background-darker px-8 md:px-16 pt-16 md:pt-24 lg:pt-28 pb-32 flex items-center justify-center">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-2">
            <h2 className="display-font text-5xl md:text-7xl font-black leading-tight">
              Let's Build
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan via-primary-blue to-primary-light glow-text">
                Something Great
              </span>
              <br />
              Together
            </h2>

            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto leading-relaxed">
              Ready to bring your project to life with clean code and creative
              solutions?
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <a
              href="#contact"
              className="group relative px-10 py-5 bg-gradient-to-r from-primary-cyan to-primary-blue text-background-dark font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary-cyan/50 rounded-lg"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary-blue to-primary-cyan translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>

            <a
              href="#projects"
              className="group px-10 py-5 border-2 border-primary-cyan/30 text-white font-semibold text-lg hover:border-primary-cyan hover:bg-primary-cyan/10 transition-all duration-300 rounded-lg"
            >
              View My Work
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ProjectsPage;
