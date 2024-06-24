/*
 * @Author: 赵凌宇（BeardedManZhao） 创建
 * progressBar-js 库 源代码：https://github.com/BeardedManZhao/progressBar-js
 */

/**
 * 进度条对象
 */
class ProgressBar {

  /**
   * 构建一个进度条
   * @param e 需要被做为进度条容器的元素
   * @param showFun 进度条显示 函数 接收进度百分比数值 或者 数值比例 返回显示的文字
   */
  constructor(e, showFun = undefined) {
    this.proElement = e;
    this.fill = document.createElement('div');
    this.fill.className = 'progress-bar-fill';
    this.proElement.appendChild(this.fill);
    this.showFun = showFun === undefined ? (p) => "当前进度：" + p : showFun;
  }

  /**
   * 设置进度条的进度颜色
   * @param progress {number} 当前进度
   * @param color 进度条的正常颜色
   * @param maxColor 进度条即将到达上限颜色
   */
  updateProgressColor(progress, color = undefined, maxColor = 'linear-gradient(to right, rgba(255, 255, 255, 0.5), #f00)') {
    if (progress >= 90 && maxColor !== undefined) {
      this.fill.style.background = maxColor;
    } else if (color !== undefined) {
      this.fill.style.background = color;
    }
  }

  /**
   * 设置进度条的进度
   * @param progress {number}
   * @param color 进度条的正常颜色
   * @param maxColor 进度条即将到达上限颜色
   */
  setProgress(progress, color = undefined, maxColor = 'linear-gradient(to right, rgba(255, 255, 255, 0.5), #f00)') {
    this.setProgressByValue(Math.max(progress, 0), 100, color, maxColor);
  }

  /**
   * 设置进度条的进度 当前数值/最大数值
   * @param progressValue {number} 当前数值
   * @param maxValue {number} 最大数值
   * @param color 进度条的正常颜色
   * @param maxColor 进度条即将到达上限颜色
   */
  setProgressByValue(progressValue, maxValue, color = undefined, maxColor = 'linear-gradient(to right, rgba(255, 255, 255, 0.5), #f00)') {
    this.proElement.title = this.showFun(progressValue, maxValue);
    const p = Math.min(progressValue, maxValue) / maxValue * 100;
    this.fill.style.width = p + '%';
    this.updateProgressColor(p, color, maxColor);
  }
}
