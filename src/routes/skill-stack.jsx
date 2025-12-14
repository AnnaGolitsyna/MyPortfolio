import { createFileRoute } from '@tanstack/react-router';
import SkillStackPage from '../pages/SkillStackPage';

export const Route = createFileRoute('/skill-stack')({
  component: SkillStackPage,
});
