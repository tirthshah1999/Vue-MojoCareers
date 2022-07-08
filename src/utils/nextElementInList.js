const nextElementInList = (list, value) => {
  const currIdx = list.indexOf(value);
  const nextIdx = (currIdx + 1) % list.length;
  return list[nextIdx];
};

export default nextElementInList;
