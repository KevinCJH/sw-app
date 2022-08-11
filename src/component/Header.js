import React from "react";
import { Box, Button, Tab, Tabs, TextField, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { ReactComponent as TeamsSvg } from "../images/icon-teams.svg";
import { ReactComponent as AddSvg } from "../images/icon-add.svg";

export default function Header({
  tabIndex,
  setTabIndex,
  teamList,
  setFilteredTeamList,
}) {
  const handleChange = (event, newIndex) => {
    setTabIndex(newIndex);
    switch (newIndex) {
      case 1:
        return setFilteredTeamList(
          teamList.filter(({ is_favorited }) => is_favorited)
        );
      case 2:
        return setFilteredTeamList(
          teamList.filter(({ is_archived }) => is_archived)
        );
      case 0:
      default:
        return setFilteredTeamList(teamList);
    }
  };

  return (
    <Box
      bgcolor="#fff"
      boxShadow="0px 0px 20px -5px rgba(0, 0, 0, 0.1)"
      paddingTop={4}
      paddingX={5}
      width="100%"
    >
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Box display="flex" alignItems="center">
          <TeamsSvg fill="#A4A6A8" />
          <Typography
            color="#1A1919"
            fontSize={30}
            fontWeight={600}
            marginLeft={1.5}
          >
            Teams
          </Typography>
        </Box>
        <Button
          sx={{
            color: "#fff",
            borderRadius: "4px",
            backgroundColor: "#40D2BF",
            paddingX: 1.5,
            "&:hover": {
              cursor: "pointer",
              backgroundColor: "#33ab9b",
            },
          }}
        >
          <AddSvg fill="#fff" />
          <Typography
            fontSize={14}
            marginLeft={2}
            sx={{ display: { xs: "none", md: "block" } }}
          >
            CREATE NEW TEAM
          </Typography>
        </Button>
      </Box>

      <Box marginTop={3} display="flex" justifyContent="space-between">
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          sx={{
            "& .MuiTab-root": {
              color: "#000",
              fontSize: 18,
              fontWeight: 600,
              textTransform: "none",
            },
          }}
        >
          <Tab label="All" />
          <Tab label="Favourites" />
          <Tab label="Archived" />
        </Tabs>

        <Box
          display="flex"
          alignItems="flex-end"
          marginBottom={1}
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <SearchIcon sx={{ color: "#999999", mr: 1, my: 0.5 }} />
          <TextField
            placeholder="Search team name ..."
            variant="standard"
            sx={{ fontSize: 16 }}
            InputProps={{ disableUnderline: true }}
          />
        </Box>
      </Box>
    </Box>
  );
}
