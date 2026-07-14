import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const repositoryName = env.GITHUB_REPOSITORY?.split("/")[1] ?? "";
  // const base =
  //   env.GITHUB_ACTIONS && repositoryName ? `/${repositoryName}/` : "/";

  const base = "/";

  return {
    base,
    plugins: [react(), tailwindcss(), tsconfigPaths()],
    server: {
      host: "0.0.0.0",
      port: 3000,
    },
  };
});
