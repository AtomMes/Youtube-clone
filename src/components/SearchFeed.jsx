import { Box, Typography } from "@mui/material";
import React from "react";
import { Videos } from "./";
import { fetchFromApi } from "../utils/fetchFromApi";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = React.useState([]);
  const {searchTerm} = useParams()

  React.useEffect(() => {
    fetchFromApi(`search?part=snippet&q=${searchTerm}`).then(
      (data) => setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: 2 }}>
      <Typography variant="h4" fontWeight="bold" mb={2} sx={{ color: "white" }}>
        Search results for <span style={{ color: "#F31503" }}>{searchTerm}</span> Videos
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
