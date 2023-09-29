vitepress build
cp README.md .vitepress/Git/README.md
cd .vitepress/Git
git add .
git commit -m 'a'
git push
cd ../..

