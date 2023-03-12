import { ALERTS_STORE_ID } from '~/constants';

interface IState {}

export const useAlertsStore = defineStore(ALERTS_STORE_ID, {
  state: (): IState => ({}),
  getters: {},
  actions: {
    handleError (error: unknown) {
      console.error('🛑 ERROR:', error);
    },
    handleWarning (error: unknown) {
      console.log('⚠️ WARNING:', error);
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAlertsStore, import.meta.hot));
}
