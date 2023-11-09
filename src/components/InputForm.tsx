import React, { useRef, useState } from "react";
import { useTranslation } from "react-i18next";

interface Props {
  handleAdd: (text: string) => void;
}

const InputForm: React.FC<Props> = ({ handleAdd }) => {

  const { t } = useTranslation()

  const inputRef = useRef<HTMLInputElement>(null)
  const [inputValue, setInputValue] = useState("")
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (inputValue.trim() !== "") {
      handleAdd(inputValue)
      setInputValue("")
    }
    inputRef.current?.blur()
  }

  return (
    <form className="form" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        name="todoText"
        autoComplete="off"
        ref={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">{ t('GO') }</button>
    </form>
  );
};

export default InputForm;
