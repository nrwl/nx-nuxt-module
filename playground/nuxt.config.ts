export default defineNuxtConfig({
  modules: ["../src/module"],
  nx: {
    workspaceRoot: ".",
  },
  devtools: { enabled: true },
});
