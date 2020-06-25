import React, { useEffect } from "react";
import { getGenre } from "./actions"
import { connect } from "react-redux";
import styled from "styled-components";

const CustomButton = styled.button`
    font-family: 'Beth Ellen', cursive;
    font-size: 1.25rem;
    border-radius: 10px;
`

const Generator = props => {
    useEffect(() => {
        props.getGenre();
    }, []);

    return (
        <>
            <h2>{props.genre}</h2>
            <CustomButton onClick={() => props.getGenre()}>Generate new genre</CustomButton>
        </>
    );
}

const mapStateToProps = state => {
    return {
        genre: state.genre
    }
}

export default connect(mapStateToProps, {getGenre})(Generator);