npm run build
cd dist
# printf "//registry.npmjs.org/:_authToken=${NPM_TOKEN}\n" >> ./.npmrc
npm publish .
