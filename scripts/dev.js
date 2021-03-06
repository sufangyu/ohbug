const execa = require('execa')
const args = require('minimist')(process.argv.slice(2))

const formats = args.formats || args.f
const target = args._.length ? args._ : 'core'

const env = 'development'

if (target[0] !== 'types') {
  execa(
    'rollup',
    [
      '-cw',
      '--environment',
      [`NODE_ENV:${env}`, `TARGET:${target}`, `FORMATS:${formats || 'esm'}`].join(','),
    ],
    {
      stdio: 'inherit',
    }
  )
}
