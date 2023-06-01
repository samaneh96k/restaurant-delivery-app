
import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '.';

export const selectQuote = (state: RootState) => state.auth

export const kanyeQuoteSelector = createSelector(
  selectQuote,
  state => state
)