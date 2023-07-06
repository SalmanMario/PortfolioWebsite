import { Box, Grid, Typography } from "@mui/material";
import Code from "../../img/Code.png";
export function AboutComponent() {
  return (
    <Box>
      <Grid container>
        <Grid item md={6} xs={12}>
          <img className="laptopImg" src={Code} alt="" />
        </Grid>
        <Grid item md={6} xs={12}>
          <Typography variant="h3">About Me</Typography>
          <Typography my={2} color={"white"} variant="h3">
            A enthusiastic Front-End Developer
          </Typography>
          <Typography my={2} variant="h6">
            As a front-end developer, I am driven by a deep-seated curiosity to explore the latest programming concepts
            and emerging technology trends. React has been a particular area of interest, with its powerful features and
            versatility. I am constantly seeking out new challenges and opportunities to expand my skills and expertise,
            eager to stay at the forefront of this exciting field.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}
