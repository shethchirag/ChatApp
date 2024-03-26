import {
  AdminPanelSettings as AdminPanelSettingsIcon,
  Notifications as NotificationsIcon,
} from "@mui/icons-material";
import AdminLayout from "../../components/Layout/AdminLayout";
import {
  Box,
  Button,
  Container,
  Input,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import moment from "moment";
import {
  CurveButton,
  SearchInput,
} from "../../components/style/VisuallyHidden";

const Dashboard = () => {
  const AppBar = (
    <Paper
      elevation={3}
      sx={{ padding: "2rem ", margin: "2rem 0", borderRadius: "1rem" }}
    >
      <Stack direction={"row"} alignItems={"center"} spacing={"1rem"}>
        <AdminPanelSettingsIcon sx={{ fontSize: "3rem" }} />
        <SearchInput placeholder="Search..." type="text" />
        <CurveButton>Search</CurveButton>
        <Box sx={{ flexGrow: 1 }} />
        <Typography
          display={{ xs: "none", lg: "block" }}
          color={"rgba(0,0,0,0.7)"}
          textAlign={"center"}
        >
          {moment().format("MMMM Do YYYY, h:mm:ss a")}
        </Typography>
        <NotificationsIcon />
      </Stack>
    </Paper>
  );

  const Widgets = <></>;
  return (
    <AdminLayout>
      <Container component={"main"}>
        {AppBar}
        <Stack direction={"row"} spacing={"2rem"} flexWrap={"wrap"}>
          <Paper
            elevation={3}
            sx={{
              padding: "2rem 3.5rem",
              borderRadius: "1rem",
              width: "100%",
              maxWidth: "45rem",
            }}
          >
            <Typography>Last Messages</Typography>
            {"chart"}
          </Paper>
          <Paper
            elevation={3}
            sx={{
              padding: "1rem",
              borderRadius: "1rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: { xs: "100%", sm: "50%" },
              position: "relative",

              maxwidth: "25rem",
            }}
          >
            {"   Dougnut Chart"}
          </Paper>
        </Stack>
        {Widgets}
      </Container>
    </AdminLayout>
  );
};

export default Dashboard;
