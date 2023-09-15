import React, { useState } from 'react';
import { Button, TextField, Typography } from '@mui/material';

const Finetune = () => {
    // State variables
    const [apiKey, setApiKey] = useState('');
    const [trainedId, setTrainedId] = useState('');
    const [file, setFile] = useState(null);
    const [uploadResponse, setUploadResponse] = useState(null);
    const [fineTuneResponse, setFineTuneResponse] = useState(null);
    const [jobList, setJobList] = useState([]);
    const [jobId, setJobId] = useState('');
    const [jobDetails, setJobDetails] = useState(null);
    const [events, setEvents] = useState(null);
    const [cancelStatus, setCancelStatus] = useState(null);
    const [eventsJobId, setEventsJobId] = useState('');
    const [statusJobId, setStatusJobId] = useState('');
    // Fetch functions
    const fetchFromAPI = async (url, method, headers, body = null) => {
        const response = await fetch(url, {
            method,
            headers,
            body: body ? JSON.stringify(body) : null,
        });
        return await response.json();
    };

    const fetchJobDetails = async () => {
        // const url = `https://api.openai.com/v1/fine_tuning/jobs/${jobId}`;
        const url = `https://api.openai.com/v1/fine_tuning/jobs/${statusJobId}`;

        const data = await fetchFromAPI(url, 'GET', {
            'Authorization': `Bearer ${apiKey}`,
        });
        if (data.object === 'fine_tuning.job') setJobDetails(data);
    };

    const fetchJobStatus = async () => {
        const url = 'https://api.openai.com/v1/fine_tuning/jobs?limit=2';
        const data = await fetchFromAPI(url, 'GET', {
            'Authorization': `Bearer ${apiKey}`,
        });
        setJobList(data.data);
    };

    const cancelFineTuningJob = async () => {
        const url = `https://api.openai.com/v1/fine_tuning/jobs/${jobId}/cancel`;
        const data = await fetchFromAPI(url, 'POST', {
            'Authorization': `Bearer ${apiKey}`,
        });
        if (data.status === 'cancelled') setCancelStatus('The fine-tuning job has been cancelled.');
    };


    const fetchEvents = async () => {
        const url = `https://api.openai.com/v1/fine_tuning/jobs/${eventsJobId}/events`;
        const data = await fetchFromAPI(url, 'GET', {
            'Authorization': `Bearer ${apiKey}`,
        });
        setEvents(data.data);
    };

    // const fetchEvents = async () => {
    //     // const url = `https://api.openai.com/v1/fine_tuning/jobs/${jobId}/events`;
    //     const url = `https://api.openai.com/v1/fine_tuning/jobs/${eventsJobId}/events`;
    //
    //     const data = await fetchFromAPI(url, 'GET', {
    //         'Authorization': `Bearer ${apiKey}`,
    //     });
    //     setEvents(data.data);
    // };

    // Handle functions
    const handleUpload = async () => {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('purpose', 'fine-tune');
        const url = 'https://api.openai.com/v1/files';
        const data = await fetchFromAPI(url, 'POST', {
            'Authorization': `Bearer ${apiKey}`,
        }, formData);
        setUploadResponse(data);
    };

    const handleFineTune = async () => {
        const url = 'https://api.openai.com/v1/fine_tuning/jobs';
        const data = await fetchFromAPI(url, 'POST', {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`,
        }, {
            training_file: trainedId,
            model: 'gpt-3.5-turbo',
        });
        setFineTuneResponse(data);
    };

    return (
        <div>
            <Typography variant="h1">File Upload and Fine-tuning using OpenAI API</Typography>
            {/* API Key */}
            <TextField label="OpenAI API Key" onChange={(e) => setApiKey(e.target.value)} />
            <Button onClick={() => console.log(apiKey)}>Show Key</Button>

            {/* File Upload */}
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            <Button variant="contained" color="primary" onClick={handleUpload}>Upload</Button>
            {uploadResponse && <pre>{JSON.stringify(uploadResponse, null, 2)}</pre>}

            {/* Fine Tune */}
            <Typography variant="h2">Make own model on OpenAI</Typography>
            <TextField label="Trained ID" onChange={(e) => setTrainedId(e.target.value)} />
            <Button variant="contained" color="secondary" onClick={handleFineTune}>Fine Tune</Button>
            {fineTuneResponse && <pre>{JSON.stringify(fineTuneResponse, null, 10)}</pre>}

            {/* Job Status */}
            <Button variant="contained" color="secondary" onClick={fetchJobStatus}>Check Fine-tuning Status</Button>
            {jobList.map((job, index) => (
                <div key={index}>
                    <p>Job ID: {job.id}</p>
                    <p>Status: {job.status}</p>
                </div>
            ))}

            {/* Fine-Tuning Events */}
            <Button variant="contained" color="primary" onClick={fetchEvents}>List Fine-Tuning Events</Button>
            {events && (
                <div>
                    <h2>Fine-Tuning Events:</h2>
                    <ul>
                        {events.map((event, index) => (
                            <li key={index}>{event.message}</li>
                        ))}
                    </ul>
                </div>
            )}

            {/* Cancel Fine-Tuning */}
            <Button variant="contained" color="secondary" onClick={cancelFineTuningJob}>Cancel Fine-Tuning Job</Button>
            {cancelStatus && <div><p>{cancelStatus}</p></div>}

            {/* Job Details */}
            <input type="text" placeholder="Enter Fine-Tuning Job ID" value={jobId} onChange={(e) => setJobId(e.target.value)} />
            <Button variant="contained" color="primary" onClick={fetchJobDetails}>Check Fine-Tuning Status</Button>
            {jobDetails && (
                <div>
                    <h2>Fine-Tuning Job Details:</h2>
                    <p>Status: {jobDetails.status}</p>
                    <p>Model: {jobDetails.model}</p>
                </div>
            )}
        </div>
    );
};

export default Finetune;
