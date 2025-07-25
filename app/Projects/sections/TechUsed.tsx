"use client"
import { useEffect, useState } from "react";
import { Gravity, MatterBody } from "../components/gravity";
import "./TechUsed.css";

function Page() {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="preview-container">
      <div className="text-wrapper">
        <div className="fancy-title satoshibold">
          The Stack That Stacks <br /> (Most Days)
        </div>
        <p className="subtitle xanh">
          Sure, I know more — these are just the ones I actually{" "}
          <span className="xanhitalic">enjoy</span> using.
        </p>
      </div>

      {isDesktop ? (
        <Gravity gravity={{ x: 0, y: 1 }} className="gravity-wrapper">
          {[
            { className: "nextjs", label: "Nextjs", x: "20%", y: "10%" },
            { className: "react", label: "React", x: "35%", y: "15%" },
            { className: "supabase", label: "Supabase", x: "50%", y: "8%", angle: 15 },
            { className: "css", label: "CSS", x: "65%", y: "12%" },
            { className: "tailwind", label: "Tailwind", x: "80%", y: "18%" },
            { className: "typescript", label: "Typescript", x: "25%", y: "25%", angle: -10 },
            { className: "javascript", label: "Javascript", x: "45%", y: "22%" },
            { className: "node", label: "Node Js", x: "70%", y: "25%", angle: 20 },
            { className: "express", label: "Express", x: "30%", y: "35%" },
            { className: "cassandra", label: "Cassandra", x: "60%", y: "30%", angle: -15 },
          ].map((item, i) => (
            <MatterBody
              key={i}
              matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
              x={item.x}
              y={item.y}
              angle={item.angle}
            >
              <div className={`tech-badge tech-badge--${item.className}`}>
                {item.label}
              </div>
            </MatterBody>
          ))}
        </Gravity>
      ) : (
        <div className="gravity-wrapper mobile-badges">
          <div className="tech-badge tech-badge--nextjs">Nextjs</div>
          <div className="tech-badge tech-badge--react">React</div>
          <div className="tech-badge tech-badge--supabase">Supabase</div>
          <div className="tech-badge tech-badge--css">CSS</div>
          <div className="tech-badge tech-badge--tailwind">Tailwind</div>
          <div className="tech-badge tech-badge--typescript">Typescript</div>
          <div className="tech-badge tech-badge--javascript">Javascript</div>
          <div className="tech-badge tech-badge--node">Node Js</div>
          <div className="tech-badge tech-badge--express">Express</div>
          <div className="tech-badge tech-badge--cassandra">Cassandra</div>
        </div>

      )}
    </div>
  );
}

export default function TechUsed() {
  return (
    <main className="main-container">
      <Page />
    </main>
  );
}
