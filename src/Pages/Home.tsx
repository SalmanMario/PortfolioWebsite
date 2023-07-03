import { Box, Grid } from "@mui/material";
import { AboutComponent } from "../components/Info/AboutComponent";
import { HomeComponent } from "../components/Info/HomeComponent";
import { CardProject } from "../components/CardProject";
import { CardInformation } from "../cardData";

export function Home() {
  return (
    <Box id="fullheight">
      <Box className="intro-container" id="home">
        <HomeComponent />
      </Box>
      <Box className="about-container" id="about">
        <AboutComponent />
      </Box>
      <Box className="pokemon-container" id="projects">
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
