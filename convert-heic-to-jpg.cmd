@echo off
REM Requires: magick (ImageMagick) installed and in PATH
for %%f in (public\*.HEIC) do (
    magick "%%f" "public\%%~nf.JPG"
)
echo Conversion complete.
pause