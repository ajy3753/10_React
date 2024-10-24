import React, {useState} from 'react';
import styled from 'styled-components';
import {FaArrowUp} from 'react-icons/fa';

const SearchBar = ({searchText, changeSearchText, clickSearchIcon}) => {
    return (
        <SearchBarContainer>
            <SearchInput
                value={searchText}
                onChange={changeSearchText}
                type="text"
                placeholder="궁금한 것을 물어보세요."  
            />

            <UploadIconBox
                search={searchText}
                onClick={clickSearchIcon}
            >
                <FaArrowUp
                    style={{
                        color: "white"
                    }}
                />
            </UploadIconBox>
        </SearchBarContainer>
    )
}

export default SearchBar

const SearchBarContainer = styled.div`
    width: 100%;
    height: 52px;
    position: relative;
    padding: 14px 50px 14px 14px;
    background: #ebebeb;
    border: 1px solid #ebebeb;
    border-radius: 25px;
`

const SearchInput = styled.input`
    width: 100%;
    height: 100%;
    background: none;
    outline: none;
    border: none;
`

const UploadIconBox = styled.div`
    width: 36px;
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 7px;
    right: 8px;
    background: ${(props) => props.search ? "black" : "#e5e5e5"};
    border-radius: 25px;
    cursor: ${(props) => props.search ? "pointer" : "auto"};
`