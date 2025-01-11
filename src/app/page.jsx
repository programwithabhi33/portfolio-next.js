import { AboutMyResumeAndMore } from "./home/AboutMyResumeAndMore";
import Main from "./home/Main";
import { ProjectContribution } from "./home/ProjectContribution";
import { WhatIDo } from "./home/WhatIDo";

export default function Home() {
  return (
    <>
      <Main />
      <WhatIDo/>
      <ProjectContribution/>
      <AboutMyResumeAndMore/>
    </>
  );
}
