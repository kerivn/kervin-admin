//src/store/user.ts

import { defineStore } from 'pinia'

 const useUserStore = defineStore({
  id: 'user', // id必填，且需要唯一
  state: () => {
    return {
      token:  '',
      nickname: '',
      avatar: '',
      roles: [],
      perms: []
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

export default useUserStore