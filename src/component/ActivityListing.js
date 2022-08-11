import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

export default function ActivityListing({ activityList }) {
  const getActivityContent = (name, action, target) => {
    switch (action) {
      case "increased_quota":
        return `${name} increased ${target}'s quota.`;
      case "added_leads":
        return `${name} added new leads to ${target}.`;
      case "archived_team":
        return `${name} archived the team ${target}.`;
      default:
        return "";
    }
  };

  return (
    <Box
      bgcolor="#fff"
      boxShadow="0px 0px 4px rgba(0, 0, 0, 0.05), 0px 0px 30px rgba(0, 0, 0, 0.1)"
      paddingTop={3.5}
      marginLeft={{ md: 4 }}
    >
      <Box
        borderBottom="1px solid #EFEFEF"
        paddingX={3.5}
        paddingBottom={2}
        marginBottom={3}
      >
        <Typography fontSize={18} fontWeight={600}>
          Activity
        </Typography>
      </Box>

      <Box display="flex" flexDirection="column" paddingX={3.5}>
        {activityList.length > 0 ? (
          <>
            {activityList.map(({ id, person, action, target, created_at }) => (
              <Box key={id} display="flex" marginBottom={2.5}>
                <Avatar alt={person.name} src={person.avatar} />
                <Box marginLeft={1}>
                  <Typography color="#444444" fontSize={14} maxWidth={200}>
                    {getActivityContent(person.name, action, target)}
                  </Typography>
                  <Typography
                    color="#565656"
                    fontSize={13}
                    marginTop={0.5}
                    sx={{ opacity: 0.5 }}
                  >
                    {created_at}
                  </Typography>
                </Box>
              </Box>
            ))}
          </>
        ) : (
          <Typography fontSize={16} fontWeight={600} paddingBottom={2.5}>
            No activity found.
          </Typography>
        )}
      </Box>
    </Box>
  );
}
