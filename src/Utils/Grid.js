import React from "react";
import styled from "styled-components";

export const Grid = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  row-gap: 24px;
  column-gap: 24px;
`;

export const GridImage = styled.div`
  flex-grow: 1;
  border: 1px solid white;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: ${(props) => `url("${props.src}")`};
  background-size: cover;
  background-position: 50%;
`;

const GridItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: #fffdd8;
  padding: 0px 12px;
  cursor: grab;
`;

export const GridItem = ({ forwardedRef, ...props }) => (
  <GridItemWrapper ref={forwardedRef} {...props} />
);
