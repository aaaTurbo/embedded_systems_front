import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setEvents } from '../store';
import { request } from "../Util";

const useWebSocket = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const socket = new WebSocket('ws://localhost:8080/events');

        socket.onopen = () => {
            console.log('WebSocket connected');
        };

        socket.onmessage = () => {
            request('/api/get_events').then (data => {
                if (data) {
                    dispatch(setEvents(data));
                }
            })
        };

        socket.onclose = () => {
            console.log('WebSocket disconnected');
        };

        socket.onerror = (error) => {
            console.error('WebSocket error:', error);
        };

        return () => {
            socket.close();
        };
    }, [dispatch]);
};

export default useWebSocket;
