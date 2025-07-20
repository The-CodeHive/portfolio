"use client"
import { Gravity, MatterBody } from "../components/gravity"
import "./TechUsed.css"

function Page() {
  return (
    <div className="preview-container">
      <div className="text-wrapper">
        <div className="fancy-title satoshibold">The Stack That Stacks <br/>(Most Days)</div>
          <p className="subtitle xanh">Sure, I know more — these are just the ones I actually <span className="xanhitalic">enjoy</span> using.</p>
      </div>
      <Gravity gravity={{ x: 0, y: 1 }} className="gravity-wrapper">
        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="20%" y="10%">
          <div className="tech-badge tech-badge--nextjs">Nextjs</div>
        </MatterBody>
        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="35%" y="15%">
          <div className="tech-badge tech-badge--react">React</div>
        </MatterBody>
        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="50%" y="8%" angle={15}>
          <div className="tech-badge tech-badge--supabase">Supabase</div>
        </MatterBody>
        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="65%" y="12%">
          <div className="tech-badge tech-badge--css">CSS</div>
        </MatterBody>
        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="80%" y="18%">
          <div className="tech-badge tech-badge--tailwind">Tailwind</div>
        </MatterBody>
        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="25%" y="25%" angle={-10}>
          <div className="tech-badge tech-badge--typescript">Typescript</div>
        </MatterBody>
        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="45%" y="22%">
          <div className="tech-badge tech-badge--javascript">Javascript</div>
        </MatterBody>
        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="70%" y="25%" angle={20}>
          <div className="tech-badge tech-badge--node">Node Js</div>
        </MatterBody>
        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="30%" y="35%">
          <div className="tech-badge tech-badge--express">Express </div>
        </MatterBody>
        <MatterBody matterBodyOptions={{ friction: 0.5, restitution: 0.2 }} x="60%" y="30%" angle={-15}>
          <div className="tech-badge tech-badge--cassandra">Cassandra</div>
        </MatterBody>
      </Gravity>
    </div>
  )
}

export default function TechUsed() {
  return (
    <main className="main-container">
      <Page />
    </main>
  )
}
