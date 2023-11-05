import React, { PropsWithChildren } from "react";


interface SponsorSectionProps extends PropsWithChildren {
    title: string;
    color: string;
  }
  
  const SponsorSection = ({ title, color, children }: SponsorSectionProps) => (
    <>
      <div>
        <header style={{color}}>
          <h2>{title} Tier</h2>
        </header>
        <div>{children}</div>
      </div>
    </>
  );

export default SponsorSection;
