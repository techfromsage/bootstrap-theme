# Bootstrap v5 Theme

## Versions

There are currently two versions of this theme:

1. The v3 version, this is on the `main` branch and has the old Talis branding, this is the version used by the apps.
2. The v4 version, this is on the `v4` branch and has the new Talis branding, it is not currently in use anywhere.

## Usage

1. Install from npm:

   ```bash
   npm install --save @technologyfromsage/bootstrap-theme
   ```

2. Pull in the theme. Either:

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

### Important note on using hosted CSS

This project is hosted on GitHub pages, and is not considered a suitable production-hosting domain. We should not be relying upon it.

However, for legacy reasons, we appear to have relied on this hosting arrangement to provide CSS URLs to other applications. Specifically, we have a commitment to maintain:

https://techfromsage.github.io/bootstrap-theme/assets/css/talis.css

We will work to remove this from our applications, but in the meantime we must not delete `scss/talis.scss`, which exists only to reproduce this hosted file arrangement.

## Contributing

1. Ensure you have installed https://github.com/nvm-sh/nvm

1. Clone this repository:

   ```bash
   git clone git@github.com:techfromsage/bootstrap-theme.git
   ```

1. Change into the repository directory:

   ```bash
   cd bootstrap-theme
   ```

1. Install the correct Node version:

   ```bash
   nvm install && nvm use
   ```

1. Install dependencies:

   ```bash
   npm ci
   ```

1. Run the application locally:

   ```bash
   npm run start
   ```

1. Open <http://localhost:8080> to see the page in action.

## Building

We have an automated build that runs quality checks. However, the GitHub Pages site relies on having all generated files checked in to source control. Therefore, if you're making changes on a branch, the final step will always be to run the following in a final commit to ensure the generated files are all checked in:

```bash
npm run build
```

## Scripts

The following npm scripts are available.

| Script        | Description                                                                                              |
| ------------- | -------------------------------------------------------------------------------------------------------- |
| `docs`        | Builds the Eleventy-powered documentation site                                                           |
| `server`      | Starts a local server (<http://localhost:3000>) for development                                          |
| `watch`       | Automatically recompiles CSS as it watches the `scss` directory for changes                              |
| `build:css`   | Runs `css-compile` and `css-prefix`                                                                      |
| `css-compile` | Compiles source Sass into CSS                                                                            |
| `lint`        | Runs [Prettier] over sources, and [Stylelint](https://stylelint.io) against source Sass for code quality |
| `css-prefix`  | Runs [Autoprefixer](https://github.com/postcss/autoprefixer) on the compiled CSS                         |
| `test`        | Runs `css-lint` and `css`, in sequential order                                                           |

### Stylelint

Stylelint is included, as is Bootstrap's default Stylelint config, [stylelint-config-twbs-bootstrap](https://github.com/twbs/stylelint-config-twbs-bootstrap).
