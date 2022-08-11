import React from "react";
import "./App.css";
import { Box, CssBaseline, Grid } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import Sidebar from "./component/Sidebar";
import Navbar from "./component/Navbar";
import Header from "./component/Header";
import TeamListing from "./component/TeamListing";
import ActivityListing from "./component/ActivityListing";
import theme from "./theme";
import Data from "./data.json";

function App() {
  const currentUser = Data.current_user;
  const teamList = Data.teams;
  const activityList = Data.activities;

  const [tabIndex, setTabIndex] = React.useState(0);
  const [filteredTeamList, setFilteredTeamList] = React.useState(teamList);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        display="flex"
        justifyContent="space-between"
        width="100%"
        height="100vh"
      >
        {/* Side Bar */}
        <Sidebar />

        {/* Main Content */}
        <Box width="100%" bgcolor="#E5E5E5" flex="1 1 auto" overflow="auto">
          {/* Nav Bar */}
          <Navbar currentUser={currentUser} />

          {/* Header */}
          <Header
            tabIndex={tabIndex}
            setTabIndex={setTabIndex}
            teamList={teamList}
            setFilteredTeamList={setFilteredTeamList}
          />

          <Grid
            container
            spacing={{ xs: 1, md: 0 }}
            sx={{
              width: "100%",
              paddingX: { xs: 2, md: 5 },
              paddingTop: { xs: 2, md: 5 },
            }}
          >
            {/* Team Listings */}
            <Grid item xs={12} md={9}>
              <TeamListing
                filteredTeamList={filteredTeamList}
                tabIndex={tabIndex}
              />
            </Grid>

            {/* Activities */}
            <Grid item xs={12} md={3}>
              <ActivityListing activityList={activityList} />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
