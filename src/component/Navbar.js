import React from "react";
import { Avatar, Badge, Box, Typography } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { ReactComponent as MailSvg } from "../images/icon-mail.svg";

export default function Navbar({ currentUser }) {
  return (
    <Box
      bgcolor="#fff"
      borderBottom="2px solid #E2E2E2"
      display="flex"
      justifyContent="space-between"
      width="100%"
    >
      <Box display="flex" alignItems="center">
        <Box paddingX={5} sx={{ display: { xs: "none", md: "block" } }}>
          <Typography
            color="#1A1919"
            fontSize={18}
            fontWeight={600}
            textTransform="uppercase"
            sx={{ opacity: 0.5 }}
          >
            Narwhal
          </Typography>
        </Box>
        <Box paddingX={3.5} borderLeft="2px solid #E2E2E2">
          <Typography fontSize={18} paddingY={3.5}>
            Teams
          </Typography>
        </Box>
      </Box>

      <Box display="flex" alignItems="center">
        <Badge
          badgeContent={currentUser.notifications_count || 0}
          color="primary"
          sx={{
            marginRight: 4,
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Box width={22} height={22}>
            <MailSvg stroke="#444444" />
          </Box>
        </Badge>

        <Box
          display="flex"
          alignItems="center"
          marginRight={5}
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <Typography
            marginRight={1}
            fontSize={14}
            sx={{ opacity: 0.7, display: { xs: "none", md: "block" } }}
          >
            Hello, {currentUser.name || "User"}
          </Typography>
          <Avatar alt={currentUser.name} src={currentUser.avatar} />

          <Box
            marginTop={1}
            sx={{
              opacity: 0.45,
            }}
          >
            <ArrowDropDownIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
