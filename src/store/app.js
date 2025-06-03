import { defineStore } from 'pinia';
import $http from '@/http';
import { base64_decode } from '@/tools/base64Decode';

const useAppStore = defineStore({
  id: 'app',

  state: () => ({}),

  getters: {},

  actions: {},
});

export default useAppStore;
