
import React from 'react';

interface RetroButtonProps {
  text: string;
  link: string;
}

const RetroButton: React.FC<RetroButtonProps> = ({ text, link }) => {
  return (
    <a href={link} className="retro-link-wrapper" target='_blank'>
      <button className="retro-button">{text}</button>
    </a>
  );
};

export default RetroButton;
