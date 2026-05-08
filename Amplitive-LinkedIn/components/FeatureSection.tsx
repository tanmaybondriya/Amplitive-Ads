import React from "react";
import CampaignOrganizationCard from "./cards/CampaignFlow";
import AssetReadinessCard from "./cards/AssetReadiness";
import WorkflowAlignmentCard from "./cards/Workflow";
import SharedVisibilityCard from "./cards/Shared";

const FeatureSection = () => {
  return (
    <section className="bg-[#020617] py-12 pb-6 md:py-20 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <CampaignOrganizationCard />
        <AssetReadinessCard />
        <WorkflowAlignmentCard />
        <SharedVisibilityCard />
      </div>
    </section>
  );
};

export default FeatureSection;
