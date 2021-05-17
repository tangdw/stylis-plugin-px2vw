## 使用

一个 stylis 插件，用于将 px 换算为 vw 单位，可用于 css-in-js 库 @emotion/css
> 其他使用了 stylis 的库，如支持插件也可以使用

demo 见 src/example.ts

```ts
import createEmotion from '@emotion/css/create-instance'
import stylisPluginPx2vw from 'stylis-plugin-px2vw'

const customEmotion = createEmotion({
  key: 'm',
  stylisPlugins: [stylisPluginPx2vw({
    excludes: ['font-size'] // 不需要转换的属性
    minWidth: 320, // 最小宽度 默认
    width: 375, // 设计稿宽度 默认
    precision: 4, // 转换 vw 单位精度 默认
  })],
})
```

只匹配小写的 px, 如果有特别的属性值不希望转换，可以写成大写 PX，如：`width: 100PX;`
