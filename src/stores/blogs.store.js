import { defineStore } from "pinia";
export const useBlogs = defineStore("blogsStore", {
  state: () => ({
    blogs: [
      {
        id: "1",
        title: "VueJS cơ bản",
        content: "VueJS là một framework",
        created: "22/09/2023",
      },
      {
        id: "2",
        title: "VueJS cơ bản 2",
        content: "VueJS là một framework",
        created: "22/09/2023",
      },
      {
        id: "3",
        title: "VueJS cơ bản 3",
        content: "VueJS là một framework",
        created: "22/09/2023",
      },
      {
        id: "4",
        title: "VueJS cơ bản 4",
        content: "VueJS là một framework",
        created: "22/09/2023",
      },
      {
        id: "5",
        title: "VueJS cơ bản 5",
        content: "VueJS là một framework",
        created: "22/09/2023",
      },
    ],
  }),
  getters: {},
  actions: {},
});
