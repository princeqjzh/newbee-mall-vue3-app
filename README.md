## 简介
newbee-mall 项目是一套电商系统，包括 newbee-mall 商城系统及 newbee-mall-admin 商城后台管理系统，基于 Spring Boot 2.X 和 Vue 以及相关技术栈开发。 前台商城系统包含首页门户、商品分类、新品上线、首页轮播、商品推荐、商品搜索、商品展示、购物车、订单结算、订单流程、个人订单管理、会员中心、帮助中心等模块。 后台管理系统包含数据面板、轮播图管理、商品管理、订单管理、会员管理、分类管理、设置等模块。

本仓库中的源码为新蜂商城前后端分离版本的 Vue 项目（Vue 版本为 3.x），主要面向前端开发人员.

原始工程位置： https://github.com/newbee-ltd/newbee-mall-vue3-app

## 项目运行环境
- node
- npm
- yarn

## 环境安装与配置参考
- https://nodejs.org/zh-cn/
- https://www.npmjs.com/
- https://yarn.bootcss.com/

## 初始化、编译、运行方法
项目根目录下执行如下命令：
- yarn install
- yarn build
- yarn serve

## docker 部署
运行脚本： ./docker_deploy.sh <api 服务 ip_地址>