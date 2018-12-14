'use strict';

const {series, src, dest} = require('gulp');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const sourcemaps = require('gulp-sourcemaps');
const cleanCSS = require('gulp-clean-css');
const change = require('gulp-change');
const fs = require('fs');

const cssMinify = () => {

    return src('src/scss/*.scss')
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

const performChange = (content) => {

    let css = fs.readFileSync('css/base.min.css').toString('utf-8');
    return content.replace(/{{STYLE}}/g, css);
};

const htmlChange = () => {

    return src('amp.html')
        .pipe(change(performChange))
        .pipe(dest('/'))
};

exports.default = series(cssMinify, jsMinify, htmlChange);
