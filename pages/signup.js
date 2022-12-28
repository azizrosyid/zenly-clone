import {
  Box,
  Button,
  FormControl,
  Input,
  InputLabel,
  Paper,
  Typography,
} from "@mui/material";
import { Container, Stack } from "@mui/system";
import Link from "next/link";
import React from "react";
import { useAuth } from "../hooks/useAuth";

const LoginForm = () => {
  const { signup } = useAuth();

  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    signup(username, password);
  };
  return (
    <Container sx={{ display: "flex", justifyContent: "center" }}>
      {/* background page */}
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          position: "absolute",
          zIndex: -1,
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/006/852/804/original/abstract-blue-background-simple-design-for-your-website-free-vector.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Paper sx={{ p: 3, width: "100%", maxWidth: "400px", mt: 10 }}>
        <Typography variant="h5" color="textPrimary" align="center">
          Register
        </Typography>
        <form onSubmit={handleSubmit}>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="username">Username</InputLabel>
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              name="username"
              type="text"
              autoComplete="username"
              autoFocus
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </FormControl>
          <Button type="submit" fullWidth variant="contained" color="primary">
            Register
          </Button>
        </form>
        <Typography variant="body2" color="textSecondary" align="center">
          Already have an account?{" "}
          <Link href="/login" color="primary">
            Login
          </Link>
        </Typography>
      </Paper>
    </Container>
  );
};

export default LoginForm;
