import fs from 'fs'

// this file will serve up modified files from the src folder via the /js/... endpoint
// they have their imports cdn-ified in order to be browser compatible :)

const srcFiles = fs.readdirSync(`${process.cwd()}/src`)
console.log(srcFiles)

export const cdnSrcRoutes = []