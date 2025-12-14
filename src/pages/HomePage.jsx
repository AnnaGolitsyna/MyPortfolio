import LightRays from '../components/LightRays';

function HomePage() {
  return (
    <div className="relative w-full h-full">
      {/* Background Layer - LightRays covering entire area */}
      <div className="absolute w-full h-full inset-0 -z-10">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
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
      <div className="relative z-10 h-full flex items-center justify-center">
        <h1 className="text-4xl p-8">Test Content</h1>
      </div>
    </div>
  );
}

export default HomePage;
