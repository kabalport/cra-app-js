import React from "react";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import {Container} from "@mui/material";

const MemoInput = ({ value, onChange, onAdd}) => {
    const handleKeyPress = (e) => {
        if (!value.trim()) {
            alert("Content cannot be empty!");
            return;
        }
        if (e.key === 'Enter') {
            onAdd();
        }
    };

    return (
        <Container style={{justifyContent: "center", textAlign: "center", display:"grid"}}>
            <Input value={value} onChange={onChange} onKeyPress={handleKeyPress}
                  style={{  }} // 이 부분을 추가
            />
            <Button style={{width:"100%",maxWidth: "100%", color: "black", backgroundColor: "orange"}} onClick={onAdd}>Add Memo</Button>
        </Container>
    );
};

export default MemoInput;