import { useEffect, useRef, useState } from 'react';
import SplitText from '../components/ui/SplitText';

function AboutPage() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
        const progress = scrollTop / (scrollHeight - clientHeight);
        setScrollProgress(progress);
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="w-full h-full bg-background-dark text-white overflow-hidden relative">
      <style>{`

        .grain-overlay {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.08'/%3E%3C/svg%3E");
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        .text-reveal {
          animation: textReveal 1.2s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
        }

        @keyframes textReveal {
          to {
            opacity: 1;
          }
        }

        .fade-in-up {
          animation: fadeInUp 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          opacity: 0;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .skill-tag {
          transition: all 0.4s cubic-bezier(0.22, 1, 0.36, 1);
        }

        .skill-tag:hover {
          transform: translateY(-4px);
          box-shadow: 0 8px 24px rgba(64, 255, 170, 0.3);
        }

        .image-parallax {
          transition: transform 0.1s ease-out;
        }

        .section-line {
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(64, 255, 170, 0.3), transparent);
        }

        .scroll-indicator {
          animation: scrollPulse 2s ease-in-out infinite;
        }

        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: translateY(0); }
          50% { opacity: 1; transform: translateY(8px); }
        }

        .glow-text {
          text-shadow: 0 0 20px rgba(64, 255, 170, 0.5);
        }

        .gradient-border {
          position: relative;
        }

        .gradient-border::before {
          content: '';
          position: absolute;
          inset: 0;
          padding: 2px;
          background: linear-gradient(135deg, #40ffaa, #4079ff);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
        }
      `}</style>

      {/* Grain Overlay */}
      <div className="absolute inset-0 grain-overlay pointer-events-none z-50" />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/5 z-50">
        <div
          className="h-full bg-gradient-to-r from-primary-cyan via-primary-blue to-primary-cyan transition-all duration-300"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Main Content */}
      <div
        ref={containerRef}
        className="about-container w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth"
      >
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center px-8 md:px-16">
          {/* Background Image with Parallax - Full Screen */}
          <div
            className="absolute inset-0 image-parallax"
            style={{
              transform: `translateY(${scrollProgress * 80}px)`,
            }}
          >
            <div className="relative w-full h-full">
              <img
                src="/NikBgFree.png"
                alt="Nik"
                className="w-full h-full object-contain"
                style={{
                  filter: 'brightness(0.5) contrast(1.05)',
                  objectPosition: '70% 10%',
                }}
              />
              {/* Gradient overlays for better text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-background-darker/80 via-background-dark/50 to-background-dark" />
              <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-transparent to-background-dark/60" />

              {/* Cyan/Blue glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-cyan/5 via-transparent to-primary-blue/10" />
            </div>
          </div>

          {/* Hero Content - Centered */}
          <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Text Content */}
            <div className="space-y-8">
              <div className="text-reveal" style={{ animationDelay: '0.2s' }}>
                <p className="text-primary-cyan text-sm md:text-base tracking-[0.3em] uppercase mb-6 font-light">
                  Front-end Developer
                </p>
              </div>

              <h1
                className="display-font text-5xl md:text-7xl lg:text-8xl font-black leading-[0.95] text-reveal"
                style={{ animationDelay: '0.4s' }}
              >
                Hi, I'm
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-cyan via-primary-blue to-primary-light glow-text">
                  Nik
                </span>
              </h1>

              <div
                className="fade-in-up max-w-xl"
                style={{ animationDelay: '0.6s' }}
              >
                <p className="text-xl md:text-2xl text-white/80 font-light leading-relaxed">
                  Crafting beautiful digital experiences with clean code and
                  creative passion
                </p>
              </div>

              {/* Quick Stats */}
              <div
                className="fade-in-up flex flex-wrap gap-8 pt-4"
                style={{ animationDelay: '0.8s' }}
              >
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-cyan">
                    5+
                  </div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">
                    Years Experience
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-blue">
                    React
                  </div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">
                    Specialist
                  </div>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold text-primary-light">
                    ∞
                  </div>
                  <div className="text-sm text-white/60 uppercase tracking-wider">
                    Learning
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Empty space to balance layout, image is in background */}
            <div className="hidden lg:block"></div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-12 left-1/2 -translate-x-1/2 scroll-indicator">
            <div className="flex flex-col items-center gap-2 text-primary-cyan/60">
              <span className="text-xs tracking-widest uppercase">Scroll</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 5V19M12 19L19 12M12 19L5 12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </section>

        {/* Who I Am Section */}
        <section className="relative min-h-screen bg-gradient-to-b from-background-dark via-background-darker to-background-dark px-8 md:px-16 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left Column - Large Number */}
              <div className="lg:col-span-3">
                <div className="sticky top-32">
                  <span className="display-font text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary-cyan/30 to-primary-cyan/5">
                    01
                  </span>
                  <div className="section-line mt-8 mb-4" />
                  <p className="text-primary-cyan/60 text-sm tracking-wider uppercase">
                    Who I Am
                  </p>
                </div>
              </div>

              {/* Right Column - Content */}
              <div className="lg:col-span-9 space-y-12">
                <div>
                  <h2 className="display-font text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    The Developer Behind{' '}
                    <span className="italic text-primary-cyan">the Code</span>
                  </h2>

                  <div className="space-y-6 text-lg md:text-xl text-white/70 leading-relaxed">
                    <p>
                      I'm a Middle+ Front-end Developer with over{' '}
                      <span className="text-primary-cyan font-semibold">
                        5 years of commercial experience
                      </span>
                      , specializing in building React applications that people
                      actually enjoy using.
                    </p>

                    <p>
                      What drives me? The satisfaction of transforming complex
                      requirements into elegant solutions. I'm not just someone
                      who writes code — I'm someone who{' '}
                      <span className="text-white font-semibold">
                        asks the right questions
                      </span>
                      , understands the business context, and delivers features
                      that work seamlessly from day one.
                    </p>

                    <p>
                      I thrive in direct client communication, where I can
                      clarify requirements, propose better approaches, and take
                      full ownership of technical decisions. When I see an
                      opportunity to improve something, I don't wait to be asked
                      — I proactively suggest solutions and take responsibility
                      for implementing them.
                    </p>
                  </div>
                </div>

                {/* Highlight Box */}
                <div className="relative p-8 md:p-12 bg-gradient-to-br from-primary-cyan/5 to-primary-blue/5 border border-primary-cyan/20 backdrop-blur-sm">
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary-cyan" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary-blue" />

                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light italic">
                    "I believe great development is as much about communication
                    and problem-solving as it is about technical excellence."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How I Work Section */}
        <section className="relative min-h-screen bg-background-dark px-8 md:px-16 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
              {/* Left Column */}
              <div className="lg:col-span-3">
                <div className="sticky top-32">
                  <span className="display-font text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary-blue/30 to-primary-blue/5">
                    02
                  </span>
                  <div className="section-line mt-8 mb-4" />
                  <p className="text-primary-cyan/60 text-sm tracking-wider uppercase">
                    How I Work
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-9">
                <h2 className="display-font text-4xl md:text-5xl font-bold mb-16">
                  My <span className="italic text-primary-cyan">Approach</span>
                </h2>

                <div className="space-y-12">
                  {/* Approach 1 */}
                  <div className="border-l-2 border-primary-cyan/30 pl-8 hover:border-primary-cyan transition-colors duration-300">
                    <h3 className="text-2xl font-semibold text-primary-cyan mb-4">
                      Deep Dive Before Coding
                    </h3>
                    <p className="text-lg text-white/70 leading-relaxed">
                      I don't rush into implementation. Instead, I conduct
                      thorough technical assessments, clarify requirements with
                      stakeholders, and identify potential risks during the
                      planning phase. This approach ensures accurate estimates
                      and smooth execution.
                    </p>
                  </div>

                  {/* Approach 2 */}
                  <div className="border-l-2 border-primary-blue/30 pl-8 hover:border-primary-blue transition-colors duration-300">
                    <h3 className="text-2xl font-semibold text-primary-blue mb-4">
                      Ownership & Initiative
                    </h3>
                    <p className="text-lg text-white/70 leading-relaxed">
                      When faced with challenges, I take full ownership. If
                      specifications have inaccuracies, I proactively suggest
                      improvements. When given the option to involve others, I
                      assess whether I can handle it myself — and often do,
                      delivering results that exceed expectations.
                    </p>
                  </div>

                  {/* Approach 3 */}
                  <div className="border-l-2 border-primary-light/30 pl-8 hover:border-primary-light transition-colors duration-300">
                    <h3 className="text-2xl font-semibold text-primary-light mb-4">
                      Code That Lives Beyond Today
                    </h3>
                    <p className="text-lg text-white/70 leading-relaxed">
                      I write readable, scalable code that follows established
                      patterns and makes it easy for any developer to jump in
                      and understand. I believe code quality isn't just about
                      making it work — it's about making it maintainable for the
                      long term.
                    </p>
                  </div>

                  {/* Approach 4 */}
                  <div className="border-l-2 border-primary-cyan/30 pl-8 hover:border-primary-cyan transition-colors duration-300">
                    <h3 className="text-2xl font-semibold text-primary-cyan mb-4">
                      Leverage Modern Tools
                    </h3>
                    <p className="text-lg text-white/70 leading-relaxed">
                      I'm always exploring how to work smarter. Whether it's
                      TypeScript, React Query, or AI tools like Claude, I
                      continuously integrate modern solutions to boost
                      development velocity while maintaining quality standards.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why People Trust Me Section */}
        <section className="relative min-h-screen bg-gradient-to-b from-background-darker to-background-dark px-8 md:px-16 py-32">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              {/* Left Column */}
              <div className="lg:col-span-3">
                <div className="sticky top-32">
                  <span className="display-font text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-b from-primary-light/30 to-primary-light/5">
                    03
                  </span>
                  <div className="section-line mt-8 mb-4" />
                  <p className="text-primary-cyan/60 text-sm tracking-wider uppercase">
                    Why Trust Me
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-9 space-y-12">
                <div>
                  <h2 className="display-font text-4xl md:text-5xl font-bold mb-8 leading-tight">
                    Track Record of{' '}
                    <span className="italic text-primary-cyan">Excellence</span>
                  </h2>

                  <div className="space-y-8">
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-8">
                      <div className="text-center p-6 bg-primary-cyan/5 border border-primary-cyan/20 rounded-lg">
                        <div className="text-4xl font-black text-primary-cyan mb-2">
                          10/10
                        </div>
                        <div className="text-sm text-white/60 uppercase tracking-wider">
                          Client Communication
                        </div>
                      </div>
                      <div className="text-center p-6 bg-primary-blue/5 border border-primary-blue/20 rounded-lg">
                        <div className="text-4xl font-black text-primary-blue mb-2">
                          10/10
                        </div>
                        <div className="text-sm text-white/60 uppercase tracking-wider">
                          Technical Excellence
                        </div>
                      </div>
                      <div className="text-center p-6 bg-primary-light/5 border border-primary-light/20 rounded-lg">
                        <div className="text-4xl font-black text-primary-light mb-2">
                          10/10
                        </div>
                        <div className="text-sm text-white/60 uppercase tracking-wider">
                          Estimate Accuracy
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                      <p>
                        <span className="text-primary-cyan font-semibold">
                          Consistently rated 10/10
                        </span>{' '}
                        across all performance metrics—from technical competence
                        and problem-solving to velocity and soft skills. These
                        aren't just numbers; they reflect real client
                        satisfaction and team trust.
                      </p>

                      <p>
                        My clients know they can count on me for{' '}
                        <span className="text-white font-semibold">
                          accurate estimates
                        </span>{' '}
                        that account for technical debt and risks. I complete
                        tasks within planned timeframes because I understand the
                        codebase deeply and anticipate challenges before they
                        arise.
                      </p>

                      <p>
                        When deadlines are tight, I deliver. When requirements
                        are unclear, I clarify them. When problems emerge, I
                        solve them. This reliability is why I maintain
                        <span className="text-primary-cyan font-semibold">
                          {' '}
                          strong, long-term client relationships
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>

                {/* Client Feedback Quote */}
                <div className="relative p-8 md:p-12 bg-gradient-to-br from-primary-cyan/5 to-primary-blue/5 border border-primary-cyan/20 backdrop-blur-sm">
                  <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-primary-cyan" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-primary-blue" />

                  <p className="text-xl md:text-2xl text-white/90 leading-relaxed font-light italic mb-4">
                    "Maintains close communication with the client, conducts
                    thorough investigations during discussions, and as a result,
                    all deliverables are completed on time. The client was
                    highly satisfied with the final result."
                  </p>
                  <p className="text-sm text-primary-cyan/80 uppercase tracking-wider">
                    — Performance Review
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default AboutPage;
