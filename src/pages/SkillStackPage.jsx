import DomeGallery from '../components/DomeGallery';
import {
  SiReact,
  SiJavascript,
  SiPython,
  SiDocker,
  SiNodedotjs,
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiGitlab,
  SiVscodium,
  SiVisualstudio,
  SiFigma,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiRedis,
  SiReactrouter,
  SiReactquery,
  SiHtml5,
  SiCss3,
  SiSass,
  SiVite,
  SiRspack,
  SiRedux,
  SiZustand,
  SiAnthropic,
} from 'react-icons/si';
import { LeafletIcon } from '../components/icons/stack/LeafletIcon';
import { ZustandIcon } from '../components/icons/stack/ZustandIcon';
import { TanstackIcon } from '../components/icons/stack/TanstackIcon';
import { VSCodeIcon } from '../components/icons/stack/VSCodeIcon';
import { ClaudeIcon } from '../components/icons/stack/ClaudeIcon';
import { RecraftIcon } from '../components/icons/stack/RecraftIcon';

const SKILLS = [
  { icon: SiReact, color: '#61DAFB', name: 'React' },
  { icon: SiJavascript, color: '#F7DF1E', name: 'JavaScript' },
  { icon: SiTypescript, color: '#3178C6', name: 'TypeScript' },
  { icon: SiNodedotjs, color: '#339933', name: 'Node.js' },
  { icon: SiRedux, color: '#764ABC', name: 'Redux' },
  { icon: SiGithub, color: '#181717', name: 'GitHub' },
  { icon: SiGitlab, color: '#FC6D26', name: 'GitLab' },
  { icon: SiTailwindcss, color: '#06B6D4', name: 'Tailwind CSS' },
  { icon: SiNextdotjs, color: '#000000', name: 'Next.js' },
  { icon: SiReactrouter, color: '#CA4245', name: 'React Router' },
  { icon: SiVite, color: '#646CFF', name: 'Vite' },
  { icon: SiHtml5, color: '#E34F26', name: 'HTML5' },
  { icon: SiCss3, color: '#1572B6', name: 'CSS3' },
  { icon: SiSass, color: '#CC6699', name: 'Sass' },
  { icon: LeafletIcon, color: '#B6E464', name: 'Leaflet' },
  { icon: ZustandIcon, color: '#443E38', name: 'Zustand' },
  { icon: TanstackIcon, color: '#F29735', name: 'TanStack' },
  { icon: VSCodeIcon, color: '#007ACC', name: 'VS Code' },
  { icon: ClaudeIcon, color: '#D97757', name: 'Claude AI' },
  { icon: RecraftIcon, color: '#FEFEFE', name: 'Recraft AI' },
];

function SkillStackPage() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <DomeGallery skills={SKILLS} iconSize={100} grayscale={false} />
    </div>
  );
}

export default SkillStackPage;
