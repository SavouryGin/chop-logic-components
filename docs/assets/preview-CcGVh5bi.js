const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      './DocsRenderer-CFRXHY34-CT2nJHco.js',
      './chunk-NUUEMKO5-D-j0Phgd.js',
      './iframe-rVyc2Aj9.js',
      './index-qVDZzPEr.js',
      './index-BZ-G-mNy.js',
      './jsx-runtime-OAISXtky.js',
      './index-DzcqJxd1.js',
      './index-D-8MO0q_.js',
      './index-D2o5vtt7.js',
      './index-DrFu-skq.js',
      './react-18-DXFvLTkp.js',
    ]),
) => i.map((i) => d[i]);
import { _ as a } from './iframe-rVyc2Aj9.js';
import '../sb-preview/runtime.js';
var i = Object.entries(globalThis.TAGS_OPTIONS ?? {}).reduce((e, r) => {
    let [t, o] = r;
    return o.excludeFromDocsStories && (e[t] = !0), e;
  }, {}),
  d = {
    docs: {
      renderer: async () => {
        let { DocsRenderer: e } = await a(
          () => import('./DocsRenderer-CFRXHY34-CT2nJHco.js'),
          __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),
          import.meta.url,
        );
        return new e();
      },
      stories: {
        filter: (e) => {
          var r;
          return (e.tags || []).filter((t) => i[t]).length === 0 && !((r = e.parameters.docs) != null && r.disable);
        },
      },
    },
  };
export { d as parameters };
