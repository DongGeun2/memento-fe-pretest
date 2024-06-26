/**
 *
 * @param {*} count
 * @returns Dummy Data Create
 */
export const getItems = (count) =>
  Array.from({ length: count }, (v, k) => k).map((k) => ({
    id: `item-${k}`,
    content: `item ${k}`,
  }));
