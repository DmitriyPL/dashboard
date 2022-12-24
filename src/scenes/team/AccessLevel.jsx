import React from 'react';

import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";

import {
    AdminPanelSettingsOutlinedIcon,
    LockOpenOutlinedIcon,
    SecurityOutlinedIcon } from '../../MUI/Icons';

const AccessLevel = ({ access }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <Box
            width="60%"
            m="0 auto"
            p="5px"
            display="flex"
            justifyContent="center"
            backgroundColor={
              access === "admin"
                ? colors.greenAccent[600]
                : access === "manager"
                ? colors.greenAccent[700]
                : colors.greenAccent[700]
            }
            borderRadius="4px"
        >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
              {access}
            </Typography>
        </Box>
    );
}

export default AccessLevel;
