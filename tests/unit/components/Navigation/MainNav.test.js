// shallowMount was to test for only that particular comp whereas mount comp as well as nested ones too.
import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import MainNav from "@/components/Navigation/MainNav";


describe("MainNav", () => {
  // let wrapper;
  // beforeEach(() => {
  //    wrapper = shallowMount(MainNav, {
  //     global: {
  //       stubs: {
  //         "router-link": RouterLinkStub,   // as test will not know router-link as its global in vue
  //       },
  //     },
  //   });
  // });

  // or we can use factory function that return object
  const createConfig = () => ({
      global: {
        stubs: {
          "router-link": RouterLinkStub,   // as test will not know router-link as its global in vue
        },
      },
  });

  it("displays company name", () => {
    const wrapper = shallowMount(MainNav, createConfig());
    expect(wrapper.text()).toMatch("Mojo Careers");
  });

  it("displays menu items for navigation", () => {
    const wrapper = shallowMount(MainNav, createConfig());
    // const navigationMenuItems = wrapper.findAll("li"); it may change(li to div) so give data attribute to find
    const navigationMenuItems = wrapper.findAll(
      "[data-test='main-nav-list-item']"
    );
    const navigationMenuTexts = navigationMenuItems.map((item) => item.text());
    expect(navigationMenuTexts).toEqual([
      "Teams",
      "Location",
      "Life at Mojo Corp",
      "How we hire",
      "Students",
      "Jobs",
    ]);
  });
});

describe("when user logs out", () => {
  it("displays action button", () => {
    let wrapper = shallowMount(MainNav);
    // const loginButton = wrapper.findComponent({ name: "ActionButton" });  // same reason as above
    const loginButton = wrapper.find("[data-test='login-button']");
    expect(loginButton.exists()).toBe(true);
  });
});

describe("when user logs in", () => {
  it("displays user profile pic", async () => {
    let wrapper = shallowMount(MainNav);
    let profilePic = wrapper.find("[data-test='profile-pic']");
    expect(profilePic.exists()).toBe(false);

    const loginButton = wrapper.find("[data-test='login-button']");
    await loginButton.trigger("click");

    profilePic = wrapper.find("[data-test='profile-pic']");
    expect(profilePic.exists()).toBe(true);
  });

  it("displays subnav with additional information", async () => {
    let wrapper = shallowMount(MainNav);
    let subnav = wrapper.find("[data-test='subnav']");
    expect(subnav.exists()).toBe(false);

    const loginButton = wrapper.find("[data-test='login-button']");
    await loginButton.trigger("click");

    subnav = wrapper.find("[data-test='subnav']");
    expect(subnav.exists()).toBe(true);
  });
});
