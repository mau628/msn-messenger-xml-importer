npm run build 
git add dist
git commit -m 'adding dist subtree'
git push origin --delete gh-pages
git subtree push --prefix dist origin gh-pages