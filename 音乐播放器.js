
// 获取元素
const music = document.querySelector('.MP3')
const choose = document.querySelector('.music img:nth-child(3)')
const element = document.querySelector('.music img:nth-child(1)')
const above = document.querySelector('.music img:nth-child(2)')
const under = document.querySelector('.music img:nth-child(4)')
let clickCount = 0

function open() {


    music.play()
}

function off() {


    music.pause()
}
// 开启动画
function startAnimation() {
    element.style.animationPlayState = 'running'
}

// 关闭动画
function stopAnimation() {
    element.style.animationPlayState = 'paused'
}
choose.addEventListener('click', function () {
    clickCount++

    if (clickCount % 2 === 1) { // 奇数点击次数
        open()
        startAnimation()
    } else { // 偶数点击次数
        off()
        stopAnimation()
    }

})

// 上一首
above.addEventListener('click', function () {
    alert('还在开发中！')
    ctr.play()

})

// 下一首
under.addEventListener('click', function () {
    alert('还在开发中！')
    ctr.play()

})
// 彩蛋
const ctr = document.querySelector('.ctr')
const study = document.querySelector('.study')
const say = document.querySelector('.say')
// study.addEventListener('click', function () {
//     alert('还在开发中！')
//     ctr.play()

// })
say.addEventListener('click', function () {
    alert('还在开发中！')
    ctr.play()

})



