import { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';

interface SplashScreenProps {
  onComplete: () => void; // Callback when animation finishes
}

const SplashScreen = ({ onComplete }: SplashScreenProps) => {
  const [logoVisible, setLogoVisible] = useState(false);
  const [typingStarted, setTypingStarted] = useState(false);
  const [typingComplete, setTypingComplete] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  const logoFadeInDuration = 500;
  const typingStartDelay = logoFadeInDuration + 200;
  // Updated typing sequence to a single line from the previous style
  const typingSequence = [
    'DIGITAL OPERATIONS TASKFORCE.', 1000 // Single phrase with a shorter pause
  ];
  // Updated duration calculation for the new text
  const text = 'SYSTEM READY.';
  const typingSpeed = 60; // Assuming speed is 60ms per char for calculation
  const estimatedTypingDuration = 1000 + (text.length * typingSpeed);
  const fadeOutDelay = typingStartDelay + estimatedTypingDuration + 300;

  useEffect(() => {
    // Logo fade in
    const logoTimer = setTimeout(() => {
      setLogoVisible(true);
    }, 100);

    // Start typing after logo fades in
    const typingStartTimer = setTimeout(() => {
      setTypingStarted(true);
    }, typingStartDelay);

    // Trigger fade out
    const fadeOutTimer = setTimeout(() => {
        setFadeOut(true);
    }, fadeOutDelay);

    // Call onComplete after fade out finishes
    const completionTimer = setTimeout(() => {
        onComplete();
    }, fadeOutDelay + 500); // 500ms is the fade-out duration

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(typingStartTimer);
      clearTimeout(fadeOutTimer);
      clearTimeout(completionTimer);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onComplete]);

  const handleTypingDone = () => {
    setTypingComplete(true);
  };

  return (
    <div 
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-background transition-opacity duration-500 ease-in-out ${fadeOut ? 'opacity-0' : 'opacity-100'}`}
      aria-hidden={fadeOut}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
      
      {/* Logo - Increased size again */}
      <img 
        src="https://minio-minio.m7nkeb.easypanel.host/vant/logovant2.png" 
        alt="VANT Logo" 
        className={`h-20 sm:h-24 mb-6 transition-all duration-500 ease-in-out ${logoVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} // Changed h-16 sm:h-20 to h-20 sm:h-24
      />

      {/* Typing Animation - Updated text, increased size */}
      <div className="font-mono text-base text-primary/60 h-6"> {/* Changed text-sm to text-base, h-5 to h-6 */}
        {typingStarted && (
          <TypeAnimation
            sequence={[...typingSequence, handleTypingDone]}
            wrapper="span"
            speed={60}
            cursor={!typingComplete}
            repeat={0}
          />
        )}
      </div>
    </div>
  );
};

export default SplashScreen;