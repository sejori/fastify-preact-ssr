import fs from 'fs'

export const recursiveReaddir = (dir) => {
    const dirContents = []
    const searchDir = (dir, dirContents) => fs.readdirSync(dir)
        .forEach(item => fs.lstatSync(`${dir}/${item}`).isDirectory()
            ? searchDir(`${dir}/${item}`, dirContents)
            : dirContents.push(`${dir}/${item}`)
        )

    searchDir(dir, dirContents)
    return dirContents
}