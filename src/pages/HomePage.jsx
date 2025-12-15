import LightRays from '../components/LightRays';
import GradientText from '../components/ui/GradientText';
import { colors } from '../utils/colors';

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

      {/* Your content goes here */}
      <div className="relative z-10 h-full flex items-center justify-center gap-8">
        <h1 className="text-4xl p-8">
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
  );
}

export default HomePage;
