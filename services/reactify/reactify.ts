import { JSX } from "react";

import rehypeReact, { Options } from "rehype-react";
import rehypeSanitize from "rehype-sanitize";
import remarkGfm from "remark-gfm";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import prod from "react/jsx-runtime";
import rehypePrism from "rehype-prism";

// you have to load css manual
import "prism-themes/themes/prism-material-oceanic.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.min.css";
import "prismjs/plugins/autolinker/prism-autolinker.min.css";
import "prismjs/plugins/command-line/prism-command-line.min.css";
import "prismjs/plugins/diff-highlight/prism-diff-highlight.min.css";
import "prismjs/plugins/inline-color/prism-inline-color.min.css";
import "prismjs/plugins/match-braces/prism-match-braces.min.css";

import "prismjs/components/prism-javascript";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-css";
import "prismjs/components/prism-css-extras";
import "prismjs/components/prism-scss";
import "prismjs/components/prism-sass";
import "prismjs/components/prism-less";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-tsx";
import "prismjs/components/prism-reason";
import "prismjs/components/prism-dart";
import "prismjs/components/prism-java";
import "prismjs/components/prism-kotlin";
import "prismjs/components/prism-scala";
import "prismjs/components/prism-markdown";
import "prismjs/components/prism-markup";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-shell-session";
import "prismjs/components/prism-powershell";
import "prismjs/components/prism-c";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-cpp";
import "prismjs/components/prism-objectivec";
import "prismjs/components/prism-swift";
import "prismjs/components/prism-python";
import "prismjs/components/prism-r";
import "prismjs/components/prism-regex";
import "prismjs/components/prism-json";
import "prismjs/components/prism-json5";
import "prismjs/components/prism-jsonp";
import "prismjs/components/prism-yaml";
import "prismjs/components/prism-toml";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-go";
import "prismjs/components/prism-ocaml";
import "prismjs/components/prism-csharp";
import "prismjs/components/prism-batch";
import "prismjs/components/prism-elixir";
import "prismjs/components/prism-docker";
import "prismjs/components/prism-graphql";
// import "prismjs/components/prism-php-extras"; // problem
import "prismjs/components/prism-perl";
import "prismjs/components/prism-sql";
import "prismjs/components/prism-ruby";
import "prismjs/components/prism-zig";
import "prismjs/components/prism-diff";
import CustomLink from "./components/custom-link";

const production: Options = {
  // @ts-expect-error: the react types are missing.
  Fragment: prod.Fragment,
  // @ts-expect-error: the react types are missing.
  jsx: prod.jsx,
  // @ts-expect-error: the react types are missing.
  jsxs: prod.jsxs,
  components: {
    a: CustomLink as any,
  },
};

export async function reactify(markdown: string): Promise<JSX.Element> {
  const { result } = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSanitize)
    .use(rehypeReact, production)
    .use(rehypePrism, {
      plugins: [
        "line-numbers",
        "copy-to-clipboard",
        "autolinker",
        "command-line",
        "diff-highlight",
        "inline-color",
        "match-braces",
      ],
    })
    .process(markdown);

  return result;
}
