import { useState } from 'react';
import DomeGallery from '../components/DomeGallery';
import {
  SiReact,
  SiJavascript,
  SiNodedotjs,
  SiTypescript,
  SiGithub,
  SiGitlab,
  SiTailwindcss,
  SiNextdotjs,
  SiReactrouter,
  SiHtml5,
  SiCss3,
  SiSass,
  SiVite,
  SiRedux,
} from 'react-icons/si';
import { LeafletIcon } from '../components/icons/stack/LeafletIcon';
import { ZustandIcon } from '../components/icons/stack/ZustandIcon';
import { TanstackIcon } from '../components/icons/stack/TanstackIcon';
import { VSCodeIcon } from '../components/icons/stack/VSCodeIcon';
import { ClaudeIcon } from '../components/icons/stack/ClaudeIcon';
import { RecraftIcon } from '../components/icons/stack/RecraftIcon';
import { gradients } from '../utils/colors';
import { RSBuildIcon } from '../components/icons/stack/RSBuildIcon';

const SKILLS_BY_CATEGORY = {
  'Core Technologies': [
    {
      icon: SiJavascript,
      color: '#F7DF1E',
      name: 'JavaScript',
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
      icon: SiTypescript,
      color: '#3178C6',
      name: 'TypeScript',
      url: 'https://www.typescriptlang.org/',
    },
    {
      icon: SiHtml5,
      color: '#E34F26',
      name: 'HTML5',
      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
      icon: SiCss3,
      color: '#1572B6',
      name: 'CSS3',
      url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
    },
    {
      icon: SiNodedotjs,
      color: '#339933',
      name: 'Node.js',
      url: 'https://nodejs.org/',
    },
  ],
  'Frameworks & Libraries': [
    {
      icon: SiReact,
      color: '#61DAFB',
      name: 'React',
      url: 'https://react.dev/',
    },
    {
      icon: SiNextdotjs,
      color: '#000000',
      name: 'Next.js',
      url: 'https://nextjs.org/',
    },
    {
      icon: SiRedux,
      color: '#764ABC',
      name: 'Redux',
      url: 'https://redux.js.org/',
    },
    {
      icon: ZustandIcon,
      color: '#443E38',
      name: 'Zustand',
      url: 'https://zustand-demo.pmnd.rs/',
    },
    {
      icon: SiReactrouter,
      color: '#CA4245',
      name: 'React Router',
      url: 'https://reactrouter.com/',
    },
    {
      icon: TanstackIcon,
      color: '#F29735',
      name: 'TanStack',
      url: 'https://tanstack.com/',
    },
  ],
  'Styling & UI': [
    {
      icon: SiTailwindcss,
      color: '#06B6D4',
      name: 'Tailwind CSS',
      url: 'https://tailwindcss.com/',
    },
    {
      icon: SiSass,
      color: '#CC6699',
      name: 'Sass',
      url: 'https://sass-lang.com/',
    },
  ],
  'Build Tools & Maps': [
    {
      icon: SiVite,
      color: '#646CFF',
      name: 'Vite',
      url: 'https://vitejs.dev/',
    },
    {
      icon: RSBuildIcon,
      color: '#AC625E',
      name: 'RSBuild',
      url: 'https://rsbuild.rs/',
    },
    {
      icon: LeafletIcon,
      color: '#B6E464',
      name: 'Leaflet',
      url: 'https://leafletjs.com/',
    },
  ],
  'Version Control': [
    {
      icon: SiGithub,
      color: '#181717',
      name: 'GitHub',
      url: 'https://github.com/',
    },
    {
      icon: SiGitlab,
      color: '#FC6D26',
      name: 'GitLab',
      url: 'https://gitlab.com/',
    },
  ],
  'AI & Tools': [
    {
      icon: VSCodeIcon,
      color: '#007ACC',
      name: 'VS Code',
      url: 'https://code.visualstudio.com/',
    },
    {
      icon: ClaudeIcon,
      color: '#D97757',
      name: 'Claude AI',
      url: 'https://claude.ai/',
    },
    {
      icon: RecraftIcon,
      color: '#FEFEFE',
      name: 'Recraft AI',
      url: 'https://www.recraft.ai/',
    },
  ],
};

// Flatten all skills for DomeGallery
const ALL_SKILLS = Object.values(SKILLS_BY_CATEGORY).flat();

function SkillCard({ skill, index }) {
  const IconComponent = skill.icon;

  return (
    <a
      href={skill.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm
                 rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600
                 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20
                 cursor-pointer block"
      style={{
        animationDelay: `${index * 50}ms`,
      }}
    >
      <div className="flex flex-col items-center gap-4">
        <div
          className="relative p-4 rounded-xl bg-gradient-to-br from-gray-700/30 to-gray-800/30
                     group-hover:scale-110 transition-transform duration-300"
        >
          <IconComponent
            size={48}
            color={skill.color}
            className="drop-shadow-lg filter group-hover:drop-shadow-2xl transition-all duration-300"
          />
          <div
            className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"
            style={{ backgroundColor: skill.color }}
          />
        </div>
        <div className="text-center">
          <h3 className="text-white font-semibold text-lg">{skill.name}</h3>
        </div>
      </div>
    </a>
  );
}

function SkillCategory({ category, skills }) {
  return (
    <div className="mb-12 animate-fade-in">
      <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
        <span
          className="w-2 h-8 rounded-full"
          style={{ background: gradients.primary.cyan }}
        />
        {category}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} skill={skill} index={index} />
        ))}
      </div>
    </div>
  );
}

function SkillStackPage() {
  const [viewMode, setViewMode] = useState('dome'); // 'list' or 'dome'

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        position: 'relative',
        overflow: viewMode === 'list' ? 'auto' : 'hidden',
      }}
    >
      {/* Compact View Toggle */}
      <div className="fixed top-8 left-8 z-50">
        <div className="flex items-center gap-2 bg-gray-800/80 backdrop-blur-md rounded-full p-1 border border-gray-700/50 shadow-xl">
          <button
            onClick={() => setViewMode('list')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              viewMode === 'list'
                ? 'text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            }`}
            style={
              viewMode === 'list'
                ? { background: gradients.primary.cyan }
                : undefined
            }
          >
            List
          </button>
          <button
            onClick={() => setViewMode('dome')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              viewMode === 'dome'
                ? 'text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            }`}
            style={
              viewMode === 'dome'
                ? { background: gradients.primary.cyan }
                : undefined
            }
          >
            3D
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="relative w-full h-full">
        {/* List View */}
        {viewMode === 'list' && (
          <div className="pt-24 pb-20 px-8 max-w-7xl mx-auto">
            {Object.entries(SKILLS_BY_CATEGORY).map(([category, skills]) => (
              <SkillCategory
                key={category}
                category={category}
                skills={skills}
              />
            ))}
          </div>
        )}

        {/* Dome Gallery View */}
        {viewMode === 'dome' && (
          <div className="w-full h-full">
            <DomeGallery skills={ALL_SKILLS} iconSize={100} grayscale={false} />
          </div>
        )}
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default SkillStackPage;
