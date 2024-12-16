# Bootstrap v5 Theme

## Versions
There are currently two versions of this theme:

1. The v3 version, this is on the `main` branch and has the old Talis branding, this is the version used by the apps.
2. The v4 version, this is on the `v4` branch and has the new Talis branding, it is not currently in use anywhere.

## Usage
1. Create a [Personal Access Token](https://github.com/settings/tokens/) granting the `write:packages` scope. `write` also allows `read`…
2. Add `@talis:registry=https://npm.pkg.github.com` to your project's `.npmrc` file.

3. Pull in the theme. Either:
  - Specify the variable overrides, import the rest of Bootstrap, and then include the theme partial

```scss
@import "variables"; // Talis customisations are here
@import "bootstrap/scss/bootstrap";
@import "theme";
```

Or
- Place variable overrides first, then import the styles you need.


```scss
// Toggle global options – these need to be set ahead of the functions
$enable-gradients: false;
$enable-shadows: false;

// Customize some defaults
@import "bootstrap/scss/functions"; // Required

@import "variables"; // Talis customisations are here
@import "bootstrap/scss/variables"; // Required

// Map overrides go here
@import "bootstrap/scss/maps"; // Required

@import "bootstrap/scss/mixins"; // Required
@import "bootstrap/scss/utilities"; // Required

@import "bootstrap/scss/root"; // Required
@import "bootstrap/scss/reboot"; // Required
@import "bootstrap/scss/type";
@import "bootstrap/scss/images";

// Core Bootstrap components
@import "bootstrap/scss/containers";
@import "bootstrap/scss/grid";
@import "bootstrap/scss/tables";
@import "bootstrap/scss/forms";
@import "bootstrap/scss/buttons";
@import "bootstrap/scss/transitions";
@import "bootstrap/scss/dropdown";
@import "bootstrap/scss/button-group";
@import "bootstrap/scss/nav";
@import "bootstrap/scss/navbar";
@import "bootstrap/scss/accordion";
@import "bootstrap/scss/breadcrumb";
@import "bootstrap/scss/pagination";
@import "bootstrap/scss/badge";
@import "bootstrap/scss/alert";
@import "bootstrap/scss/progress";
@import "bootstrap/scss/close";
@import "bootstrap/scss/toasts";
@import "bootstrap/scss/modal";

// Helpers
@import "bootstrap/scss/helpers";

// Utilities
@import "bootstrap/scss/utilities/api";

@import "theme";
```

## Contributing

Be sure to have [Node.js](https://nodejs.org/) installed before proceeding.

```shell
# Clone the repo
git clone https://github.com/talis/bootstrap-theme
cd $DEVELOPMENT_WORK_DIR/bootstrap-theme

# Install dependencies
npm i

# Compiles Sass, builds the Eleventy-powered docs, watches both for changes
npm start
```

Open <http://localhost:8080> to see the page in action.

## Scripts

The following npm scripts are available. With the exception of `npm start` and `npm test`, the remaining scripts can be run from your command line with `npm run scriptName`.

| Script | Description |
| --- | --- |
| `docs` | Builds the Eleventy-powered documentation site
| `server` | Starts a local server (<http://localhost:3000>) for development |
| `watch` | Automatically recompiles CSS as it watches the `scss` directory for changes |
| `css` | Runs `css-compile` and `css-prefix` |
| `css-compile` | Compiles source Sass into CSS |
| `css-lint` | Runs [Stylelint](https://stylelint.io) against source Sass for code quality |
| `css-prefix` | Runs [Autoprefixer](https://github.com/postcss/autoprefixer) on the compiled CSS |
| `css-purge` | Runs [PurgeCSS](https://purgecss.com) to remove CSS that is unused by `index.html` |
| `test` | Runs `css-lint` and `css`, in sequential order |

### Optimizing CSS

Before you start to use tools that remove Bootstrap styling like [PurgeCSS](#purgecss), you can make some broad optimizations by only including the stylesheets you think you'll need.


### Stylelint

Stylelint is included, as is Bootstrap's default Stylelint config, [stylelint-config-twbs-bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap).
