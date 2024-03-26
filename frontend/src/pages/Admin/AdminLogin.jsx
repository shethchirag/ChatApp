import { CameraAlt } from "@mui/icons-material";
import {
  Avatar,
  Button,
  Container,
  IconButton,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

import { LinearGradient } from "../../components/Layout/constants/Color";
import { useInputValidation } from "6pp";
import { validateUsername } from "../../lib/validators";

const AdminLogin = () => {
  const secretKey = useInputValidation("");

  const submitHandle = (e) => {
    e.preventDefault();
    console.log("submit");
  };
  return (
    <div style={{ backgroundImage: LinearGradient }}>
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: 4,
          }}
        >
          <>
            <Typography variant="h5">Admin Login</Typography>
            <form
              style={{ width: "100%", marginTop: "1rem" }}
              onSubmit={submitHandle}
            >
              <TextField
                required
                fullWidth
                label="Password"
                margin="normal"
                variant="outlined"
                type="password"
                size="small"
                value={secretKey.value}
                onChange={secretKey.changeHandler}
                autoComplete="current-password"
              />
              <Button
                sx={{ marginTop: "1rem" }}
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
              >
                Login
              </Button>
              {/* <Typography textAlign="center" m={"1rem"}>
                OR
              </Typography>
              <Button
                fullWidth
                variant="text"
                color="secondary"
                onClick={() => {
                  console.log("Sign up");
                }}
              >
                Sign up Instead
              </Button> */}
            </form>
          </>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
