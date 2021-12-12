# wangStore 

基于`koa2`+原生微信小程序的购物商城



### 1、项目初始化

 1. `git` 初始化

    ```
    git init 
    ```

    该命令会生成一个 `.git`的隐藏文件夹，该文件的作用就是本地仓库

 2. 手动创建一个`.gitignore`文件，该文件限制那些文件不提交到远程仓库。比如 `node_modules`

 3. 手动创建一个 `README.md` 文件，该文件是项目的说明文件

 4. 创建服务端文件夹 `service`

 5. 创建客户端文件夹`client`

 6. `npm`初始化，打开`service`文件夹

    ```
    npm init -y
    ```

    该命令会生成一个 `package.json` 文件,该文件记录项目的依赖

### 2、搭建项目

1. 使用微信开发者工具打开 `client`文件夹，初始化并搭建好项目
2. 使用 `vscode`打开service文件夹，安装 `koa`

###  3、service 服务端搭建过程

1. 安装`koa`

   ```
   npm install koa
   ```

2. 手动创建 `src` 文件夹，及入口文件 `app.js`

3. 安装自动重启服务

   ```
   npm install nodemon
   ```

4.  编写脚本

   ```javascript
    "scripts": {
       "dev": "nodemon ./src/app.js",
       "test": "echo \"Error: no test specified\" && exit 1"
     },
   ```

5. 编写统一环境变量

   + ```
     npm install dotenv
     ```

     安装好 `dotenv`, `dotenv` 的作用是读取根目录的 `.env` 文件，并配置到 环境变量 `process.env` 中

   + 在根目录创建 `.env` 文件，并编写变量

     ```
     APP_PORT = 3080
     APP_BASE_API = "http://192.168.43.58"
     ```

   + 使用 `dotenv` ， 在 `src` 目录下 创建 `config` 文件夹，并添加 `config.defaule.js` 文件。使用如下：

     ```javascript
     // dotenv 会把 .env 文件里面的键值对 添加 到 环境变量 process.env 中
     const dotenv = require("dotenv")
     const path = require('path')
     
     // 添加配置
     dotenv.config({ path: path.resolve(__dirname, '../../.env') })
     
     // 导入环境变量
     module.exports = process.env
     ```

6. 安装 `koa-router`

   ``` 
   npm install koa-router
   ```

7. 拆分功能块 `router` 文件，区分不同文件下编写不同的代码，便以管理维护

   ![1638610855776](C:\Users\10127\AppData\Roaming\Typora\typora-user-images\1638610855776.png)

8. 对应的路由文件下编写路由

   ```javascript
   // 导入 router
   const Router = require("koa-router")
   
   // 实例化对象,并添加前缀
   const router = new Router({ prefix: "/home" })
   
   // 路由编写区域
   router.get("/", (ctx, next) => {
     ctx.body = "home"
   })
   
   // 导入
   module.exports = router
   ```

9. 在 `app.js`文件中，注册中间件

   ```javascript
   // 导入
   const homeRouter = require("./routers/home")
   
   // 创建 koa 对象
   const app = new Koa()
   
   // 使用中间件
   app.use(homeRouter.routes())
   ```

### 4、解析请求 body

1. 安装 `koa-body`

   ```
   npm i koa-body
   ```

2.注册中间件

```js
const Koa = require("koa")
const KoaBody = require("koa-body")

// 创建 koa 对象
const app = new Koa()

app.use(KoaBody())
```

### 5、添加处理数据库操作的文件夹

![1638617817134](C:\Users\10127\AppData\Roaming\Typora\typora-user-images\1638617817134.png)

### 6、添加路由控制器处理文件

![1638619842238](C:\Users\10127\AppData\Roaming\Typora\typora-user-images\1638619842238.png)

### 7、添加连接数据库的驱动及中间件

1. 安装 `sequelize`、`mysql2` :   

   ```
   npm i sequelize mysql2
   ```

2. 使用

   ![1638680954565](C:\Users\10127\AppData\Roaming\Typora\typora-user-images\1638680954565.png)

```js
const { MYSQL_HOST, MYSQL_USER, MYSQL_PWD, MYSQL_DB } = require("../config/config.default")

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(MYSQL_DB, MYSQL_USER, MYSQL_PWD, {
  host: MYSQL_HOST,
  dialect: 'mysql'
});

sequelize.authenticate().then(() => {
  console.log("数据库连接成功");
}).catch(err => {
  console.log("数据库连接失败", err);
})

module.exports = sequelize
```

### 8、将验证及错误处理添加为中间件

### 9、 密码加密处理

```
npm install crypto-js
```

### 10、 添加token

```
npm i jsonwebtoken
```

### 11、安装`koa-static`，开发文件夹供外面访问

```
npm i koa-static
```

