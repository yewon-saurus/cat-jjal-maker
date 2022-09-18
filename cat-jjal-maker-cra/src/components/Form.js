import React from "react";

const Form = ({ updateMainCat }) => {
    const includesHangul = (text) => /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/i.test(text);
    const [value, setValue] = React.useState("");
    const [errorMesssage, setErrorMessage] = React.useState("");

    function handleInputChange(e) {
        const userValue = e.target.value;
        setErrorMessage("");

        if (includesHangul(userValue)) {
            setErrorMessage("한글은 입력할 수 없습니다.");
        }
        setValue(userValue.toUpperCase());
    }

    function handleFormSubmit(e) {
        e.preventDefault();
        setErrorMessage("");

        if (value === "") {
            setErrorMessage("빈 값으로 생성할 수 없습니다.");
            return; // 함수가 아래의 updateMainCat() 까지 불리지 않고 끝날 수 있게..
        }
        updateMainCat(value);
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="name"
                placeholder="영어 대사를 입력해주세요"
                value={value}
                onChange={handleInputChange}
            />
            <button type="submit">생성</button>
            <p style={{ color: "red" }}>{errorMesssage}</p>
        </form>
    );
};

export default Form;