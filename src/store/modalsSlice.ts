import { createSlice } from "@reduxjs/toolkit";

const modalsSlice = createSlice({
    name:'modals',
    initialState: { isOpen: false },
    reducers: {
        openRentModal(state){
            state.isOpen = true;
        },
        closeRentModal(state){
            state.isOpen = false;
        }
    }
});

export const {openRentModal, closeRentModal} = modalsSlice.actions;
export default modalsSlice.reducer;
