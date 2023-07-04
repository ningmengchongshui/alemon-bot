## alemon-qq

Alemon 开发框架下 QQ 频道实例化机器人

## 运行

```
npm init -y
```

```
npm install alemon-qq
```

```
vi index.js
```

```
import { createAlemon } from 'alemon-qq'
createAlemon().catch(err => {
  console.log(err)
  return
})
```

```
node index.js
```
