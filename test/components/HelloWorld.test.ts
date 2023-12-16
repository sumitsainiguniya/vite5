import { flushPromises, mount } from "@vue/test-utils";
import HelloWorld from "../../src/components/HelloWorld.vue";

test("mount component", async () => {
  expect(HelloWorld).toBeTruthy();

  const wrapper = mount(HelloWorld, { props: { msg: "Hello World1" } });

  await wrapper.find("button").trigger("click");

  expect(wrapper.find('h1').html()).toContain('Hello World1')

  expect(wrapper.html()).toContain("Release 2");
});
