# progressBar-js
JS 前端进度条小工具 您可以通过此工具来构建一个有效的工具条，接下来就是一个示例！

## 使用示例

### 引入 progressBar-js 库

直接在这里将 css 和 js 文件引入进来就算是成功导入了哦！！！

```html

<link href="https://www.lingyuzhao.top/css/progressBar.css" rel="stylesheet">
<script src="https://www.lingyuzhao.top/js/progressBar.min.js"></script>
```

### 基本使用示例

#### 使用数值渲染进度条

```javascript
  // 实例化一个进度条对象，在这里我们传递了两个参数，第一个参数是进度条元素，第二个参数是回调函数，这个回调函数会在进度条的进度发生变化时调用。
const progressBar = new ProgressBar(document.querySelector(".progress-bar"), (now, max) => document.querySelector(".p").innerText = `进度为：${(now / max * 100).toFixed(2)}%`);
// 调用setProgressByValue方法，第一个参数是进度条的进度，第二个参数是进度条的进度变化时间，第三个参数是进度条的颜色，第四个参数是进度条的进度即将到达最大值时的颜色。
progressBar.setProgressByValue(100, 1000, 'linear-gradient(to right, rgba(255, 255, 255, 0.5), #8c00ff)', 'linear-gradient(to right, rgba(255, 255, 255, 0.5), #0f0)');
```

#### 使用进度渲染进度条

```javascript
  // 实例化一个进度条对象，在这里我们传递了两个参数，第一个参数是进度条元素，第二个参数是回调函数，这个回调函数会在进度条的进度发生变化时调用。
const progressBar = new ProgressBar(document.querySelector(".progress-bar"), (now, max) => document.querySelector(".p").innerText = `进度为：${(now / max * 100).toFixed(2)}%`);
// 使用此函数可以直接设置进度条的进度，不需要设置最大值，第一个参数是进度值，第二个参数是进度条的背景颜色，第三个参数是进度条的填充颜色。
progressBar.setProgress(61.012, 'linear-gradient(to right, rgba(255, 255, 255, 0.5), #8c00ff)', 'linear-gradient(to right, rgba(255, 255, 255, 0.5), #0f0)');
```

### 实时渲染进度条

```javascript
  // 实例化一个进度条对象，在这里我们传递了两个参数，第一个参数是进度条元素，第二个参数是回调函数，这个回调函数会在进度条的进度发生变化时调用。
const progressBar = new ProgressBar(document.querySelector(".progress-bar"), (now, max) => document.querySelector(".p").innerText = `进度为：${(now / max * 100).toFixed(2)}%`);

// 我们可以在一个定时器中设置进度条的进度，实现实时的渲染
setInterval(() => {
    progressBar.setProgressByValue(Math.random() * 1000, 1000, 'linear-gradient(to right, rgba(255, 255, 255, 0.5), #8c00ff)', 'linear-gradient(to right, rgba(255, 255, 255, 0.5), #0f0)');
}, 1000);
```

## 需要使用到的类名

此库将会使用到一些类名，下表中“是否冲突” 列如果为 `yes`，则您尽量避免使用对应的类名，否则可能会造成影响。

| 类名                | 是否冲突 | 说明                                                                       |
|-------------------|------|--------------------------------------------------------------------------|
| progress-bar      | no   | 此类名用来标识一个进度条元素，被此类名的元素将会被渲染成进度条，您可以在页面中添加多个进度条元素，也可以尝试修改 css 样式，但不一定会生效。 |
| progress-bar-fill | yes  | 此类名用来标识进度条的填充元素，被此类名的元素将会被渲染成进度条的填充元素。您最好避免使用此类名，否则可能会造成影响。              |