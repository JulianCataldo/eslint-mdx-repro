import remarkPresetLintConsistent from "remark-preset-lint-consistent";
import remarkPresetLintRecommended from "remark-preset-lint-recommended";
import remarkPresetLintMarkdownStyleGuide from "remark-preset-lint-markdown-style-guide";
import remarkFrontmatter from "remark-frontmatter";
import remarkLintFrontmatterSchema from "remark-lint-frontmatter-schema";

const remarkConfig = {
  plugins: [
    remarkFrontmatter,
    remarkLintFrontmatterSchema,
    remarkPresetLintConsistent,
    remarkPresetLintMarkdownStyleGuide,
    remarkPresetLintRecommended,
  ],
};

export default remarkConfig;
