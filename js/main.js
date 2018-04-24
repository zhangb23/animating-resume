var code1 = `/*
*大家好，我是张玉文
*下面我来做下自作介绍
*只用文字未免太单调了
*我还是用代码来说吧
*首先准备一些样式
*/
*{
  transition: all 1s;
}
/*还是直接做一个bash吧*/
.terminal {
  left: 10px;
  top: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 45px;
}
.code-wrapper pre {
  padding: 10px;
  text-align: left;
  width: 45vw;
  max-height: 85vh;
}
/*来点背景色*/
.code-wrapper {
  background: #333;
  color: #f0f0f0;
}
.terminal-header {
  background: #e2e2e2;
}
/*再来三个按钮*/
.terminal-header ul li:first-child {
  background-color: #ff6059;
  box-shadow: inset 0px 0px 1px #000;
}

.terminal-header ul li:nth-child(2) {
  background-color: #ffbd2e;
  box-shadow: inset 0px 0px 1px #000;
}

.terminal-header ul li:last-child {
  background-color: #29ca42;
  box-shadow: inset 0px 0px 1px #000;
}
/* 是不是挺像的哈哈，我还需要一点代码高亮 */
.token.selector{color: #D7BA62;}
.token.property{color: #98DCE9;}
.token.punctuation{color: #999;}
.token.selector{color: #D7BA62;}
/* 好了，还是进入正题吧，我需要一个白纸*/

#paper > .content {
 display: block;
}
/*下面请看右边*/
`
var md = `
## 自我介绍

- 我叫张玉文
- 出生于1989年3月
- 自学前端半年
- 希望应聘前端开发工作

## 技能介绍

- 熟悉 Html5&Css3
- 熟悉 JavaScript
- 熟悉 jQuery
- 熟悉 vue框架

## 项目介绍

1. 苹果风格轮播
2. 个人在线简历
3. canvas画板
4. 个人导航主页

## 联系方式

- QQ:289364685
- Email:zhangb23@163.com
`
var code2 = `/*接下来把右边的Markdown 变成 HTML*/`

var code3 = `
/*下面给html加点样式*/
.myhtml {
  padding: 0 2em;
}
.myhtml h2 {
  display: inline-block;
  border-bottom: 1px solid;
  margin: 1em 0 .5em;
}
/*这就是我会动的简历全部
 *谢谢观看
*/`



function writeCode(prefix, code, fn) {
    let n = 0
    let preCode = document.querySelector('#code')
    let id = setInterval(() => {
        n += 1
        styleTag.innerHTML = prefix + code.substring(0, n)
        preCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css);
        preCode.scrollTop = preCode.scrollHeight
        if (n >= code.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 50)
}

function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn && fn.call()
}

function writeMarkdown(markdown, fn) {
    let domPaper = document.querySelector('#paper>.content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn && fn.call()
        }
    }, 50)
}

function markdownToHtml(fn) {
    var div = document.createElement('div')
    div.className = 'myhtml'
    div.innerHTML = marked(md)
    let markdownContainer = document.querySelector('#paper > .content')
    markdownContainer.replaceWith(div)
    fn && fn.call()
}


writeCode('', code1, () => {
    createPaper(() => {
        writeMarkdown(md, () => {
            writeCode(code1, code2, () => {
                markdownToHtml(() => {
                    writeCode(code1 + code2, code3)
                })
            })
        })
    })
})