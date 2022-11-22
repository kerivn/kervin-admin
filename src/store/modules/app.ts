import { AppState } from './types';
import { defineStore } from 'pinia';
import { localStorage } from '@/utils/storage';
const useAppStore = defineStore({
    id: 'app',
    state: (): AppState => ({
        device: 'desktop',
        language: 'zhCn',
        size: localStorage.get('size') || 'default',
    }),
    actions: {
        toggleDevice(device: string) {
            this.device = device;
        },
        setLanguage(language: string) {
            this.language = language;
            localStorage.set('language', language);
        },
        setSize(size: string) {
            this.size = size;
            localStorage.set('size', size);
          },
    },
});

export default useAppStore;
