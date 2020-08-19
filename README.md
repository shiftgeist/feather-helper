# feather-helper

> Helper for [`feather-icons`](https://github.com/feathericons/feather) to simplify the use.

 ![npm version](https://img.shields.io/npm/v/feather-helper) ![npm license](https://img.shields.io/npm/l/feather-helper) [![Maintainability](https://api.codeclimate.com/v1/badges/44399aa35283c6f73e22/maintainability)](https://codeclimate.com/github/shiftgeist/feather-helper/maintainability)

## Highlights

- lightweight (adding ~0.2kB to `feather-icons`)
- adds types for autocompletion
- simplifies usage

## Install

```bash
$ npm i feather-helper
```

Note: `feather-icons` module is not required.

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
