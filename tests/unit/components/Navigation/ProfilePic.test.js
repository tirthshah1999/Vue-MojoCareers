import { shallowMount } from "@vue/test-utils";

import ProfilePic from "@/components/Navigation/ProfilePic.vue";

describe("ProfilePic", () => {
  it("renders", () => {
    const wrapper = shallowMount(ProfilePic);
    expect(wrapper.exists()).toBe(true);
  });
});
