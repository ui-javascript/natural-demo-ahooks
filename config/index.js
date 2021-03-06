export default {
    // 默认模板位置
    template: './template/template-cdn-antd.ejs', // 已引入常用cdn
    // template: './template/template.ejs',

    // 默认meta位置
    meta: "./template/template.json",

    // 路径写法示例
    // entry: './__demo/**/*.{js,tsx}',
    // entry: './__demo/*.js',
    // entry: './__demo/module/*.{js,tsx}',

    // ahooks
    // entry: './_ui/*.{js,tsx}',
    // entry: './_side-effects/*.{js,tsx}',
    // entry: './_lifecycle/*.{js,tsx}',
    // entry: './_state/*.{js,tsx}',
    entry: './_dom/*.{js,tsx}',
}
