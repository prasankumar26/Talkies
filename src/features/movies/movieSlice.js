import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

import MovieAPi from '../../common/apis/MovieApi'
import {APIKey} from '../../common/apis/MovieApiKey'


const initialState = {
    isLoading: true,
    movies: [],
    shows: [],
    selectMS: {},
    episode:[],
  }
  


// fetchMovies 
  export const fetchMovies = createAsyncThunk('movies/fetchAsyncMovies', async(term) =>{
    try {
        const response = await MovieAPi.get(
          `?apikey=${APIKey}&s=${term}&type=movie`
        )
        // console.log(response.data.Search);
        return response.data.Search
       } catch (error) {
        console.log(error);
       }
  })

  // fetchShows
  export const fetchShows = createAsyncThunk('movies/fetchAsyncShows', async(term) =>{
    try {
        const response = await MovieAPi.get(
          `?apikey=${APIKey}&s=${term}&type=series`
        )
        // console.log(response.data);
        return response.data.Search
       } catch (error) {
        console.log(error);
       }
  })
  

  //fetchEpisode 
  export const fetchEpisode = createAsyncThunk('episode/fetchAsyncEpisode', async(term) =>{
    try {
      const response = await MovieAPi.get(
        `?apikey=${APIKey}&s=${term}&type=series`
      )
      return response.data.Search
    } catch (error) {
      console.log(error);
    }
  })


  // fetchdetails
  export const fetchMoviesOrShows = createAsyncThunk('movies/fetchAsyncMS', async(id) =>{
    try {
        const response = await MovieAPi.get(
          `?apikey=${APIKey}&i=${id}&plot=short`
        )
        // console.log(response.data);
        return response.data
       } catch (error) {
        console.log(error);
       }
  })




export const movieSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    removeMoviesOrShow:(state) =>{
      state.selectMS = {}
    },
  },
  // fetchMovies
  extraReducers:{
   [fetchMovies.pending]: (state) =>{
   state.isLoading = true
   },
   [fetchMovies.fulfilled]: (state, {payload}) =>{
    // console.log(payload);
   state.isLoading = false;
   state.movies = payload
   },
   [fetchMovies.reject]: (state) =>{
   state.isLoading = false
   },
    // fetchShows
    [fetchShows.pending]: (state) =>{
    state.isLoading = true
    },
    [fetchShows.fulfilled]: (state, {payload}) =>{
        // console.log(payload);
    state.isLoading = false;
    state.shows = payload
    },
    [fetchShows.reject]: (state) =>{
    state.isLoading = false
    },
    // fetchMoviesOrShows
    [fetchMoviesOrShows.pending]: (state) =>{
    state.isLoading = true
    },
    [fetchMoviesOrShows.fulfilled]: (state, {payload}) =>{
        // console.log(payload);
    state.isLoading = false;
    state.selectMS = payload
    },
    [fetchMoviesOrShows.reject]: (state) =>{
    state.isLoading = false
    },

    // fetchEpisode
    [fetchEpisode.pending]: (state) =>{
      state.isLoading = true
      },
      [fetchEpisode.fulfilled]: (state, {payload}) =>{
          // console.log(payload);
      state.isLoading = false;
      state.episode = payload
      },
      [fetchEpisode.reject]: (state) =>{
      state.isLoading = false
      },
  }
})

// Action creators are generated for each case reducer function
export const { removeMoviesOrShow } = movieSlice.actions


export default movieSlice.reducer