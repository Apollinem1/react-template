export default [{
    settings: {
        next: {
            rootDir: "src/",
        },

        env: {
            browser: true,
            es2020: true,
            node: true,
        },

        extends: [
            "eslint:recommended",
            "plugin:@typescript-eslint/recommended",
            "plugin:@typescript-eslint/recommended-requiring-type-checking",
            "plugin:react-hooks/recommended",
            "plugin:tailwindcss/recommended",
            "prettier",
        ],

        ignorePatterns: ["dist", ".eslintrc.cjs"],
        parser: "@typescript-eslint/parser",

        parserOptions: {
            tsconfigRootDir: "__dirname",
            project: "tsconfig.eslint.json",
        },

        plugins: ["@typescript-eslint"],

        tailwindcss: {
            callees: ["clsx"],
            config: "tailwind.config.js",
        },
    },

    rules: {
        "react-refresh/only-export-components": "off",
        "react-hooks/exhaustive-deps": "off",
        "import/no-anonymous-default-export": "off",
    },
}];