import { Box, Button, Grid, TextField, TextareaAutosize, Typography } from "@mui/material";

export function Contact() {
  return (
    <Box my={4}>
      <Typography textAlign={"center"} variant="h3">
        If you like my work,let's get in touch
      </Typography>
      <form action="https://formspree.io/f/mdoronjn" method="POST">
        <Grid mt={4} container>
          <Grid sx={{ display: "flex", justifyContent: "center" }} item md={6} xs={12} my={2}>
            <TextField
              className="borderColor"
              InputLabelProps={{
                style: {
                  color: "#149ECA",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  fontWeight: 700,
                },
              }}
              sx={{
                input: {
                  fontFamily: "Inter",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: 16,
                  height: "40px",
                  backgroundColor: "#191B21",
                  width: "300px",
                },
                my: 1,
              }}
              type="text"
              variant="filled"
              label="Full Name"
              name="Name"
              required
            ></TextField>
          </Grid>
          <Grid sx={{ display: "flex", justifyContent: "center" }} item md={6} xs={12} my={2}>
            <TextField
              className="borderColor"
              InputLabelProps={{
                style: {
                  color: "#149ECA",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  fontWeight: 700,
                },
              }}
              sx={{
                input: {
                  fontFamily: "Inter",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: 16,
                  height: "40px",
                  backgroundColor: "#191B21",
                  width: "300px",
                },
                my: 1,
              }}
              type="email"
              variant="filled"
              label="Email"
              name="Email"
              required
            ></TextField>
          </Grid>
          <Grid sx={{ display: "flex", justifyContent: "center" }} item md={6} xs={12} my={2}>
            <TextField
              className="borderColor"
              InputLabelProps={{
                style: {
                  color: "#149ECA",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  fontWeight: 700,
                },
              }}
              sx={{
                input: {
                  fontFamily: "Inter",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: 16,
                  height: "40px",
                  backgroundColor: "#191B21",
                  width: "300px",
                },
                my: 1,
              }}
              type="number"
              variant="filled"
              label="Phone Number"
              name="Phone Number"
              required
            ></TextField>
          </Grid>
          <Grid sx={{ display: "flex", justifyContent: "center" }} item md={6} xs={12} my={2}>
            <TextField
              className="borderColor"
              InputLabelProps={{
                style: {
                  color: "#149ECA",
                  fontFamily: "Montserrat",
                  fontSize: 16,
                  fontWeight: 700,
                },
              }}
              sx={{
                input: {
                  fontFamily: "Inter",
                  color: "#fff",
                  fontWeight: 500,
                  fontSize: 16,
                  height: "40px",
                  backgroundColor: "#191B21",
                  width: "300px",
                },
                my: 1,
              }}
              type="text"
              variant="filled"
              label="Company Name"
              name="Company Name"
              required
            ></TextField>
          </Grid>
        </Grid>
        <Grid sx={{ display: "flex", justifyContent: "center" }} item md={12} xs={12} my={2}>
          <TextareaAutosize
            placeholder="Message"
            className="placeholderColor borderColor"
            style={{
              fontFamily: "Inter",
              color: "#fff",
              fontWeight: 500,
              fontSize: 16,
              backgroundColor: "#191B21",
              width: "900px",
              resize: "none",
              border: "1px solid #191B21",
            }}
            minRows={5}
            required
          />
        </Grid>
        <Grid sx={{ display: "flex", justifyContent: "center" }} item md={12} xs={12}>
          <Button sx={{ width: "500px", color: "#149ECA", height: "75px" }} variant="contained" type="submit">
            Submit Form
          </Button>
        </Grid>
      </form>
    </Box>
  );
}
