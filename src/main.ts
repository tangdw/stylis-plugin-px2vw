import { StylisPlugin } from '@emotion/cache'

const REG = /"[^"]+"|'[^']+'|url\([^\)]+\)|(\d*\.?\d+)px/g // 取含 px 值

interface Options {
  minWidth?: number
  width?: number
  precision?: number
}

const px2vw = (styleStr: string, option: Options) => {
  const { minWidth = 320, width = 375, precision = 4 } = option
  const e = Math.pow(10, precision)
  return styleStr.replace(REG, (m) => {
    const px = Number(m.substr(0, m.length - 2))
    const vw = Math.round((px / width) * 100 * e) / e
    const minVw = (1 / minWidth) * 100 // 不能再小啦
    return `${Math.max(vw, minVw)}vw`
  })
}

interface Props extends Options {
  excludes?: string[]
}

const stylisPluginPx2vw = (props?: Props): StylisPlugin => {
  const { excludes = [], ...options } = props || {}
  return (el) => {
    if (el.type === 'decl') {
      if (typeof el.props === 'string' && excludes.indexOf(el.props) === -1) {
        el.value = px2vw(el.value, options)
      }
    }
    return undefined
  }
}

export default stylisPluginPx2vw
