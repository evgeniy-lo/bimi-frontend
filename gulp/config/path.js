import * as nodePath from "path";

const rootFolder = nodePath.basename(nodePath.resolve());
const buildFolder = `./dist`;
const sourceFolder = `./source`;

export const path = {
  build: {
    assets: `${buildFolder}/assets/`,
    scripts: `${buildFolder}/js/`,
    styles: `${buildFolder}/css/`,
    images: `${buildFolder}/assets/img/`,
    html: `${buildFolder}/`
  },
  source: {
    assets: `${sourceFolder}/assets/**/*.*`,
    scripts: `${sourceFolder}/js/main.js`,
    styles: `${sourceFolder}/scss/main.scss`,
    images: `${sourceFolder}/assets/img/**/*.{jpg,jpeg,png,gif,webp}`,
    svg: `${sourceFolder}/assets/img/**/*.svg`,
    html: `${sourceFolder}/*.html`
  },
  watch: {
    scripts: `${sourceFolder}/js/**/*.js`,
    styles: `${sourceFolder}/scss/**/*.scss`,
    images: `${sourceFolder}/assets/img/**/*.{jpg,jpeg,png,svg,gif,ico,webp}`,
    html: `${sourceFolder}/*.html`
  },
  clean: buildFolder,
  buildFolder: buildFolder,
  sourceFolder: sourceFolder,
  rootFolder: rootFolder
}
