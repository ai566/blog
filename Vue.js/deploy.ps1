vitepress build
cp README.md .vitepress/Vue.js/README.md
cd .vitepress/Vue.js
git add .
git commit -m 'a'
git push
cd ../..

