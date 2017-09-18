### 相关技术基础
#### 服务器端:
* [php](http://www.w3school.com.cn/php/index.asp)
* [laravel框架](https://docs.golaravel.com/docs/5.4/installation/)
#### 网站客户端:
* [html](http://www.w3school.com.cn/html/index.asp)
* [css](http://www.w3school.com.cn/css/index.asp)
* [javascript](http://www.w3school.com.cn/js/index.asp)
* [HTML DOM](http://www.w3school.com.cn/htmldom/index.asp)
* [Ajax](http://www.w3school.com.cn/ajax/index.asp)
* [ECMAScript 6 标准](http://es6.ruanyifeng.com/)
* [vue.js](https://cn.vuejs.org/)
* [npm](http://www.runoob.com/nodejs/nodejs-npm.html)
* [webpack](http://www.jianshu.com/p/42e11515c10f)

#### 地图相关:
* [openlayers](http://openlayers.org/)

### 开发环境说明
* 使用ubuntu系统进行开发
  1. 安装 PHP composer包管理器
  2. 安装 Nodejs 6.9.0
  3. 安装
* clone 本代码库到本地工作目录
        git clone https://github.com/yxwzaxns/position.git
* 进入代码目录
        # 安装php项目依赖包
        composer install
        # 安装node开发环境依赖
        npm install --save --registry=https://registry.npm.taobao.org
        # 创建配置文件 .env

        # 创建数据库文件
        touch database/database.sqlite
        # 进行数据库迁移
* 开启前端代码打包
        npm run watch
* 开启laravel dev服务
        # web 默认开启在 localhost 8000端口
        php artisan serve
