# 项目准备

## 配置淘宝镜像

```shell
npm config set registry https://registry.npm.taobao.org --global
npm config set disturl https://npm.taobao.org/dist --global
```

## 安装依赖

```shell
npm i
```

## 修改mysql账户

config/config.default.js


# 启动项目

## 测试启动

```shell
npm run dev
```

## 测试地址

[http://localhost:7001/hello](http://localhost:7001/hello)

## 创建数据表

[http://localhost:7001/init](http://localhost:7001/init)

# 上线部署

## 设置部署端口

修改package.json第27行，port=5100

## 上线启动

```shell
npm start
```

## 停止项目

```shell
npm stop
```

