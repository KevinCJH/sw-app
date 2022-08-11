import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import { ReactComponent as CampaignSvg } from "../images/icon-campaign.svg";
import { ReactComponent as LeadsSvg } from "../images/icon-leads.svg";

export function Image(props) {
  return (
    <Box
      component="img"
      sx={{
        width: "100%",
        objectFit: "contain",
      }}
      alt="Image"
      {...props}
    />
  );
}

export default function TeamListing({ filteredTeamList, tabIndex }) {
  const getListingTitle = () => {
    switch (tabIndex) {
      case 1:
        return "Favourite Teams";
      case 2:
        return "Archived Teams";
      case 0:
      default:
        return "All Teams";
    }
  };

  return (
    <Box
      bgcolor="#fff"
      boxShadow="0px 0px 4px rgba(0, 0, 0, 0.05), 0px 0px 30px rgba(0, 0, 0, 0.1)"
      paddingY={3.5}
      width="100%"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom="1px solid #EFEFEF"
        paddingX={3.5}
        paddingBottom={2}
      >
        <Typography fontSize={18} fontWeight={600}>
          {getListingTitle()}
        </Typography>
        {filteredTeamList.length > 0 && (
          <Typography color="#7F7F7F" fontSize={14}>
            Showing {filteredTeamList.length} out of {filteredTeamList.length}{" "}
            teams
          </Typography>
        )}
      </Box>

      <Grid container spacing={3} marginTop={3} paddingX={3.5}>
        {filteredTeamList.length ? (
          filteredTeamList.map(
            ({
              id,
              name,
              image,
              description,
              campaigns_count,
              leads_count,
              is_favorited,
              is_archived = false,
              created_at,
            }) => (
              <Grid item key={id} xs={12} md={4}>
                <Box
                  border="1px solid #E4E7EC"
                  borderRadius="4px"
                  paddingY={2}
                  bgcolor={is_archived ? "#E4E7EC" : "#fff"}
                >
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    paddingX={2}
                  >
                    <Box display="flex">
                      <Image
                        alt={name}
                        src={image}
                        bgcolor="#D8D8D8"
                        borderRadius="3px"
                        maxWidth={36}
                      />
                      <Box marginLeft={1}>
                        <Typography
                          color="#444444"
                          fontSize={16}
                          fontWeight={600}
                        >
                          {name}
                        </Typography>
                        <Typography
                          color="#565656"
                          fontSize={13}
                          sx={{ opacity: 0.55 }}
                        >
                          {is_archived ? "Archived " : "Created "}
                          {created_at}
                        </Typography>
                      </Box>
                    </Box>
                    {!is_archived && (
                      <>
                        {is_favorited ? (
                          <StarIcon
                            sx={{
                              color: "#F8CE43",
                              "&:hover": {
                                cursor: "pointer",
                              },
                            }}
                          />
                        ) : (
                          <StarBorderOutlinedIcon
                            sx={{
                              color: "#444444",
                              opacity: 0.3,
                              "&:hover": {
                                cursor: "pointer",
                              },
                            }}
                          />
                        )}
                      </>
                    )}
                  </Box>
                  <Box
                    borderBottom="1px solid #E4E7EC"
                    paddingX={2}
                    marginTop={2}
                  >
                    <Typography
                      color="#565656"
                      fontSize={14}
                      marginBottom={2}
                      sx={{
                        maxWidth: "100%",
                        display: "-webkit-box",
                        WebkitBoxOrient: "vertical",
                        WebkitLineClamp: 2,
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                      }}
                    >
                      {description}
                    </Typography>
                  </Box>

                  <Box
                    display="flex"
                    paddingX={2}
                    marginTop={2.5}
                    alignItems="center"
                    sx={{ "& > svg": { opacity: 0.8 } }}
                  >
                    <CampaignSvg fill="#000" width={16} height={15} />
                    <Typography
                      fontSize={14}
                      marginX={1}
                      sx={{ opacity: 0.55 }}
                    >
                      {campaigns_count} Campaigns
                    </Typography>
                    <LeadsSvg fill="#000" width={16} height={15} />
                    <Typography
                      fontSize={14}
                      marginLeft={1}
                      sx={{ opacity: 0.55 }}
                    >
                      {leads_count} Leads
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            )
          )
        ) : (
          <Typography fontSize={16} fontWeight={600} paddingX={3}>
            No teams found.
          </Typography>
        )}
      </Grid>
    </Box>
  );
}
