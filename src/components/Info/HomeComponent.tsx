import { Box, Grid, Typography } from "@mui/material";
import Poza from "../../images/Eu.png";
export function HomeComponent() {
  return (
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
      <Grid sx={{}} item md={8} xs={12}>
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
      <Box>
        <h1>Aici trebuie sa adaug linkedin</h1>
        <h1>Aici trebuie sa adaug Github</h1>
      </Box>
    </Grid>
  );
}
