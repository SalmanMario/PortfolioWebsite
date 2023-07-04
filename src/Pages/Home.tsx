import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { AboutComponent } from "../components/Info/AboutComponent";
import { HomeComponent } from "../components/Info/HomeComponent";
import { CardProject } from "../components/CardProject";
import { CardInformation } from "../cardData";
import clsx from "clsx";

export function Home() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const centeredSection = clsx(!mobile && "intro-container", mobile && "mobile-intro-container");

  return (
    <Box id="fullheight">
      <Box className={centeredSection} id="home">
        <HomeComponent />
      </Box>
      <Box className={centeredSection} id="about">
        <AboutComponent />
      </Box>
      <Box id="projects">
        <Typography mb={8} textAlign={"center"} variant="h3">
          Each project has it's own identity and purpose
        </Typography>
        <Grid container justifyContent="center">
          {CardInformation.map((elem) => (
            <Grid key={elem.id} mb={4}>
              <CardProject data={elem} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
