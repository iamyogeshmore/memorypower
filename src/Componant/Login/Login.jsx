import { Avatar, Grid, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Box } from "@mui/system";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  let navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      toast.error("Please provide login details.");
    } else {
      axios
        .get("/db.json")
        .then((response) => {
          const users = response.data.users;
          const user = users.find(
            (u) => u.email === email && u.password === password
          );

          if (user) {
            localStorage.setItem("Token", user.id);
            setTimeout(() => {
              navigate("/");
            }, 800);

            toast.success("Login successful!");
          } else {
            toast.error("Invalid email or password.");
          }
        })
        .catch((error) => {
          console.error(error);
          toast.error("An error occurred while logging in.");
        });
    }
  };

  return (
    <Box
      sx={{
        marginTop: 8,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Login
      </Typography>
      <Box component="form" noValidate sx={{ mt: 1 }}>
        <TextField
          onChange={(event) => {
            setEmail(event.target.value);
          }}
          margin="normal"
          required
          fullWidth
          id="email"
          label="Email Address/UserId"
          name="email"
          autoComplete="off"
          autoFocus
        />
        <TextField
          onChange={(event) => {
            setPassword(event.target.value);
          }}
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          autoComplete="off"
        />

        <Button
          onClick={handleSubmit}
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>

        <Grid container>
          <Grid item xs>
            <Link
              onClick={() => {
                navigate("/Login");
              }}
              variant="body2"
              sx={{
                color: "blue",
                cursor: "pointer",
              }}
            >
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link
              onClick={() => {
                navigate("/Signup");
              }}
              variant="body2"
              sx={{
                color: "blue",
                cursor: "pointer",
              }}
            >
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </Box>
      <ToastContainer position="top-right" autoClose={2000} />
    </Box>
  );
}
