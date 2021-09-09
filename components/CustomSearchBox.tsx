import {connectSearchBox} from "react-instantsearch-dom";
import styled from "styled-components";
import {useState} from "react";

const InputForm = styled.form`
  width: 80%;
  background-color: ${({theme}) => theme.colors.white};
  height: 6rem;
  margin-top: 4.2rem;
  border-radius: 15px;
  display: flex;
  justify-items: center;
  align-items: center;
  @media only screen and (max-width: 400px) {
    width: 90%;
  };
`;

const CustomInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 80%;
  margin-left: 1.5rem;
  font-size: 1.8rem;
  font-weight: 600;
  @media only screen and (max-width: 400px) {
    font-size: 1.4rem;
  };
`;

const SubmitInput = styled.input`
  cursor: pointer;
  height: 80%;
  border-radius: 15px;
  margin-right: 1rem;
  background-color: rgba(2, 68, 255, 0.85);
  width: 12rem;
  text-align: center;
  font-size: 2rem;
  color: ${({theme}) => theme.colors.white};
  box-sizing: border-box;
  @media only screen and (max-width: 400px) {
    font-size: 1.4rem;
  };
`;

const ResetInput = styled(SubmitInput)`
  background-color: rgba(255, 0, 89, 0.82);
`;

const HiddenLabel = styled.label`
  border-width: 0 !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  height: 1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  white-space: nowrap !important;
  width: 1px !important;
`;

const SearchBox = ({
                     currentRefinement,
                     isSearchStalled,
                     refine
                   }: { currentRefinement: string, isSearchStalled: boolean, refine: Function }) => {
  const [inputText, setInputText] = useState<string>(currentRefinement);

  const sendRequest = (e: any) => {
    e.preventDefault();
    refine(inputText);
  };

  const reset = () => {
    setInputText("");
    refine("");
  };

  return (
    <InputForm noValidate onSubmit={sendRequest} role="search">
      <HiddenLabel htmlFor={"searchInput"}>Search Bar</HiddenLabel>
      <CustomInput
        id={"searchInput"}
        placeholder={"Search for everything..."}
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <SubmitInput type={"submit"} value={"Search"}/>
      {inputText.length ? <ResetInput type={"button"} value={"Reset"} onClick={reset}/> :
        <></>
      }
    </InputForm>
  );
};

const CustomSearchBox = connectSearchBox(SearchBox);
export default CustomSearchBox;