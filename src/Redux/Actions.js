import C from "./Constants";
import { v4 } from "uuid";

export const addColor = (title, color) => {
  return {
    type: C.ADD_COLOR,
    id: v4(),
    title,
    color,
    timestamp: new Date().toString()
  };
};

export const removeColor = (id) => {
  return {
    type: C.REMOVE_COLOR,
    id
  };
};

export const rateColor = (id, rating) => {
  return {
    type: C.RATE_COLOR,
    id,
    rating
  };
};

export const sortColors = (sortedBy) => {
  return sortedBy === "rating"
    ? {
        type: C.SORT_COLORS,
        sortBy: "SORTED_BY_RATING"
      }
    : sortedBy === "title"
    ? {
        type: C.SORT_COLORS,
        sortBy: "SORTED_BY_TITLE"
      }
    : {
        type: C.SORT_COLORS,
        sortBy: "SORTED_BY_DATE"
      };
};

/* export const sortColorsIf = (sortedBy) => {
  if (sortedBy === "rating") {
    return {
      type: C.SORT_COLORS,
      sortBy: "SORTED_BY_RATING"
    };
  }

  if (sortedBy === "title") {
    return {
      type: C.SORT_COLORS,
      sortBy: "SORTED_BY_TITLE"
    };
  } else {
    return {
      type: C.SORT_COLORS,
      sortBy: "SORTED_BY_DATE"
    };
  }
}; */
