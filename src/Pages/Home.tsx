import { Box, Grid, Typography, useMediaQuery, useTheme } from "@mui/material";
import { AboutComponent } from "../components/Info/AboutComponent";
import { HomeComponent } from "../components/Info/HomeComponent";
import { CardProject } from "../components/CardProject";
import { CardInformation } from "../cardData";
import clsx from "clsx";
import { Contact } from "../components/Info/Contact";
import { Reveal } from "../components/Reveal";
import { motion } from "framer-motion";

export function Home() {
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down("md"));

  const centeredSection = clsx(!mobile && "intro-container", mobile && "mobile-intro-container");

  return (
    <Box id="fullheight">
      <Box className={centeredSection} id="home">
        <Reveal>
          <HomeComponent />
        </Reveal>
      </Box>
      <Box className={centeredSection} id="about">
        <motion.div whileHover={{ scale: 1.1 }}>
          <Reveal>
            <AboutComponent />
          </Reveal>
        </motion.div>
      </Box>
      <Box id="projects">
        <Typography mb={8} textAlign={"center"} variant="h3">
          Each project has it's own identity and purpose
        </Typography>
        <Reveal>
          <Grid container justifyContent="center">
            {CardInformation.map((elem) => (
              <Grid key={elem.id} mb={4}>
                <CardProject data={elem} />
              </Grid>
            ))}
          </Grid>
        </Reveal>
      </Box>
      <Box id="contact">
        <Reveal>
          <Contact />
        </Reveal>
      </Box>
    </Box>
  );
}
