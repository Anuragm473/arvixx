import React from 'react'
import Hero from './Hero/Hero'
import BootcampSection from './BootcampSection/BootcampSection'
import MissionSection from './MissionSection/MissionSection'
import ForInstitute from './ForInstitute'
import Component from './component/Component'
import CommunitySection from './CommunitySection/CommunitySection'
import YourComponent from './YourComponent/YourComponent'
import SkillsComponent from './SkillsComponent'

export default function HomePage() {
  return (
    <>
    <Hero/>
    <BootcampSection/>
    <MissionSection/>
    <ForInstitute/>
    <SkillsComponent/>
    <CommunitySection/>
    <YourComponent/>
    </>
  )
}
