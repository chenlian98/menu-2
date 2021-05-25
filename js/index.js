let as = $$('.box a')
let ul = $$('.box ul')
//鼠标点击
for (let i = 0; i < as.length; i++) {
    if(as[i].nextElementSibling){
        as[i].addEventListener('click',function (e){
            e.stopPropagation()
            for (let j = 0; j < ul.length; j++) {
                ul[j].style.display = 'none'
            }
            // console.log(as[i].nextElementSibling)
            as[i].nextElementSibling.style.display = 'block'
        })
    }
}

//鼠标划入
// for (let i = 0; i < as.length; i++) {
//     if(as[i].nextElementSibling){
//         as[i].addEventListener('mouseenter',function (e){
//             e.stopPropagation()
//             for (let j = 0; j < ul.length; j++) {
//                 ul[j].style.display = 'none'
//             }
//             as[i].nextElementSibling.style.display = 'block'
//         })
//         as[i].addEventListener('mouseleave',function (e){
//             ul[i].style.display = 'none'
//         })
//         // console.log(as[i].nextElementSibling)
//         // console.log(ul[i])
//         let  u = as[i].nextElementSibling
//         u.addEventListener('mouseenter',function (e){
//             e.stopPropagation()
//             u.style.display = 'block'
//         })
//         u.addEventListener('mouseleave',function (e){
//             u.style.display = 'none'
//         })
//     }
// }

document.documentElement.addEventListener('click',function (){
    for (let i = 0; i < ul.length; i++) {
        ul[i].style.display = 'none'
    }
})















//原型链 和原型对象
//
//
// function nihao() {
//     console.log('你好')
// }
//
// nihao.prototype.yuan = function () {
//     console.log('我是原型对象里面的创建的函数')
// }
//
// let aa = new nihao  //new一个构造函数
// aa.yuan()
// console.log(nihao.prototype) //yuan 函数
// console.log(aa.prototype) //undefined
// console.log(aa.__proto__.__proto__.__proto__) //null
