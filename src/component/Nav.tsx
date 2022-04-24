import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.30),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 50,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const Nav = () => {
  const [input, setname] = useState({ name: "" });

  const navigate = useNavigate();

  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setname({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handelClick = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    setname({ name: "" });

    //checking
    // console.log(input.name);
    navigate(`/country/${input.name}`);
  };

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
              style={{color:'white'}}

            >
              WEATHER STACK...
            </Typography>

            <Search>
              <form action="" onSubmit={handelClick}>
                <input
                  id="browsers"
                  type="text"
                  name="name"
                  onChange={handelChange}
                  value={input.name}
                  placeholder="Enter The Country Name"
                  style={{ height: "2rem", margin: "40px" ,padding:"5px" }}
                />

                
                <button
                  disabled={!input.name}
                  type="submit"
                  style={{ height: "2.4rem",
                   marginTop: "5px" ,
                   margin:"10px",
            }}
                >
                  Search
                </button>
              </form>
            </Search>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Nav;
