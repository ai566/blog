vitepress build
cp README.md .vitepress/diary/README.md
cd .vitepress/diary
git add .
git commit -m 'a'
git push
cd ../..

