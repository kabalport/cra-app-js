// src/FortuneTeller.js
import React, { useState } from 'react';
import {Container, TextField, Button, Box, List, ListItem, Typography} from '@mui/material';

const FortuneTeller = () => {
    const [userMessages, setUserMessages] = useState([]);
    const [assistantMessages, setAssistantMessages] = useState([]);
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const sendDate = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/fortuneTell', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    date,
                    time,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setAssistantMessages([...assistantMessages, data.assistantMessage]);
        } catch (error) {
            console.error('Fetch error:', error);
            setAssistantMessages([...assistantMessages, 'An error occurred. Please try again.']);
        }
    };

    const sendMessage = async (message) => {
        try {
            const response = await fetch('http://localhost:8080/fortuneTell/message', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    message,
                }),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const data = await response.json();
            setUserMessages([...userMessages, message]);
            setAssistantMessages([...assistantMessages, data.assistantMessage]);
        } catch (error) {
            console.error('Fetch error:', error);
            setAssistantMessages([...assistantMessages, 'An error occurred. Please try again.']);
        }
    };

    return (

        <Container>
            <Typography variant="h4">Fortune Teller Dog</Typography>
            <Box component="form" onSubmit={sendDate}>
                <TextField
                    label="Date of Birth"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                />
                <TextField
                    label="Time of Birth"
                    type="time"
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                />
                <Button type="submit" variant="contained" color="primary">
                    Send Date
                </Button>
            </Box>
            <Box component="form" onSubmit={(e) => {
                e.preventDefault();
                const message = e.target.elements.message.value;
                sendMessage(message);
                e.target.reset();
            }}>
                <TextField
                    name="message"
                    label="Your Message"
                    fullWidth
                />
                <Button type="submit" variant="contained" color="primary">
                    Send Message
                </Button>
            </Box>
            <Typography variant="h6">User Messages:</Typography>
            <ul>
                {userMessages.map((message, index) => <li key={index}>{message}</li>)}
            </ul>
            <Typography variant="h6">Assistant Messages:</Typography>
            <ul>
                {assistantMessages.map((message, index) => <li key={index}>{message}</li>)}
            </ul>
        </Container>
    );
};

export default FortuneTeller;
