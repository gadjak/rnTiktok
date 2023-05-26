import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { videosUrl } from "../constants";
import { Response } from "../types";

export const fetchVideos = createAsyncThunk(
    'videos/fetchVideos',
    async () => {
        const response = await axios.get(videosUrl)
        const data: Response = response.data
        return data.categories[0].videos;
    }
)