import React, { useRef, useState } from "react";
import Octicon from "react-octicon";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setSearchValue } from "../redux/slice";

const Search = () => {
  const [tempFilterName, settempFilterName] = useState("");

  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    const timeoutRef = useRef;

    settempFilterName(event.target.value);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      dispatch(setSearchValue(event.target.value));
    }, 1000);
  };

  return (
    <Wrapper>
      <InputBox>
        <Octicon name="search" />
        <Input
          placeholder="Search Gists for the username"
          value={tempFilterName}
          onChange={handleInputChange}
        />
      </InputBox>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 8px;
  background-color: #ffffff;
  font-size: 14px;
  line-height: 1.5;
  border-radius: 6px;
  margin: 0 16px;
`;

const InputBox = styled.div`
  border-radius: 4px;
  display: flex;
  width: 400px;
`;

const Input = styled.input`
  border: none;
  width: 100%;
  font-size: 16px;

  &:focus {
    outline: 0;
  }
`;

export default Search;
