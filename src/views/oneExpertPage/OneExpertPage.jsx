import React from "react";
import "./OneExpertPageStyle.scss"
import BannerComponet from "./components/BannerComponet";
import ProvenSpeedUpComponent from "./components/ProvenSpeedUpComponent";
import ExperienceComponent from "./components/ExperienceComponent";

export default function OneExpertPage() {
  return (
    <div className="OneExpertPage">
      <BannerComponet />
      <ProvenSpeedUpComponent />
      <ExperienceComponent />
    </div>
  );
}
