var gulp = require('gulp');
var babel = require('gulp-babel');
var plumber = require('gulp-plumber');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
var browserSync = require('browser-sync');
var watch = require('gulp-watch');
var sourcemaps   = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');

//config
var root = "./",
    src = "src/",
    dist = "target/",
    config = {
        "path" : {
            "scss"    : root + src + "assets/scss/",
            "js"      : root + src + "assets/js/",
            "html"    : root + src + "",
            "images"  : root + src + "assets/images/",
            "css"     : root + src + "assets/css/"
        },
        "dist": {
            "css"   : root + dist + "assets/css/",
            "js"    : root + dist + "assets/js/",
            "html"  : root + dist + ""
        }
    };


gulp.task('babel', function() {
    gulp.src(config.path.js + '**/*.js', {base: './src/'})
        .pipe(plumber())
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest( root + dist ));
});

gulp.task('browser-sync', function () {
    browserSync({
        server: {
            baseDir: dist // ルートとなるディレクトリを指定
        }
    });
});

gulp.task('bs-reload', function () {
    browserSync.reload();
});

gulp.task('scss', function () {
    gulp.src(config.path.scss + '**/*.scss')
        .pipe(plumber())
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 3 versions', 'ie >= 8', 'Android >= 4', 'iOS >= 8']))
        .pipe(gulp.dest(config.path.css))
        .pipe(cssmin())
        .pipe(gulp.dest(config.dist.css))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('html', function() {
    gulp.src(config.path.html + '**/*.html' , {base: 'src'})
        .pipe(gulp.dest( root + dist ));
});

gulp.task('images', function() {
    gulp.src(config.path.images + "/**.{png,jpg,svg,webp}", {base: 'src'})
        .pipe(gulp.dest( root + dist ));
});


gulp.task('watch', function() {
    watch( config.path.html + "**/*.html", function(){
        gulp.start(['bs-reload']);
    });
    watch( config.path.js + '**/*.js', function(){
        gulp.start(['babel']);
    });
    watch(config.path.scss + '**/*.scss', function(arg){
        gulp.start(['scss']);
    });
    watch(config.path.html + '**/*.html' , function(arg){
        gulp.start(['html']);
    });
    watch(config.path.images + '/**.{png,jpg,svg,webp}' , function(arg){
        gulp.start(['images']);
    });
});

gulp.task('default', [
    'browser-sync',
    'watch'
]);

gulp.task('dist', [
   'babel',
   'scss',
   'html',
   'images'
]);

