import { Box, Grid, Typography } from "@mui/material";
import Poza from "../../img/Eu.png";
import { NavLink } from "react-router-dom";
export function HomeComponent() {
  return (
    <Grid container>
      <Grid item md={8} xs={12}>
        <Typography gutterBottom variant="h2">
          React Front-End Developer 👋🏻
        </Typography>
        <Typography variant="h4">
          Hello there! I'm Mario, an enthusiastic Front-End Developer eager to create amazing websites.
        </Typography>
      </Grid>
      <Grid item sx={{ display: "flex", justifyContent: "center", marginBottom: 4 }} md={4} xs={12}>
        <img src={Poza} className="myImg" alt="My Image" />
      </Grid>
      <Grid item md={4} xs={12}>
        <Typography className="mobileText" color={"#149ECA"} variant="h4">
          Technologies |{" "}
        </Typography>
      </Grid>
      <Grid item md={8} xs={12}>
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
      <Grid mt={8} className="socialLink" container>
        <Grid item md={8} xs={12}>
          <Typography className="mobileText" variant="h3">
            You can find me on Github or Linkedin
          </Typography>
        </Grid>
        <Grid item className="iconSocialMobile" md={4} xs={12}>
          <NavLink to={"https://www.linkedin.com/in/mario-salman/"} target="_blank">
            <img
              className="iconSocial"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            />
          </NavLink>
          <NavLink to={"https://github.com/SalmanMario"} target="_blank">
            <img
              className="iconSocial"
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            />
          </NavLink>
        </Grid>
      </Grid>
    </Grid>
  );
}
