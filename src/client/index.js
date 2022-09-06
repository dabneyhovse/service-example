/**
 * Author:	Nick Jasinski
 *
 * Main react component for the service
 *
 */

import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ExampleListItem } from "./components";
import { fetchExamples } from "./store/example";

function Service() {
  const dispatch = useDispatch();
  // the first .example is the routename of this
  // service
  const { examples } = useSelector((state) => {
    state.example.examples;
  });

  useEffect(() => {
    dispatch(fetchExamples());
  }, []);

  return (
    <div>
      <h1>Examples:</h1>
      <ul>
        {examples.map((ex) => (
          <ExampleListItem key={ex.id} text={ex.text} />
        ))}
      </ul>
    </div>
  );
}

export default Service;
