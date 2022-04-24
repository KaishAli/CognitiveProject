import React, { useState } from "react";
import { Box, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {
  TableRow,
  TableCell,
  IconButton,
  Stack,
  Avatar,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";

const Countrydetails = () => {
  const { country } = useParams();
  const [contryDetailes, setDetailes] = useState({
    countryname: "",
    Capital: "",
    population: 0,
    latitude: 0,
    longitude: 0,
    Flag: "",
    imageurl: "",
  });

  const detailes = async () => {
    const result = await fetch(
      `https://restcountries.com/v3.1/name/${country}`
    );
    const [data] = await result.json();
    setDetailes({
      ...contryDetailes,
      countryname: data.name.common,
      Capital: data.capital[0],
      population: data.population,
      latitude: data.capitalInfo.latlng[0],
      longitude: data.capitalInfo.latlng[1],
      Flag: data.flags.png,
      imageurl: data.coatOfArms.png,
    });
    console.log(data);
  };


  useEffect(() => {
    try {
      detailes();
    } catch (error) {
      alert("Enter correct country name");
    }
  }, [country]);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Country Details Overview</h1>
      <Paper
        style={{
          boxShadow: "5px 10px #888888",
          border: "1px solid black",
          width: "25rem",
          height: "15rem",
          backgroundColor: "#dff2f5",

        }}
        sx={{ p: 5, ml: 65, mr: 70, mt: 10 }}
      >
        <div style={{ float: "left" }}>
          <table style={{ marginBottom: "3rem" }}>
            <tr>
              <td style={{ textAlign: "left" }}> CountryName </td>
              <td style={{ textAlign: "left" }}>
                : <b>{contryDetailes.countryname}</b>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "left" }}>Capital </td>
              <td style={{ textAlign: "left" }}>
                : <b>{contryDetailes.Capital}</b>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "left" }}>Population </td>
              <td style={{ textAlign: "left" }}>
                : <b>{contryDetailes.population}</b>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "left" }}>Latitude </td>
              <td style={{ textAlign: "left" }}>
                : <b>{contryDetailes.latitude}</b>
              </td>
            </tr>
            <tr>
              <td style={{ textAlign: "left" }}>Longitude </td>
              <td style={{ textAlign: "left" }}>
                : <b>{contryDetailes.longitude}</b>
              </td>
            </tr>
          </table>
          <Link
            to={`/weather/${contryDetailes.Capital}`}
            style={{ textDecoration: "none" }}
          >
            <IconButton aria-label="delete" size="large">
              <Button variant="contained">Capital Weather</Button>
            </IconButton>
          </Link>
        </div>

        <div style={{ float: "left" }}>
          <Avatar
            variant="rounded"
            src={contryDetailes.Flag}
            sx={{ width: 70, height: 70, mt: 7, ml: 10 }}
          />
        </div>
      </Paper>

     
    </div>
  );
};

export default Countrydetails;
