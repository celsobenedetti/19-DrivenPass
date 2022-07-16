import { computed, reactive } from "vue";

const page = reactive({
  title: "My storage",
});

const getTitle = computed(() => page.title);

const setTitle = (title: string) => {
  page.title = title;
};

export default { getTitle, setTitle };
