import { mount } from "@vue/test-utils";
import { nextTick } from "vue";
import Headline from "@/components/JobSearch/Headline";

describe("Headline", () => {
  // before each test run this
  beforeEach(() => {
    jest.useFakeTimers();
  });

  // after each test run this
  afterEach(() => {
    jest.useRealTimers();
  });

  it("displays introductory action verb", () => {
    const wrapper = mount(Headline);
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Build for everyone");
  });

  it("changes action verb at consistent interval", () => {
    //jest.useFakeTimers();   mock function to be replaced with some real fns here setInterval
    jest.spyOn(global, "setInterval");
    mount(Headline);
    expect(setInterval).toHaveBeenCalled();
    // jest.useRealTimers();
  });

  it("swaps action verb after first interval", async () => {
    const wrapper = mount(Headline);
    jest.runOnlyPendingTimers();
    await nextTick(); // refreshes DOM to update
    const actionPhrase = wrapper.find("[data-test='action-phrase']");
    expect(actionPhrase.text()).toBe("Code for everyone");
  });

  it("removes interval when component disappears", () => {
    jest.spyOn(global, "clearInterval");
    const wrapper = mount(Headline);
    wrapper.unmount();
    expect(clearInterval).toHaveBeenCalled();
  });
});
