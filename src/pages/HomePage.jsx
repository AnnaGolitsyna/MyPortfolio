import LightRays from '../components/LightRays';
import GradientText from '../components/ui/GradientText';
import SplitText from '../components/ui/SplitText';
import { colors, gradients } from '../utils/colors';

function HomePage() {
  return (
    <div className="relative w-full h-full">
      {/* Background Layer - LightRays covering entire area */}
      <div className="absolute w-full h-full inset-0 -z-0">
        <LightRays
          raysOrigin="top-center"
          raysColor={colors.primary.light}
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>

      <button
        onClick={() => {}}
        className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 text-white m-8 mb-0`}
        style={{ background: gradients.primary.cyan }}
      >
        CV
      </button>

      {/* Your content goes here */}
      <div className="relative z-10 h-full flex flex-col justify-between p-8 md:p-12 lg:p-16">
        {/* Top left - Name and title */}
        <div className="flex flex-col items-center">
          <GradientText
            colors={[
              colors.primary.cyan,
              colors.primary.blue,
              colors.primary.cyan,
              colors.primary.blue,
              colors.primary.cyan,
            ]}
            animationSpeed={3}
            showBorder={false}
          >
            <div className="text-3xl m-2">
              <span>Nik Holitsyn</span>
            </div>
          </GradientText>

          <SplitText
            text={<span>Welcome to my portfolio</span>}
            className="text-lg text-center"
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

        {/* Bottom center - Tagline */}
        <div className="text-center pb-8 md:pb-12">
          <h1 className="text-5xl">
            <GradientText
              colors={[
                colors.primary.cyan,
                colors.primary.blue,
                colors.primary.cyan,
                colors.primary.blue,
                colors.primary.cyan,
              ]}
              animationSpeed={3}
              showBorder={false}
              className="custom-class"
            >
              Clean code. Clear interfaces. Real results.
            </GradientText>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
