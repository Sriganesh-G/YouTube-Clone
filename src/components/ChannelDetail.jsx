import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { Margin } from "@mui/icons-material";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  // using useParams we can get id from the url
  const { id } = useParams();

  //whenever there is change in id then this useEffect method will get executed
  useEffect(() => {
    const fetchResults = async () => {
      // here we are fetching channel details i.e profile picture , name etc
      try {
        // here we are fetching channel details i.e profile picture , name etc
        const data = await fetchFromAPI(`channels?part=snippet&id=${id}`);
        if (data?.items?.length > 0) {
          setChannelDetail(data.items[0]); // here setting 1st result (index) of the result
        }

        // here we also need to display videos so we've to fetch video data
        const videosData = await fetchFromAPI(
          `search?channelId=${id}&part=snippet&order=date`
        );
        setVideos(videosData?.items || []);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };
    fetchResults();
  }, [id]);

  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            zIndex: 10,
            height: "250px",
            background:
              "linear-gradient(90deg, rgba(244,84,1,1) 0%, rgba(238,206,76,1) 100%)",
          }}
        ></div>
        <ChannelCard
          style={{}}
          channelDetail={channelDetail}
          marginTop="-93px"
        />
      </Box>

      {/* displaying the vidoes from here */}
      <Box display={"flex"} p={"2"}>
        <Box sx={{ mr: { sm: "100px" } }}></Box>
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
