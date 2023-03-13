export default defineNuxtRouteMiddleware((_to, _from) => {
  const counter = useTesting();
  if (counter.value < 10) {
    return abortNavigation();
  }
});
