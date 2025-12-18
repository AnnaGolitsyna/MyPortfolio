import ElectricBorderCard from '../components/ElectricBorderCard';

function AboutPage() {
  return (
    <div className="p-4 md:p-8">
      <h1 className="text-4xl font-bold mb-8">About</h1>

      {/* Responsive container */}
      <div className="flex flex-col md:flex-row gap-8 items-start">
        {/* Left side - Text about you */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-semibold">Hi, I'm Nik!</h2>

          <p className="text-lg opacity-90 leading-relaxed">
            Welcome to my portfolio. I'm a passionate developer with a keen
            interest in creating beautiful and functional web experiences.
          </p>

          <p className="opacity-80 leading-relaxed">
            I specialize in modern web technologies including React, JavaScript,
            and creative UI/UX design. I love experimenting with animations,
            interactive components, and pushing the boundaries of what's
            possible on the web.
          </p>

          <p className="opacity-80 leading-relaxed">
            When I'm not coding, you can find me exploring new technologies,
            contributing to open-source projects, and continuously learning to
            improve my craft.
          </p>

          <div className="pt-4">
            <h3 className="text-xl font-semibold mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm">
                React
              </span>
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm">
                JavaScript
              </span>
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm">
                CSS/Tailwind
              </span>
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm">
                UI/UX Design
              </span>
              <span className="px-3 py-1 bg-cyan-500/20 rounded-full text-sm">
                Web Animations
              </span>
            </div>
          </div>
        </div>

        {/* Right side - ElectricBorderCard */}
        <div className="w-full md:w-80 lg:w-96 flex-shrink-0">
          <ElectricBorderCard
            color="#7df9ff"
            speed={0.2}
            chaos={0.5}
            thickness={2}
            style={{ borderRadius: 16, opacity: 0.7 }}
          >
            <div>
              <img
                src="/Nik_1color.png"
                alt="Profile"
                style={{ width: '100%', height: 'auto', objectFit: 'cover' }}
              />

            </div>
          </ElectricBorderCard>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
