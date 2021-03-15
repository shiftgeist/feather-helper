import { icons } from "feather-icons";

const feather = (name, options = {}) => {
  const svgOptions = Object.assign(
    {
      class: "",
      color: "currentColor",
      width: 24,
      height: 24,
      "stroke-width": 2,
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
    options
  );

  try {
    return icons[name].toSvg(svgOptions);
  } catch (error) {
    console.error(`Icon "${name}" was not found.`);
  }
};

if (window !== undefined) {
  window.Feather = feather;
}

export default feather;
