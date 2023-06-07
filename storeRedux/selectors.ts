


import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '.';

export const selectMessage = (state: RootState) => state.message
//export const selectChefs = (state: RootState) => state.chefs.chefs

export const MessageSelector = createSelector(
  selectMessage,
  state => state
)
// export const ChefSelector = createSelector(
//   selectChefs,
//   state => state
// )