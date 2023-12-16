import { flushPromises, mount } from "@vue/test-utils";
import App from "../src/App.vue";

test("mount component", async () => {
  expect(App).toBeTruthy();

  const wrapper = mount(App);

  expect(wrapper.find('h1').html()).toContain('Vite + Vue')
});
