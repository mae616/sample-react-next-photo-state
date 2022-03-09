import { useReducer } from "react";

export function usePhotosRedux(photosLength: number) {
  function reducer(
    photoIndex: number,
    action:
      | { type: "increment" }
      | { type: "decrement" }
      | { type: "substitution"; payload: number }
  ) {
    switch (action.type) {
      case "increment":
        return ++photoIndex === photosLength ? 0 : photoIndex;

      case "decrement":
        return --photoIndex < 0 ? photosLength - 1 : photoIndex;

      case "substitution":
        return action.payload;

      default:
        throw new Error();
    }
  }

  const [photosIndex, photosIndexDispatch] = useReducer(reducer, 0);

  const dispatchSubstitution = (index: number): void => {
    photosIndexDispatch({ type: "substitution", payload: index });
  };

  const dispatchPrev = (): void => {
    photosIndexDispatch({ type: "decrement" });
  };

  const dispatchNext = (): void => {
    photosIndexDispatch({ type: "increment" });
  };

  return { photosIndex, dispatchSubstitution, dispatchPrev, dispatchNext };
}
