import { MotionConfig } from 'framer-motion';
import { Home } from './pages/Home';

export function App() {
  return (
    <MotionConfig reducedMotion="user">
      <Home />
    </MotionConfig>
  );
}
