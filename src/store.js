import {configureStore, createSlice} from '@reduxjs/toolkit';

const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        data: [],
    },
    reducers: {
        setCards: (state, action) => {
            state.data = action.payload;
        },
        addCard: (state, action) => {
            state.data.push(action.payload);
        },
        deleteCard: (state, action) => {
            state.data = state.data.filter(card => card.id !== action.payload);
        },
    },
});

export const { setCards, addCard, deleteCard } = cardsSlice.actions;

const eventsSlice = createSlice({
    name: 'events',
    initialState: {
        data: [],
    },
    reducers: {
        setEvents: (state, action) => {
            state.data = action.payload;
        }
    },
});

export const { setEvents } = eventsSlice.actions;

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status: false,
        token: "",
    },
    reducers: {
        setAuth: (state, action) => {
            state.status = action.payload.status;
            state.token = action.payload.token;
        },
        clearAuth: (state) => {
            state.status = false;
            state.token = "";
        }
    },
});


export const { setAuth } = authSlice.actions;

const store = configureStore({
    reducer: {
        cards: cardsSlice.reducer,
        events: eventsSlice.reducer,
        auth: authSlice.reducer
    },
});

export default store;