import { useReducer, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null,
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null,
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error,
      };
    case "DELETE":
      return {
        loading: false,
        data: null,
        error: null,
      };
    case "DELETEID":
      return {
        loading: false,
        data: null,
        error: null,
      };
    default:
      throw new Error("Unhandled action type");
  }
}

function useAsync(callback, deps = [], skip = false) {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: false,
  });

  const fetchData = async () => {
    dispatch({ type: "LOADING" });

    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  const deleteData = () => {
    dispatch({ type: "DELETE" });
  };

  useEffect(() => {
    if (skip) return;
    fetchData();

    //eslint-disable-next-line
  }, deps);

  return [state, fetchData, deleteData];
}

export default useAsync;
