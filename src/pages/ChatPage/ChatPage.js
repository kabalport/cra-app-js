import React, { useState } from 'react';
import axios from 'axios';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function ChatPage() {
    const [inputData, setInputData] = useState('');
    const [outputData, setOutputData] = useState('');

    const getKoreanTime = async () => {
        try {
            const response = await axios.post(
                'https://api.openai.com/v1/chat/completions',
                {
                    model: 'gpt-3.5-turbo',
                    messages: [
                        {
                            role: 'system',
                            content: 'You are a helpful assistant.',
                        },
                        {
                            role: 'user',
                            content: inputData,
                        },
                    ],
                    max_tokens: 200,
                    temperature: 0,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
                    },
                }
            );

            const koreanTimeMessage = response.data.choices[0].message.content;
            setOutputData(`Time in Korea: ${koreanTimeMessage}`);
        } catch (error) {
            console.error('Error fetching data:', error);
            setOutputData('An error occurred.');
        }
    };

    return (
        <Container
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
        >
            <Box sx={{ marginBottom: '20px' }}>
                <TextField
                    label="Enter your query"
                    variant="outlined"
                    value={inputData}
                    onChange={(e) => setInputData(e.target.value)}
                />
            </Box>
            <Button variant="contained" color="primary" onClick={getKoreanTime}>
                Search
            </Button>
            <Box sx={{ marginTop: '20px' }}>
                <div>{outputData}</div>
            </Box>
        </Container>
    );
}

export default ChatPage;
