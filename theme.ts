import { buildLegacyTheme } from "sanity"

const props = {
  "--my-white": "#fff",
  "--my-black": "#000",
  "--my-blue": "#6035ff",
  "--my-red": "#ff5159",
  "--my-yellow": "#FFFF00",
  "--my-green": "#359d27",
}

export const myTheme = buildLegacyTheme({
  /* Base theme colors */
  "--black": props["--my-black"],
  "--white": props["--my-white"],

  "--gray": "#666",
  "--gray-base": "#666",

  "--component-bg": props["--my-black"],
  "--component-text-color": props["--my-white"],

  /* Brand */
  "--brand-primary": props["--my-yellow"],

  // Default button
  "--default-button-color": "#666",
  "--default-button-primary-color": props["--my-blue"],
  "--default-button-success-color": props["--my-green"],
  "--default-button-warning-color": props["--my-yellow"],
  "--default-button-danger-color": props["--my-red"],

  /* State */
  "--state-info-color": props["--my-blue"],
  "--state-success-color": props["--my-green"],
  "--state-warning-color": props["--my-yellow"],
  "--state-danger-color": props["--my-red"],

  /* Navbar */
  "--main-navigation-color": props["--my-black"],
  "--main-navigation-color--inverted": props["--my-white"],

  "--focus-color": props["--my-blue"],
})
