import { join, resolve } from "path";
import { existsSync } from "fs-extra";
import { defu } from "defu";
import { defineNuxtModule } from "@nuxt/kit";

export interface ModuleOptions {
  workspaceRoot: string;
}

export default defineNuxtModule({
  meta: { name: "@nx/nuxt/module", configKey: "nx" },
  setup(options, nuxt) {
    nuxt.options.alias = defu(
      nuxt.options.alias,
      nxTsPaths(options.workspaceRoot ?? "")
    );
  },
});

/**
 * read the compilerOptions.paths option from a tsconfig and return as aliases for Nuxt
 **/
function nxTsPaths(workspaceRoot: string) {
  const tsConfigPath = getTsConfig(
    join(workspaceRoot, "tsconfig.base.json"),
    workspaceRoot
  );
  const tsPaths = require(tsConfigPath)?.compilerOptions?.paths as Record<
    string,
    string[]
  >;

  const alias: Record<string, string> = {};
  if (tsPaths) {
    for (const p in tsPaths) {
      // '@org/something/*': ['libs/something/src/*'] => '@org/something': '{pathToWorkspaceRoot}/libs/something/src'
      alias[p.replace(/\/\*$/, "")] = join(
        workspaceRoot,
        tsPaths[p][0].replace(/\/\*$/, "")
      );
    }
  }

  return alias;
}

function getTsConfig(
  preferredTsConfigPath: string,
  workspaceRoot: string
): string {
  return [
    resolve(preferredTsConfigPath),
    resolve(join(workspaceRoot, "tsconfig.base.json")),
    resolve(join(workspaceRoot, "tsconfig.json")),
  ].find((tsPath) => {
    if (existsSync(tsPath)) {
      return tsPath;
    }
  });
}
