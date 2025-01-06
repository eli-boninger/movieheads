import { Box, Typography } from "@mui/material";
import { crimsonPro } from "./ui/fonts";

export default function Home() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Typography variant="h1" className={`${crimsonPro.variable}`}>Movies matter.</Typography>
    </Box>

  );
}
