import { createApp } from "../../dist/strugglinglee.esm-bundler.js";
// 传入 createApp 的对象实际上是一个组件，每个应用都需要一个“根组件”，其他组件将作为其子组件
// 大多数真实的应用都是由一棵嵌套的、可重用的组件树组成的
import App from "./App.js";

const rootContainer = document.querySelector("#root");

// 每个 Vue 应用都是通过 createApp 函数创建一个新的 应用实例
// 应用实例必须在调用了 .mount() 方法后才会渲染出来。该方法接收一个“容器”参数，可以是一个实际的 DOM 元素或是一个 CSS 选择器字符串
// .mount() 方法应该始终在整个应用配置和资源注册完成后被调用。同时请注意，不同于其他资源注册方法，它的返回值是根组件实例而非应用实例。
createApp(App).mount(rootContainer);

// 应用实例并不只限于一个。createApp API 允许你在同一个页面中创建多个共存的 Vue 应用，而且每个应用都拥有自己的用于配置和全局资源的作用域。