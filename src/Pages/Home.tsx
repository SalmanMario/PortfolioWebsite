import { Box, Grid, Typography } from "@mui/material";
import Poza from "../images/Eu.png";
import Laptop from "../images/Code.png";

export function Home() {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Grid container>
          <Grid item md={8} xs={12}>
            <Typography gutterBottom variant="h2">
              Junior React Front-End Developer 👋🏻
            </Typography>
            <Typography variant="h4">
              Hello there! I'm Mario, an enthusiastic Junior Front-End Developer eager to create amazing websites.
            </Typography>
          </Grid>
          <Grid item sx={{ display: "flex", justifyContent: "center", marginBottom: 8 }} md={4} xs={12}>
            <img src={Poza} className="myImg" alt="My Image" />
          </Grid>
          <Grid item md={4} xs={12}>
            <Typography color={"#149ECA"} variant="h4">
              Technologies |{" "}
            </Typography>
          </Grid>
          <Grid sx={{ display: "flex", justifyContent: "center" }} item md={8} xs={12}>
            <Box>
              <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
              <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
              <img
                className="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
              <img
                className="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              />
              <img className="icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              <img
                className="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              />
              <img
                className="icon"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg"
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <section id="about">
        <Box>
          <Grid container>
            <Grid item md={6} xs={12}>
              <img className="laptopImg" src={Laptop} alt="" />
            </Grid>
            <Grid item md={6} xs={12}>
              <Typography variant="h3">About Me</Typography>
              <Typography my={2} color={"white"} variant="h3">
                A enthusiastic Junior Front-End Developer
              </Typography>
              <Typography my={2} variant="h6">
                As a junior front-end developer, I am driven by a deep-seated curiosity to explore the latest
                programming concepts and emerging technology trends. React has been a particular area of interest, with
                its powerful features and versatility. I am constantly seeking out new challenges and opportunities to
                expand my skills and expertise, eager to stay at the forefront of this exciting field.
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </section>
    </Box>
  );
}
