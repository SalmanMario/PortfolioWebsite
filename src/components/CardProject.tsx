import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Container, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

interface CardProjectProps {
  data: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    cardImage: any;
    projectName: string;
    description: string;
    repository: string;
    liveCode: string;
    items: string[];
    id: number;
  };
}

export function CardProject(props: CardProjectProps) {
  const { cardImage, projectName, repository, liveCode, description, items } = props.data;
  const isImageLeftLayout = props.data.id % 2 === 1; // Set image on the left for odd ids, otherwise set image on the right

  return (
    <Container>
      <Grid mb={4} container>
        <Grid item md={isImageLeftLayout ? 6 : 6} xs={12} style={{ order: isImageLeftLayout ? 1 : 2 }}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <img width={650} src={cardImage} alt="" />
          </motion.div>
        </Grid>
        <Grid item md={isImageLeftLayout ? 6 : 6} xs={12} style={{ order: isImageLeftLayout ? 2 : 1 }}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Box className="projectAlign">
              <Typography textAlign={"center"} mb={1} variant="h3">
                {projectName}
              </Typography>
              <Typography variant="h6">{description}</Typography>
              <Box
                className="mobileIcons"
                sx={{ display: "flex", justifyContent: "center", flexDirection: "row", flexWrap: "nowrap" }}
              >
                {items.map((elem) => (
                  <Box
                    key={elem}
                    sx={{ display: "flex", justifyContent: "center", flexDirection: "column", marginTop: 2 }}
                  >
                    <img src={elem} className="iconSocial" alt="" />
                  </Box>
                ))}
              </Box>
              <Grid container>
                <Grid sx={{ paddingLeft: 4, paddingRight: 4 }} item xs={12} md={6}>
                  <NavLink to={repository} target="_blank">
                    <Button className="mobileButtons" sx={{ color: "#149ECA" }} variant="contained" fullWidth>
                      Repository
                    </Button>
                  </NavLink>
                </Grid>
                <Grid sx={{ paddingLeft: 4, paddingRight: 4 }} item xs={12} md={6}>
                  <NavLink to={liveCode} target="_blank">
                    <Button className="mobileButtons" sx={{ color: "#149ECA" }} variant="contained" fullWidth>
                      Live Code
                    </Button>
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </motion.div>
        </Grid>
      </Grid>
    </Container>
  );
}
