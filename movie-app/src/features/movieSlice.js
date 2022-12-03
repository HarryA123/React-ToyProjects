import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const callMovies = createAsyncThunk(
  "movieSlice/callMovies",
  async ({ movieName, pageNumber }) => {
    const response = await axios.get(
      `https://yts.mx/api/v2/list_movies.json?minimum_rating=1&page=${pageNumber}&query_term=${movieName}&sort_by=year`
    );
    try {
      return response.data.data.movies;
    } catch (err) {
      console.log("에러 발생");
    }
  }
);

const callMovieDetail = createAsyncThunk(
  "movieSlice/callMovieDetail",
  async ({ id }) => {
    const response = await axios.get(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${id}`
    );
    try {
      return response.data.data.movie;
    } catch (err) {
      console.log("에러 발생");
    }
  }
);

export const movieSlice = createSlice({
  name: "film",
  initialState: {
    clips: [],
    movies: [],
    detail: [],
    isLoading: true,
  },
  reducers: {
    clip: (state, action) => {
      if (state.clips.some(item => item.title === action.info.title)) {
        state.clips = state.clips.filter(
          item => item.title !== action.info.title
        );
      } else {
        console.log(action);
        state.clips.push(action.info);
      }
    },
  },

  extraReducers: builder => {
    builder.addCase(callMovies.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(callMovies.fulfilled, (state, action) => {
      state.isLoading = false;
      action.meta.arg.pageNumber === 1 && (state.movies = []);
      action.payload.map(item => state.movies.push(item));
    });
    builder.addCase(callMovies.rejected, state => {
      state.isLoading = false;
    });
    builder.addCase(callMovieDetail.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(callMovieDetail.fulfilled, (state, action) => {
      state.isLoading = false;
      state.detail = action.payload;
    });
  },
});

export default movieSlice;
export const { clip } = movieSlice.actions;
export { callMovies, callMovieDetail };
