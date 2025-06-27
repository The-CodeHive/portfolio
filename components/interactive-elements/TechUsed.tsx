import React from 'react';


interface TechUsedProps {
  tech: string[];
  direction?: 'row' | 'column';
  colorScheme?: 'white' | 'black';
}

const techIconsSimple: Record<string, string> = {
  'Next.js': 'nextdotjs',
  'Node.js': 'nodedotjs',
  'React': 'react',
  'TypeScript': 'typescript',
  'JavaScript': 'javascript',
  'HTML': 'html5',
  'CSS': 'css3',
  'Express': 'express',
  'MongoDB': 'mongodb',
  'PostgreSQL': 'postgresql',
};

const getIconUrl = (tech: string, colorScheme: 'white' | 'black' = 'black') => {
  const id = techIconsSimple[tech];
  if (!id) return '';
  const color = colorScheme === 'white' ? 'ffffff' : '000000';
  return `https://cdn.simpleicons.org/${id}/${color}`;
};

const TechUsed: React.FC<TechUsedProps> = ({ tech, direction = 'row', colorScheme = 'black' }) => {
  return (
    <div className={`tech-used-wrapper ${direction}`}>
      {tech.map((name) => {
        const logo = getIconUrl(name, colorScheme);
        return (
          <div className="tech-logo-only" key={name}>
            {logo && <img src={logo} alt={name} className="tech-used-logo" />}
          </div>
        );
      })}
    </div>
  );
};

export default TechUsed;
