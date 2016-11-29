var gulp = require('gulp'),
postcss = require('gulp-postcss'),
cssImport = require('postcss-import'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
mixins = require('postcss-mixins'),
hexrgba = require('postcss-hexrgba');

gulp.task('styles', function (){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([
            cssImport,
            cssvars,            
            mixins,
            hexrgba,
            nested,          
            autoprefixer
        ]))
        .on('error', function(errorInfo){
            console.log(errorInfo.toString());
            this.emit('end');
        })
        .pipe(gulp.dest('./app/temp/styles/'));
});