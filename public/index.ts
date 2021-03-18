import feather from "../lib/feather-helper";

const icons = document.getElementsByClassName("icon");

for (const icon of icons) {
  const iconName = icon["dataset"].icon;

  icon.innerHTML = feather(iconName, {
    class: "github-icon",
    color: "currentColors",
    height: 48,
    width: 48,
    "stroke-linecap": "round",
    "stroke-linejoin": "miter-clip",
    "stroke-width": 1,
  });
}
