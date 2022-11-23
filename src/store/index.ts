import { createPinia } from 'pinia';
import piniaPluginPersist from 'pinia-plugin-persist';

import useUserStore from './modules/user';
import useAppStore from './modules/app';
import useSettingStore from './modules/settings';
import usePermissionStore from './modules/permissions';


const store = createPinia();
store.use(piniaPluginPersist);

export const useStore = () => ({
    userStore: useUserStore(),
    appStore: useAppStore(),
    settingStore: useSettingStore(),
    permissionStore:usePermissionStore()
});

export default store;
