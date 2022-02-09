import React, { Component, createContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router";
import sampleItems from "./sampleItems";

// Helper functions

function move(array, oldIndex, newIndex) {
  if (newIndex >= array.length) {
    newIndex = array.length - 1;
  }
  array.splice(newIndex, 0, array.splice(oldIndex, 1)[0]);
  return array;
}

function moveElement(array, index, offset) {
  const newIndex = index + offset;

  return move(array, index, newIndex);
}

// Context

const GridContext = createContext({ items: [] });

export const GridProvider = (props) => {
  const [charts, setCharts] = useState([]);
  const dashboards = useSelector((state) => state?.Dashboard?.dashboards);
  const location = useLocation();

  useEffect(() => {
    if (location?.pathname === "/tracking-dashboard") {
      setCharts(
        dashboards?.find(
          (dashboard) => dashboard?.name === location?.state?.selected
        )?.charts
      );
    }
  }, [location, dashboards]);

  useEffect(() => {
    setItems(
      sampleItems?.filter((item) =>
        charts?.map((chart) => chart?.chart)?.includes(item?.key)
      )
    );
  }, [charts]);

  const setItems = (items) => setState({ ...state, items });
  const moveItem = (sourceId, destinationId) => {
    const sourceIndex = state.items.findIndex((item) => item.id === sourceId);
    const destinationIndex = state.items.findIndex(
      (item) => item.id === destinationId
    );

    // If source/destination is unknown, do nothing.
    if (sourceId === -1 || destinationId === -1) {
      return;
    }

    const offset = destinationIndex - sourceIndex;

    setState((state) => ({
      ...state,
      items: moveElement(state.items, sourceIndex, offset),
    }));
  };
  const [state, setState] = useState({
    items: [],
    moveItem: moveItem,
    setItems: setItems,
  });

  return (
    <GridContext.Provider value={state}>{props.children}</GridContext.Provider>
  );
};

export default GridContext;
