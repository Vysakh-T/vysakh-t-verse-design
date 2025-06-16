
#!/bin/bash

# Build the project
npm run build

# Navigate to the build output directory
cd dist

# Initialize git if not already initialized
if [ ! -d .git ]; then
  git init
  git checkout -b gh-pages
fi

# Add all files
git add -A

# Commit changes
git commit -m "Deploy to GitHub Pages"

# Push to gh-pages branch
git push -f origin gh-pages

# Navigate back
cd ..

echo "Deployed to GitHub Pages!"
