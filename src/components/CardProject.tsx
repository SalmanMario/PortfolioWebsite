import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";
import { NavLink } from "react-router-dom";

interface CardProjectProps {
  data: {
    cardImage: string;
    projectName: string;
    description: string;
    repository: string;
    liveCode: string;
  };
}

export function CardProject(props: CardProjectProps) {
  const { cardImage, projectName, repository, liveCode, description } = props.data;
  return (
    <Container>
      <Grid>
        <Card sx={{ width: 300, margin: "auto" }}>
          <CardMedia sx={{ height: 200 }} image={cardImage} title={projectName} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {projectName}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {description}
            </Typography>
          </CardContent>
          <CardActions>
            <NavLink to={repository}>
              <Button variant="contained">Repository</Button>
            </NavLink>
            <NavLink to={liveCode}>
              <Button variant="contained">Live Code</Button>
            </NavLink>
          </CardActions>
        </Card>
      </Grid>
    </Container>
  );
}
