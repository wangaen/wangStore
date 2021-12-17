/*
Navicat MySQL Data Transfer

Source Server         : wangStore
Source Server Version : 50730
Source Host           : localhost:3306
Source Database       : wangstore

Target Server Type    : MYSQL
Target Server Version : 50730
File Encoding         : 65001

Date: 2021-12-15 23:08:43
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for navigates
-- ----------------------------
DROP TABLE IF EXISTS `navigates`;
CREATE TABLE `navigates` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL COMMENT '导航名；唯一的',
  `imgUrl` varchar(255) NOT NULL COMMENT '图片url；唯一的',
  `status` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否开启导航；0：关闭（默认）；1：开启',
  `sortCode` int(100) DEFAULT NULL COMMENT '导航排序码',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `imgUrl` (`imgUrl`),
  UNIQUE KEY `sortCode` (`sortCode`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of navigates
-- ----------------------------
INSERT INTO `navigates` VALUES ('1', 'ws超市', 'http://127.0.0.1:3080/admin/navigate/wsStore.png', '1', '1', '2021-12-15 21:36:33', '2021-12-15 21:36:36');
INSERT INTO `navigates` VALUES ('2', '数码电器', 'http://127.0.0.1:3080/admin/navigate/3c.png', '1', '2', '2021-12-15 21:37:14', '2021-12-15 21:37:17');
INSERT INTO `navigates` VALUES ('3', '潮牌服饰', 'http://127.0.0.1:3080/admin/navigate/yifu.png', '1', '3', '2021-12-15 21:38:01', '2021-12-15 21:38:03');
INSERT INTO `navigates` VALUES ('4', '领券', 'http://127.0.0.1:3080/admin/navigate/juan.png', '1', '4', '2021-12-15 21:38:35', '2021-12-15 21:38:37');

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `userName` varchar(255) NOT NULL COMMENT '用户名；唯一的',
  `password` varchar(255) NOT NULL COMMENT '密码',
  `department` varchar(255) DEFAULT NULL COMMENT '部门',
  `realName` varchar(255) DEFAULT NULL COMMENT '真实姓名',
  `phone` char(11) DEFAULT NULL COMMENT '手机号码',
  `isAdmin` tinyint(1) NOT NULL DEFAULT '0' COMMENT '是否管理员；0：不是（默认）；1：是',
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `userName` (`userName`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES ('2', 'zhang', 'U2FsdGVkX18cUDIv8ANPMVnrGRfEXfFxD0FRIAdlDKQ=', null, null, null, '0', '2021-12-05 09:06:48', '2021-12-05 09:06:48');
INSERT INTO `users` VALUES ('3', 'zhang1', 'U2FsdGVkX1/4pYqWbYXKrLHTfhAyW9rwW99G2urovA0=', null, null, null, '0', '2021-12-05 09:30:40', '2021-12-05 09:30:40');
INSERT INTO `users` VALUES ('6', 'wang', 'U2FsdGVkX18kK8LnHoiylDS+68SWdX/Rt2xqLookbK8=', null, null, null, '1', '2021-12-05 11:23:34', '2021-12-05 11:23:34');
INSERT INTO `users` VALUES ('7', 'wangw', 'U2FsdGVkX1/0E8rUz1EiEJTtGfoGrHq+uurgoWTyg4o=', null, null, null, '0', '2021-12-12 09:44:30', '2021-12-12 09:44:30');
