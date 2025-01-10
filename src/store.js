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
        events: [],
    },
    reducers: {
        setEvents: (state, action) => {
            state.data = action.payload;
        }
    },
});

export const { setEvents } = eventsSlice.actions;

const store = configureStore({
    reducer: {
        cards: cardsSlice.reducer,
        events: eventsSlice.reducer
    },
});

export default store;