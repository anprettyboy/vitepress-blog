const shell = require('shelljs')
const name = process.argv[2] || 'Auto-commit';
const exec = shell.exec

if (exec('git add .').code !== 0) {
    echo('Error: Git add failed')
    exit(1)
}
if (exec(`git commit -am "${name}"`).code !== 0) {
    echo('Error: Git commit failed')
    exit(1)
}
if (exec('git push').code !== 0) {
    echo('Error: Git commit failed')
    exit(1)
}
