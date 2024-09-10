import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        videoTrailer: null,
        nowPlayingMovies: null,
        popularMovies: null,
        topRatedMovies: null,
        upcomingMovies: null,
        horrorMovies: null,
    },
    reducers: {
        addVideoTrailer : (state, action) => {
            state.videoTrailer = action.payload;
        },
        addNowPlayingMovies : (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies : (state, action) => {
            state.popularMovies = action.payload;
        },
        addTopRatedMovies : (state, action) => {
            state.topRatedMovies = action.payload;
        },
        addUpcomingMovies : (state, action) => {
            state.upcomingMovies = action.payload;
        },
        addHorrorMovies : (state, action) => {
            state.horrorMovies = action.payload;
        },
    }

});

export const { addNowPlayingMovies, addVideoTrailer, addPopularMovies, addTopRatedMovies, addUpcomingMovies, addHorrorMovies } = moviesSlice.actions;

export default moviesSlice.reducer;