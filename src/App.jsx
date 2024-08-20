import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import "./App.css";
import {
  Navbar,
  Feed,
  VideoDetail,
  SearchFeed,
  ChannelDetail,
} from "./components";

function App() {
  return (
    <BrowserRouter>
      <Box
        sx={{
          backgroundColor: "#000",
          padding: 0,
          margin: 0,
          minHeight: "5vh",
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Feed />}></Route>
          <Route path="/video/:id" element={<VideoDetail />}></Route>
          <Route path="/channel/:id" element={<ChannelDetail />}></Route>
          <Route path="/search/:searchTerm" element={<SearchFeed />}></Route>
        </Routes>
      </Box>
    </BrowserRouter>
  );
}

export default App;
