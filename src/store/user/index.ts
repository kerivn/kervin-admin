//src/store/user.ts

import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      name: '张三',
      token:'token'
    }
  },
    // 开启数据缓存
    persist: {
      enabled: true,
      strategies: [
        {
          storage: localStorage,
        },
      ],
    }
})

