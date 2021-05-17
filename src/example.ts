import createEmotion from '@emotion/css/create-instance'
import stylisPluginPx2vw from './main'

export const {
  flush,
  hydrate,
  cx,
  merge,
  getRegisteredStyles,
  injectGlobal,
  keyframes,
  css,
  sheet,
  cache,
} = createEmotion({
  key: 'm',
  stylisPlugins: [stylisPluginPx2vw({ excludes: ['font-size'] })],
})

// demo

const demoCls = css`
  background: red;
  font-size: 18px;
  width: 100px;
  height: 375px;
`

const demo = document.createElement('div')
demo.innerHTML = `<div class=${demoCls}>123</div>`
document.body.appendChild(demo)
