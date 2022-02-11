# 开始使用

请先 [安装](/doc/install/) 本组件库。

然后在你的代码中写入下面的代码

```javascript
import { Button, Tabs, Tab, Switch, Dialog } from 'desn-ui';
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```html

<template>
  <Button>这是一个默认按钮</Button>
</template>

<script>
import { Button, Tabs, Tab, Switch, Dialog } from "desn-ui"

export default {
  components : {
    Button,
    Tabs,
    Tab,
    Switch,
    Dialog
  }
}
</script>
```
