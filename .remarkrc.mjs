// import remarkPresetLintConsistent from "remark-preset-lint-consistent";
// import remarkPresetLintRecommended from "remark-preset-lint-recommended";
import remarkFrontmatter from "remark-frontmatter";
import remarkLintFrontmatterSchema from "remark-lint-frontmatter-schema";

const remarkConfig = {
  plugins: [
    remarkFrontmatter,
    remarkLintFrontmatterSchema,
    // remarkPresetLintConsistent,
    // remarkPresetLintRecommended,
  ],
};

export default remarkConfig;
