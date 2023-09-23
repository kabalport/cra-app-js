import React, { useState, useRef, useEffect } from 'react';
import { Button, TextField, Box, Paper } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';
import axios from 'axios';

import { CircularProgress } from '@mui/material';


const ChatUI = () => {
    const [birthDate, setBirthDate] = useState('');
    const [birthTime, setBirthTime] = useState('');
    const [isChatReady, setIsChatReady] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const chatEndRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const isValidDate = (dateString) => {
        const regex = /^\d{4}-\d{2}-\d{2}$/;
        if (!dateString.match(regex)) return false;
        const date = new Date(dateString);
        return date.toISOString().slice(0, 10) === dateString;
    };

    const isValidTime = (timeString) => {
        const regex = /^\d{2}:\d{2}$/;
        return regex.test(timeString);
    };
    const startChat = () => {
        if (!isValidDate(birthDate)) {
            alert("올바른 날짜 형식을 입력하세요 (YYYY-MM-DD).");
            return;
        }
        if (!isValidTime(birthTime)) {
            alert("올바른 시간 형식을 입력하세요 (HH:MM).");
            return;
        }
        if (birthDate && birthTime) {
            setMessages([
                { role: 'assistant', content: '안녕하세요! 저는 챗독입니다. 어떻게 도와드릴까요?' }
            ]);
            setIsChatReady(true);
        }
    };
    const MAX_RETRIES = 3;

    const handleSendMessage = async () => {
        if (inputValue.trim()) {
            setIsLoading(true);
            let retries = 0;
            let success = false;
            while (!success && retries < MAX_RETRIES) {
                try {
                    const userMessages = messages
                        .filter(message => message.role === 'user')
                        .map(message => message.content);
                    const assistantMessages = messages
                        .filter(message => message.role === 'assistant')
                        .map(message => message.content);

                    const response = await axios.post('http://localhost:8080/fortuneTell', {
                        date: birthDate,
                        time: birthTime,
                        userMessages,
                        assistantMessages
                    });

                    const assistantMessage = response.data.assistant;

                    setMessages(prevMessages => [
                        ...prevMessages,
                        {role: 'user', content: inputValue.trim()},
                        {role: 'assistant', content: assistantMessage}
                    ]);
                    success = true; // 요청이 성공하면 루프 종료

                } catch (error) {
                    retries++;
                    if (retries === MAX_RETRIES) {
                    const errorMessage = error.response?.data?.error || '죄송합니다. 오류가 발생했습니다.';
                    setMessages(prevMessages => [
                        ...prevMessages,
                        {role: 'user', content: inputValue.trim()},
                        {role: 'assistant', content: errorMessage}
                    ]);
                    }
                }
            }
            setIsLoading(false);

            setInputValue('');
        }
    };

    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    return (
        <Box sx={{ p: 3 }}>
            {!isChatReady ? (
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField
                        label="생년월일"
                        variant="outlined"
                        value={birthDate}
                        onChange={(e) => setBirthDate(e.target.value)}
                        placeholder="YYYY-MM-DD"
                    />
                    <TextField
                        label="태어난 시간"
                        variant="outlined"
                        value={birthTime}
                        onChange={(e) => setBirthTime(e.target.value)}
                        placeholder="HH:MM"
                        sx={{ mt: 2 }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={startChat}
                        sx={{ mt: 2 }}
                    >
                        채팅 시작
                    </Button>
                </Box>
            ) : (
                <Box>
                    <Paper elevation={3} sx={{ height: '70vh', overflow: 'auto', p: 2 }}>
                        {messages.map((message, idx) => (
                            <Box key={idx}
                                 sx={{ textAlign: message.role === 'assistant' ? 'left' : 'right', my: 1 }}>
                                <Paper elevation={1}
                                       sx={{ p: 2, display: 'inline-block',
                                           bgcolor: message.role === 'assistant' ? 'grey.100' : 'primary.main',
                                           color: message.role === 'assistant' ? 'black' : 'white' }}>
                                    {message.content}
                                </Paper>
                            </Box>
                        ))}
                        <div ref={chatEndRef}></div>
                    </Paper>
                    <Box sx={{ mt: 2, display: 'flex' }}>
                        <TextField
                            variant="outlined"
                            fullWidth
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                        />
                        <Button
                            variant="contained"
                            color="primary"
                            sx={{ ml: 1 }}
                            onClick={handleSendMessage}
                            disabled={isLoading}
                        >


                            {isLoading ? <CircularProgress size={24} color="inherit" /> : <SendIcon />}
                        </Button>
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default ChatUI;