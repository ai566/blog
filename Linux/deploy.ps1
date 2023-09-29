vitepress build
cp README.md .vitepress/Linux/README.md
cd .vitepress/Linux
git add .
git commit -m 'a'
git push
cd ../..

