import gulp from "gulp";
import sass from "gulp-sass";

const paths = {
  styles: {
    src: "assets/scss/styles.scss",
    dest: "src/static/styles"
  }
};

export function styles() {
  return gulp
    .src(paths.styles.src)
    .pipe(sass())
    .pipe(gulp.dest(paths.styles.dest));
}
