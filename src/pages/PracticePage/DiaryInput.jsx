import { Input, Button } from 'antd';
import {useState} from "react";
const { TextArea } = Input;


// function DiaryInput()  {
const DiaryInput = ({isLoading, onSubmit}) => {
    const [userInput, setUserInput] = useState("");
    // 사용자의 입력을 받아, 상위컴포넌트로 데이터를 전달
    // loading 상태일때는 사용자가 제출버튼을 누르지 못하도록 처리
    const handleUserInput = (e) => {
        setUserInput(e.target.value);
    }
    const handleClick = () =>{
        onSubmit(userInput);
    }
    return(<div>
        <TextArea value={userInput} onChange={handleUserInput} placeholder="오늘 일어난 일들을 간단히 작성해주세요" />
        <Button loading={isLoading} onClick={handleClick}>gpt 회고록을 작성해줘</Button>
    </div>);
};

export default DiaryInput;