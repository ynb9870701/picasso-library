# JavaScript 工具函数库

这个工具函数库提供了一些常用的 JavaScript 工具函数，可用于各种开发场景。以下是包含在这个库中的工具函数：

## 工具函数列表

1. **获取随机整数**
   - 函数名：`getRandomInt(min, max)`
   - 描述：在指定范围内生成一个随机整数。

2. **检查是否为偶数**
   - 函数名：`isEven(num)`
   - 描述：检查给定的数字是否为偶数。

3. **生成 UUID**
   - 函数名：`generateUUID()`
   - 描述：生成一个随机的 UUID。

4. **数组求和**
   - 函数名：`sumArray(arr)`
   - 描述：计算数组中所有元素的总和。

5. **获取当前日期**
   - 函数名：`getCurrentDate()`
   - 描述：返回当前日期的字符串表示。

6. **检查是否为数组**
   - 函数名：`isArray(arr)`
   - 描述：检查给定的值是否为数组。

7. **字符串转换为驼峰格式**
   - 函数名：`toCamelCase(str)`
   - 描述：将连字符分隔的字符串转换为驼峰格式。

8. **深拷贝对象**
   - 函数名：`deepCopy(obj)`
   - 描述：创建一个对象的深拷贝。

9. **异步延迟函数**
   - 函数名：`delay(ms)`
   - 描述：返回一个 Promise，在指定的毫秒数后解析。

10. **获取 URL 参数**
    - 函数名：`getURLParams(url)`
    - 描述：解析 URL 中的查询参数，并返回一个对象。

## 如何使用

你可以将这些函数复制到你的项目中，然后根据需要调用它们。以下是一些示例用法：

```javascript
console.log(getRandomInt(1, 100));
console.log(isEven(4));
console.log(generateUUID());
console.log(sumArray([1, 2, 3, 4, 5]));
console.log(getCurrentDate());
console.log(isArray([1, 2, 3]));
console.log(toCamelCase('hello-world'));
console.log(deepCopy({ name: 'John', age: 30 }));
delay(1000).then(() => console.log('Delayed execution'));
console.log(getURLParams('http://example.com/?foo=bar&baz=qux'));
# picasso-library
