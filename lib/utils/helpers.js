import fs from 'fs'

export const recursiveReaddir = (dir) => {
    const dirContents = []
    const searchDir = (dir, dirContents) => fs.readdirSync(dir)
        .forEach(item => item.includes('.')
            ? dirContents.push(item)
            : searchDir(`${dir}/${item}`, dirContents)
        )

    searchDir(dir, dirContents)
    return dirContents
}