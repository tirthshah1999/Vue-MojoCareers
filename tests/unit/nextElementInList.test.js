import nextElementInList from "@/utils/nextElementInList";

describe("nextElementInList", () => {
  it("locates element in list and returns next element in list", () => {
    const list = ["A", "B", "C", "D", "E"];
    const value = "C";
    const res = nextElementInList(list, value);
    expect(res).toBe("D");
  });
});

describe("when element is at end of the list", () => {
  it("locates element in list and returns start element in list", () => {
    const list = ["A", "B", "C", "D", "E"];
    const value = "E";
    const res = nextElementInList(list, value);
    expect(res).toBe("A");
  });
});
