import render from 'clay-core';
import Sizzle from 'sizzle';

// 启动clay
let clay = render(window);

// 加强选择器
clay.config("$sizzleProvider", () => (selector, context) => Sizzle(selector, context));

export default clay;