# Bootstrap v5 Theme
## Usage
1. Create a [Personal Access Token](https://github.com/settings/tokens/) granting the `write:packages` scope. `write` also allows `read`…
2. Add `@talis:registry=https://npm.pkg.github.com` to your project's `.npmrc` file.
3. Place variable overrides first, then import the styles you need. Some Bootstrap partials stylesheets are required no matter what.

```scss
// Toggle global options
$enable-gradients: false;
$enable-shadows: false;

// Customize some defaults
@import "bootstrap/scss/functions"; // Required

@import "variables"; // Talis customisations are here

@import "bootstrap/scss/variables"; // Required
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

@import 'theme';
```

## Contributing

Be sure to have [Node.js](https://nodejs.org/) installed before proceeding.

```shell
# Clone the repo
git clone https://github.com/talis/bootstrap-theme
cd $DEVELOPMENT_WORK_DIR/bootstrap-theme

# Install dependencies
npm i

# Compile Sass
npm run css-compile

# Watch Sass for changes (uses nodemon)
npm run watch

# Start local server (uses sirv-cli)
npm run server

# Watches Sass for changes and starts a local server
npm start
```

For the most straightforward development, open two Terminal tabs to execute `npm run server` and `npm run watch` at the same time.

Open <http://localhost:3000> to see the page in action.

## Scripts

The following npm scripts are available to you in this starter repo. With the exception of `npm start` and `npm test`, the remaining scripts can be run from your command line with `npm run scriptName`.

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

### Optimizing JS

Similar to optimizing CSS, Bootstrap publishes individual scripts for each of their plugins. This allows you to import only what you need, versus the entire bundle and dependencies. For example, if you don't plan on using dropdowns, tooltips, or popovers, you can safely omit the Popper.js depdendency.

Add more options here, or import the entire `bootstrap-bundle.min.js` file, to get all JavaScript plugins and Popper.js.

### PurgeCSS

[PurgeCSS](https://purgecss.com/) is a [PostCSS](https://postcss.org) plugin that removes unused CSS based on your site's HTML. It finds rulesets that are unused by your HTML and removes them, ensuring only what's needed is sent to your site's visitors while improving file size and performance.

A single npm script runs PurgeCSS against the `index.html` file to remove unused styles from `assets/css/starter.css`.

To purge CSS, run `npm run css-purge` from the command line. This executes the following:

```shell
npm purgecss --css assets/css/starter.css --content index.html --output assets/css/
```

PurgeCSS is a PostCSS plugin and [can be configured](https://purgecss.com/configuration.html) to your exact needs with a little extra effort, including additional [command line options](https://purgecss.com/CLI.html).

### Stylelint

Stylelint is included, as is Bootstrap's default Stylelint config, [stylelint-config-twbs-bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap).
