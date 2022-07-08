import { mount } from "@vue/test-utils";
import TextInput from "@/components/Shared/TextInput";

describe("TextInput", () => {
    it("communicates that user has entered character", () => {
        const wrapper = mount(TextInput, {
            props: {
                modelValue: "",
            },
        });

        const input = wrapper.find("input");
        input.setValue("N");
        input.setValue("Y");
        input.setValue("NYC");
        console.log(wrapper.emitted());
        const messages = wrapper.emitted()["update:modelValue"];
        expect(messages).toEqual([ [ 'N' ], [ 'Y' ], [ 'NYC' ] ]);
    });
});