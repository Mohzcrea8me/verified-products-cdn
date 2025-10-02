import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "index.js",
  output: [
    {
      file: "dist/index.umd.js",
      format: "umd",
      name: "VerifiedProducts",
      exports: "named",
    },
  ],
  plugins: [
    resolve({
      browser: true,
      preferBuiltins: false,
    }),
    commonjs({
      include: "node_modules/**",
      namedExports: {
        "node_modules/form-data/lib/form_data.js": ["default"],
      },
    }),
  ],
};
