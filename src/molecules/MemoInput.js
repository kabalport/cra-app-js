import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import {Container} from "@mui/material";

const MemoInput = ({ value, onChange, onAdd}) => {
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            onAdd();
        }
    };

    return (
        <Container style={{justifyContent: "center", textAlign: "center", display:"grid"}}>
            <Input value={value} onChange={onChange} onKeyPress={handleKeyPress} />
            <Button style={{color: "black", backgroundColor: "orange"}} onClick={onAdd}>Add Memo</Button>
        </Container>
    );
};

export default MemoInput;