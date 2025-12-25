import ElectricBorderCard from '../components/ElectricBorderCard';
import SplitText from '../components/ui/SplitText';

function AboutPage() {
  return (
    <div сlassName="w-full h-full flex">
      {/* Left side - Image (50% width, 100% height) */}
      <div className="relative w-1/2 h-full overflow-hidden">
        <img
          src="/NikBgFree.png"
          alt="Profile"
          className="
      w-full h-full
      object-cover
      lg:object-cover
      md:object-contain
      md:object-center
    "
        />

        <div
          className="
      pointer-events-none
      absolute inset-0
      bg-[radial-gradient(circle,transparent_60%,rgba(0,0,0,0.35)_100%)]
    "
        />
      </div>

      {/* Right side - Text (50% width, 100% height) */}
      <div className="w-1/2 h-full overflow-y-auto p-8 flex flex-col justify-center space-y-4">
        <h2 className="text-2xl font-semibold">Hi, I'm Nik!</h2>

        <p className="text-lg opacity-90 leading-relaxed">
          Welcome to my portfolio.
        </p>
        <p className="text-lg opacity-90 leading-relaxed">
          I'm a Front-end Developer who genuinely loves turning complex ideas
          into clean, working code.
        </p>
        <p className="text-lg opacity-90 leading-relaxed">
          With over 5 years of experience building React applications, I've
          learned that great development is as much about communication and
          problem-solving as it is about technical skills
        </p>

        <p className="opacity-80 leading-relaxed">
          What gets me excited? Taking on challenging features—like integrating
          complex routing systems or redesigning legacy map interfaces—and
          delivering solutions that clients actually love using. I believe in
          writing code that the next developer (or future me!) will appreciate:
          readable, scalable, and maintainable.
        </p>

        <p className="opacity-80 leading-relaxed">
          I'm that person who asks the clarifying questions upfront, proactively
          spots potential issues, and takes ownership of solutions from start to
          finish. Whether it's accurately estimating timelines, refactoring
          legacy code, or jumping into a technical deep-dive, I bring a
          detail-oriented approach with a growth mindset.
        </p>

        <p className="opacity-80 leading-relaxed">
          Currently diving deeper into TypeScript and React Query while
          continuing to explore how AI tools can make us all more productive
          developers. When I'm not coding, you'll find me staying curious about
          the latest frontend patterns and best practices.
        </p>

        <SplitText
          text={<span>Let's build something great together!</span>}
          className="text-2xl text-center"
          delay={100}
          duration={0.6}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>
    </div>
  );
}

export default AboutPage;
