import LightRays from '../components/LightRays';
import GradientText from '../components/ui/GradientText';
import DecryptedText from '../components/ui/DecryptedText';
import SplitText from '../components/ui/SplitText';
import Dock from '../components/ui/DockItem';
import { colors } from '../utils/colors';

const items = [
  { icon: '', label: 'Home', onClick: () => alert('Home!') },
  {
    icon: '',
    label: 'Archive',
    onClick: () => alert('Archive!'),
  },
  {
    icon: '',
    label: 'Profile',
    onClick: () => alert('Profile!'),
  },
  {
    icon: '',
    label: 'Settings',
    onClick: () => alert('Settings!'),
  },
];

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
      <div className="relative z-10 h-full flex flex-col">
        {/* Top left - Name and title */}
        <div className="absolute top-8 left-8">
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
            <div className="text-xl mb-5">
              <span>Nick Holitsyn</span>
            </div>
          </GradientText>

          <SplitText
            text={
              <div className="flex flex-col gap-1">
                <span>Frontend Developer</span>
                <span>5+ Years Experience</span>
              </div>
            }
            className="text-md text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
            //onLetterAnimationComplete={handleAnimationComplete}
          />
        </div>

        <Dock
          items={items}
          panelHeight={68}
          baseItemSize={50}
          magnification={70}
          position="top-right"
        />

        {/* Bottom center - Tagline */}
        <div className="flex-1 flex items-end justify-center">
          <h1 className="text-5xl p-8 pb-32">
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
