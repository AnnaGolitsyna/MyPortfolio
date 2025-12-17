import DomeGallery from "../components/DomeGallery";
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



 // { icon: SiAnthropic, color: '#D97757', name: 'Claude AI' },
  // { icon: SiZustand, color: '#443E38', name: 'Zustand' },
  // { icon: SiRspack, color: '#FFC93E', name: 'Rspack' },
 // { icon: SiVisualstudio, color: '#007ACC', name: 'VS Code' },
 // { icon: SiReactquery, color: '#FF4154', name: 'TanStack Query' },
// leaflet


 // { icon: SiVscodium, color: '#007ACC', name: 'VS Code' },
//   { icon: SiPython, color: '#3776AB', name: 'Python' },
//   { icon: SiDocker, color: '#2496ED', name: 'Docker' },
//   { icon: SiMongodb, color: '#47A248', name: 'MongoDB' },
//   { icon: SiPostgresql, color: '#4169E1', name: 'PostgreSQL' },
//   { icon: SiGit, color: '#F05032', name: 'Git' },
//   { icon: SiFigma, color: '#F24E1E', name: 'Figma' },
//   { icon: SiExpress, color: '#000000', name: 'Express' },
//   { icon: SiRedis, color: '#DC382D', name: 'Redis' },
];

function SkillStackPage() {
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
      }}
    >
      <DomeGallery
        skills={SKILLS}
        iconSize={100}
        grayscale={false}
      />
    </div>
  );
}

export default SkillStackPage;
