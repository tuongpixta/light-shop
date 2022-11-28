import { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

const Footer: FC = () => {
  return (
    <Box bgcolor="#1C3FAA" color="#fff">
      <Stack
        direction="row"
        gap={4}
        justifyContent="space-between"
        p={2}
        maxWidth={1024}
        m="auto"
      >
        <img src="" alt="logo" />
        <Stack gap={2}>
          <h2>Contact</h2>
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <LocalPhoneOutlinedIcon />
            0988777777
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <EmailOutlinedIcon />
            0988777777
          </Box>
          <Box display="flex" flexDirection="row" alignItems="center" gap={1}>
            <LocationOnOutlinedIcon />
            0988777777
          </Box>
        </Stack>
        <Stack gap={2}>
          <h2>Danh mucj sp</h2>
          <span>Den led</span>
          <span>Den led</span>
          <span>Den led</span>
          <span>Den led</span>
        </Stack>
        <Stack gap={2}>
          <h2>Thong tin</h2>
          <span>Den led</span>
          <span>Den led</span>
          <span>Den led</span>
        </Stack>
      </Stack>
      <Box maxWidth={1024} paddingX={2} m="auto">
        <hr />
      </Box>
      <Stack
        maxWidth={1024}
        direction="row"
        justifyContent="space-between"
        p={2}
        m="auto"
        color="gray"
      >
        <span>© 2022 Tech500 JSC. All rights reserved.</span>
        <span>Privacy policy | Disclaimer</span>
      </Stack>
    </Box>
  );
};

export default Footer;
