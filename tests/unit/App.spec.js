import { shallowMount } from "@vue/test-utils";
import List from "@/components/List.vue";

describe("List.vue", () => {
  it("renders props.list when passed", () => {
    const task = [
      {id:1, title: '아무것도하기싫다.' },
      {id:2, title: 'jest ㅈ같다.' }
  ];

    const wrapper = shallowMount(List, {
      propsData: {
        task
      }
    });
    console.log(wrapper.html()) // 마크업 출력

    // expect(wrapper.find("h1").text()).toBe('아무것도하기싫다.');
    task.map((tasks) => {
      expect(wrapper.text()).toMatch(tasks.title)
    })
   
  });
});
