# feather-helper

> Helper for [`feather-icons`](https://github.com/feathericons/feather) to simplify the use.

![npm](https://img.shields.io/npm/v/feather-helper) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/feather-helper) [![Maintainability](https://api.codeclimate.com/v1/badges/44399aa35283c6f73e22/maintainability)](https://codeclimate.com/github/shiftgeist/feather-helper/maintainability) [![Release](https://github.com/shiftgeist/feather-helper/actions/workflows/release.yml/badge.svg)](https://github.com/shiftgeist/feather-helper/actions/workflows/release.yml)

## Highlights

- lightweight
- adds types for autocompletion
- simplifies usage

## Install

```bash
npm install feather-icons
npm install feather-helper
```

Note: `feather-icons` module is required.

## Usage

Example usage in [Svelte](https://github.com/sveltejs/svelte):

```html
<script>
  import Feather from "feather-helper";

  const githubIcon = Feather("github", {
    class: "flex",
    color: "#F09383",
    "stroke-width": 3,
  });
</script>

{@html githubIcon}
```

Check out a simple example in the [example](./example) folder.
