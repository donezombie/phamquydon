import React from "react";

import useScrollProgressBar from "../hooks/useScrollProgressBar";
import SpaceContainer from "../components/SpaceContainer";
import AboutMeSection from "../components/Sections/AboutMeSection";
import SkillsSection from "../components/Sections/SkillsSection";
import ProjectsSection from "../components/Sections/ProjectsSection";

export default function Index() {
  useScrollProgressBar();

  return (
    <div className="root">
      <SpaceContainer>
        <AboutMeSection />
      </SpaceContainer>

      <SpaceContainer>
        <SkillsSection />
      </SpaceContainer>

      <SpaceContainer>
        <ProjectsSection />
      </SpaceContainer>
    </div>
  );
}
