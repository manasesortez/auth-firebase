{
    rules = {
        "jsx-a11y/img-redundant-alt": [2, {
            "components": ["Image"],
            "words": ["Bild", "Foto"],
        }],
        // suppress errors for missing 'import React' in files
        "react/react-in-jsx-scope": "off",
        // allow jsx syntax in js files (for next.js project)
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }], //should add ".ts" if typescript project
    }

    module.exports = { "env": { "browser": true, "es6": true }, "extends": "eslint:recommended", "parserOptions": { "ecmaFeatures": { "experimentalObjectRestSpread": true, "jsx": true }, "sourceType": "module" }, "plugins": [ "react" ], "rules": { "indent": [ "error", 4 ], "linebreak-style": [ "error", "unix" ], "quotes": [ "error", "single" ], "semi": [ "error", "always" ] } };


}
