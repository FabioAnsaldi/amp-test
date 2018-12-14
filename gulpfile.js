'use strict';

const {series, src, dest, watch} = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const sourcemaps = require('gulp-sourcemaps');
const sass = require('gulp-sass');
const cleanCSS = require('gulp-clean-css');
const replace = require('gulp-replace-string');
const fs = require('fs');
const jsonminify = require("jsonminify");

const cssMinify = () => {

    return src('src/scss/*.scss')
        .pipe(sass())
        .pipe(rename("base.min.css"))
        .pipe(sourcemaps.init())
        .pipe(cleanCSS())
        .pipe(sourcemaps.write('./'))
        .pipe(dest('css'));
};

const jsMinify = () => {

    return src('src/js/*.js')
        .pipe(rename("base.min.js"))
        .pipe(sourcemaps.init())
        .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(dest('js'));
};

const htmlChange = () => {

    let css = fs.readFileSync('css/base.min.css').toString('utf-8');
    let json = fs.readFileSync('src/amp.json').toString('utf-8');

    return src('src/amp.html')
        .pipe(replace(new RegExp('@@STYLE@@', 'g'), css))
        .pipe(replace(new RegExp('@@JSON@@', 'g'), jsonminify(json)))
        .pipe(dest('./'));
};

const watching = () => {

    watch('src/scss/*', cssMinify);
    watch('src/js/*', jsMinify);
    watch('src/*', htmlChange);
};

exports.watching = watching;
exports.default = series(cssMinify, jsMinify, htmlChange);
