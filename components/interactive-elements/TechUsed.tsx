import React from 'react';

interface TechUsedProps {
  tech: string[];
  direction?: 'row' | 'column';
  colorScheme?: 'white' | 'black';
}

const techIconsSimple: Record<string, string> = {
  'Next.js':      'https://cdn.simpleicons.org/nextdotjs/000000',
  'React':        'https://cdn.simpleicons.org/react/000000',
  'Node.js':      'https://cdn.simpleicons.org/nodedotjs/000000',
  'TypeScript':   'https://cdn.simpleicons.org/typescript/000000',
  'JavaScript':   'https://cdn.simpleicons.org/javascript/000000',
  'HTML':         'https://cdn.simpleicons.org/html5/000000',
  'CSS':          'https://cdn.simpleicons.org/css3/000000',
  'Express':      'https://cdn.simpleicons.org/express/000000',
  'MongoDB':      'https://cdn.simpleicons.org/mongodb/000000',
  'PostgreSQL':   'https://cdn.simpleicons.org/postgresql/000000',
  'Socket.io':    'https://cdn.simpleicons.org/socketdotio/000000',
  'CodeMirror':   'https://cdn.simpleicons.org/codemirror/000000',
  'WebRTC':       'https://cdn.simpleicons.org/webrtc/000000',
  'GitHub':       'https://cdn.simpleicons.org/github/000000',
  'Vercel':       'https://cdn.simpleicons.org/vercel/000000',
  'Tailwind CSS': 'https://cdn.simpleicons.org/tailwindcss/000000',
  'Clerk':        'https://cdn.simpleicons.org/clerk/000000'
};


const TechUsed: React.FC<TechUsedProps> = ({
  tech,
  direction = 'row',
  colorScheme = 'black',
}) => {
  const colorHex = colorScheme === 'white' ? 'fffdf1' : '201719';

  return (
    <div
      className={`tech-used-wrapper ${direction}`}
      style={{ display: 'flex', flexDirection: direction }}
    >
      {tech.map((name) => {
        let logoUrl = techIconsSimple[name] || '';
        // swap to white if needed
        if (logoUrl && colorScheme === 'white') {
          logoUrl = logoUrl.replace(/\/[0-9a-fA-F]{6}$/, `/${colorHex}`);
        }

        return (
          <div
            className="tech-logo-only"
            key={name}
            style={{ margin: '0.001rem', textAlign: 'center' }}
          >
            {logoUrl ? (
              <img
                src={logoUrl}
                alt={`${name} logo`}
                className="tech-used-logo"
              />
            ) : (
              <span>{name}</span>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TechUsed;
