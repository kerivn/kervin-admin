/*
 * @Author: kervin
 * @LastEditTime: 2023-01-07 14:35:36
 * @FilePath: \kervin-admin\build\plugins\autoImport.ts
 * @Usage: https://github.com/antfu/unplugin-vue-components#installation  https://github.com/antfu/unplugin-auto-import#install
 * @Description: 自动导入插件
 */

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
export function configImportPlugin() {
  return [
    AutoImport({
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],

      // global imports to register
      imports: [
        // presets
        'vue',
        'vue-router',
        // custom
        {
          //   '@vueuse/core': [
          //     // named imports
          //     'useMouse', // import { useMouse } from '@vueuse/core',
          //     // alias
          //     ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
          //   ],
          //   'axios': [
          //     // default imports
          //     ['default', 'axios'], // import { default as axios } from 'axios',
          //   ],
          //   '[package-name]': [
          //     '[import-names]',
          //     // alias
          //     ['[from]', '[alias]'],
          //   ],
        },
      ],

      // Auto import for module exports under directories
      // by default it only scan one level of modules under the directory
      dirs: [
        // './hooks',
        // './composables' // only root modules
        // './composables/**', // all nested modules
        // ...
      ],

      // Auto import inside Vue template
      // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
      vueTemplate: false,

      // Generate corresponding .eslintrc-auto-import.json file.
      // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
      eslintrc: {
        enabled: false, // Default `false`
        filepath: '/.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
        globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
      },
      // Custom resolvers, compatible with `unplugin-vue-components`
      // see https://github.com/antfu/unplugin-auto-import/pull/23/
      resolvers: [ElementPlusResolver()],
      // Filepath to generate corresponding .d.ts file.
      // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
      // Set `false` to disable.
      dts: 'types/auto-imports.d.ts',
    }),
    Components({
      // relative paths to the directory to search for components.
      dirs: ['src/components'],

      // valid file extensions for components.
      extensions: ['vue'],
      // search for subdirectories
      deep: true,

      // Allow subdirectories as namespace prefix for components.
      directoryAsNamespace: false,
      // Subdirectory paths for ignoring namespace prefixes
      // works when `directoryAsNamespace: true`
      globalNamespaces: [],

      // auto import for directives
      // default: `true` for Vue 3, `false` for Vue 2
      // Babel is needed to do the transformation for Vue 2, it's disabled by default for performance concerns.
      // To install Babel, run: `npm install -D @babel/parser`
      directives: true,

      // Transform path before resolving
      importPathTransform: (v) => v,

      // Allow for components to override other components with the same name
      allowOverrides: false,

      // filters for transforming targets
      include: [/\.vue$/, /\.vue\?vue/],
      exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
      // resolvers for custom components
      resolvers: [ElementPlusResolver()],
      // generate `components.d.ts` global declarations,
      // also accepts a path for custom filename
      // default: `true` if package typescript is installed
      dts: 'types/components.d.ts',
    }),
  ];
}
