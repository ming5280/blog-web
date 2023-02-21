import { defineStore } from 'pinia';

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      name: 'Hello Word',
    };
  },
  actions: {
    updateName(name: string) {
      this.name = name;
    },
  },
});
