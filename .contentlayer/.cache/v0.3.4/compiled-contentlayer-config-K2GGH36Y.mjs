// contentlayer.config.js
import { makeSource, defineDocumentType } from "contentlayer/source-files";
var Blog = defineDocumentType(() => ({
  name: "Blog",
  filePathPattern: "**/**/*.mdx",
  fields: {
    title: {
      type: "string"
    },
    publishAt: {
      type: "date"
    },
    updatedAt: {
      type: "date"
    }
  }
}));
var contentlayer_config_default = makeSource({
  contentDirPath: "content"
});
export {
  contentlayer_config_default as default
};
//# sourceMappingURL=compiled-contentlayer-config-K2GGH36Y.mjs.map
