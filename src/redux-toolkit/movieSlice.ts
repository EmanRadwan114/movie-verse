import { IMovie } from "@/types/interfaces";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface IMovieState {
  favorites: IMovie[];
}

const initialState: IMovieState = {
  favorites: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    initializeFavorites: (state, action: PayloadAction<IMovie[]>) => {
      state.favorites = action.payload;
    },
    addToFavorites: (state, action: PayloadAction<IMovie>) => {
      state.favorites.push(action.payload);
    },
    removeFromFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (item) => item.id !== action.payload
      );
    },
    clearFavorites: (state) => {
      state.favorites = [];
    },
  },
});

export const {
  initializeFavorites,
  addToFavorites,
  removeFromFavorites,
  clearFavorites,
} = moviesSlice.actions;

export default moviesSlice.reducer;
