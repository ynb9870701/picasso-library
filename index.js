import dayjs from 'dayjs';

// 获取随机整数
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// 检查是否为偶数
function isEven(num) {
  return num % 2 === 0;
}

// 生成 UUID
function generateUUID() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}

// 数组求和
function sumArray(arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
}

// 获取当前日期
function getCurrentDate() {
  return new Date().toISOString().slice(0, 10);
}

// 检查是否为数组
function isArray(arr) {
  return Array.isArray(arr);
}

// 字符串转换为驼峰格式
function toCamelCase(str) {
  return str.replace(/-([a-z])/g, function(match, char) {
    return char.toUpperCase();
  });
}

// 深拷贝对象
function deepCopy(obj) {
  return JSON.parse(JSON.stringify(obj));
}

// 异步延迟函数
function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// 获取 URL 参数
function getURLParams(url) {
  return Object.fromEntries(new URL(url).searchParams);
}
// 日期检测 检测当前日期是否在 date 之后
function isAfter(currentTime, compareTime) {
  // 使用 Day.js 解析时间
  const current = dayjs(currentTime);
  const compare = dayjs(compareTime);
  
  // 判断当前时间是否在比较时间之后
  return current.isAfter(compare);
}


export default {
  getRandomInt,
  isEven,
  generateUUID,
  sumArray,
  getCurrentDate,
  isArray,
  toCamelCase,
  deepCopy,
  delay,
  getURLParams,
  isAfter
};
