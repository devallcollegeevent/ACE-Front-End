"use client";

// Import individual About page sections and shared components.
// Each import corresponds to a visual section rendered on the About page.
import JourneyNumbers from "../../components/global/About/JourneyNumbers/JourneyNumbers";
import StandFor from "../../components/global/About/StandFor/StandFor";
import StoryBehindFest from "../../components/global/About/StoryBehindFest/StoryBehindFest";
import VoiceOfTrust from "../../components/global/About/VoiceOfTrust/VoiceOfTrust";
import Footer from "../../components/global/Footer/Footer";
import WhyChoose from "../../components/global/WhyChoose/WhyChoose";


/**
 * AboutPage
 *
 * Top-level client component that composes the About page by rendering
 * individual section components in the intended reading order.
 *
 * Order:
 *  - StoryBehindFest: introduces the festival's origin and purpose
 *  - StandFor: what the organization/festival stands for (values/mission)
 *  - JourneyNumbers: highlights milestones and numerical achievements
 *  - VoiceOfTrust: testimonials or trust indicators
 *  - WhyChoose: reasons to engage/attend/participate
 *  - Footer: global site footer
 *
 */

export default function AboutPage() {
  return (
    <>
      {/* Introductory story behind the festival */}
      <StoryBehindFest />

      {/* Core values / mission statement */}
      <StandFor />

      {/* Visual counters and milestone numbers */}
      <JourneyNumbers />

      {/* Testimonials, partners, or trust signals */}
      <VoiceOfTrust />

      {/* Reasons to choose/attend the festival */}
      <WhyChoose />

      {/* Site footer (contact, links, copyright) */}
      <Footer/>
    </>
  );
}
