import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  relationship: [],
}

export const relationshipSlice = createSlice({
  name: 'relationship',
  initialState,
  reducers: {
    addToRelationship: (state, action) => {
        /**
         * ToDo Change this logic to match slice required logic of update.
         */
      state.relationship = [...state.relationship, action.relationship]
    },
    removeFromRelationship: (state, action) => {
      state.value -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToRelationship, removeFromRelationship } = relationshipSlice.actions

export const selectRelationship = (state) => relationshipSlice.relationship
export default relationshipSlice.reducer