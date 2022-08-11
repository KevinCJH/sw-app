import React from "react";
import { Box } from "@mui/material";
import { ReactComponent as LogoSvg } from "../images/sw-logo-white.svg";
import { ReactComponent as CampaignSvg } from "../images/icon-campaign.svg";
import { ReactComponent as HelpSvg } from "../images/icon-help.svg";
import { ReactComponent as LeadsSvg } from "../images/icon-leads.svg";
import { ReactComponent as ReportsSvg } from "../images/icon-reports.svg";
import { ReactComponent as TeamsSvg } from "../images/icon-teams.svg";
import theme from "../theme";

export function NavItem({
  children,
  logo = false,
  selected = false,
  ...props
}) {
  return (
    <Box
      width={80}
      height={80}
      padding={3}
      sx={{
        backgroundColor: selected ? theme.palette.primary.main : "transparent",
        opacity: logo || selected ? 1 : 0.3,
        "&:hover": {
          cursor: "pointer",
          backgroundColor: logo ? "transparent" : theme.palette.primary.main,
          opacity: logo || selected ? 1 : 0.6,
        },
      }}
      {...props}
    >
      {children}
    </Box>
  );
}

export default function Sidebar() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      sx={{
        backgroundColor: "#042235",
        boxShadow:
          "rgba inset 0px 1px 3px (0, 0, 0, 0.5), inset -4px 0px 4px rgba(2, 15, 24, 0.569466",
      }}
    >
      <NavItem logo>
        <LogoSvg fill="#fff" />
      </NavItem>
      <NavItem>
        <CampaignSvg fill="#fff" />
      </NavItem>
      <NavItem selected>
        <TeamsSvg fill="#fff" />
      </NavItem>
      <NavItem>
        <LeadsSvg fill="#fff" />
      </NavItem>
      <NavItem>
        <ReportsSvg fill="#fff" />
      </NavItem>
      <NavItem marginTop="auto">
        <HelpSvg fill="#fff" />
      </NavItem>
    </Box>
  );
}
