// tắt bên dưới 
setTimeout(function() {
    nangcap.classList.remove('gamebutton');
    tancong.classList.remove('gamebutton');
    thongbao.classList.remove('hieuungthongbao');
    tyletc.classList.remove('gamebutton');
    tylethanhcong.innerHTML = tyle  + "%";
}, 4000);

var tancong = document.getElementById('tancong');
var quacau = document.getElementById('quacau');
var sizeqc = 90;
var leftleft = -5;
tancong.addEventListener('click', function(){
  
})
// hàm tính tỷ lệ 
var isTrue = true;
var tyle = 100;
var tangdann = 0;
function tinhtyle(tangdan){
    var mayman = Math.floor(Math.random() * 100) +1;
    if (mayman <= tyle){   
        tyle = tyle - 5 - tangdan;
        tangdann = tangdann + 10;
        isTrue = true;
    }
    else {
        isTrue = false
        console.log("that bai" + mayman + "tyle" + tyle);
    }
    if (isTrue){
        console.log( mayman + "ban da thanh cong!" + " ty le hien tai la");
        console.log(tyle);
    }
    return isTrue;
}
// tỷ lệ thành công thông báo
var tyletc = document.getElementById('tyletc');
var tylethanhcong = document.getElementById('tylethanhcong');
// nut nang cap tan cong
var thongbao = document.getElementById('thongbao');
var nangcap = document.getElementById('nangcap');
var dem = 0;
nangcap.addEventListener('click', function(){
    if (dem === 5){
        nangcap.innerHTML = "Đã max cấp";

    }
    else {
        if (tinhtyle(tangdann)){
            // Tăng kích thước quả cầu
            quacau.style.height = sizeqc + 'px';
            quacau.style.width = sizeqc + 'px';
            quacau.style.left = leftleft + 'px';
            quacau.style.top = leftleft + 'px';
            sizeqc = sizeqc + 15;
            leftleft = leftleft -6;
           
            // phần dưới
            thongbao.innerHTML = "Nâng cấp thành công!";
            thongbao.classList.add('hieuungthongbao');
            nangcap.classList.add('gamebutton');
            tancong.classList.add('gamebutton');
            tyletc.classList.add('gamebutton');
            setTimeout(function() {
                nangcap.classList.remove('gamebutton');
                tancong.classList.remove('gamebutton');
                thongbao.classList.remove('hieuungthongbao');
                tyletc.classList.remove('gamebutton');
                if (tyle <= 0){
                    tyletc.classList.add('gamebutton');
                }
                else {
                    tylethanhcong.innerHTML = tyle  + "%";
                }
            }, 1000);
            dem++;
             // hiệu ứng quả cầu mạnh hơn
            if (dem === 2){
                var shadowColor = 'rgb(100, 67, 163)'; // Màu sắc, ở đây là một màu đen có độ trong suốt 50%
                var shadowBlur = '20px'; // Độ mờ
                var shadowHorizontal = '0px'; // Khoảng cách theo chiều ngang
                var shadowVertical = '0px'; // Khoảng cách theo chiều dọc
                quacau.style.boxShadow = `${shadowHorizontal} ${shadowVertical} ${shadowBlur} ${shadowColor}`;
            }
            if (dem === 3){
                var shadowColor = 'rgb(238, 0, 255)'; // Màu sắc, ở đây là một màu đen có độ trong suốt 50%
                var shadowBlur = '30px'; // Độ mờ
                var shadowHorizontal = '0px'; // Khoảng cách theo chiều ngang
                var shadowVertical = '0px'; // Khoảng cách theo chiều dọc
                quacau.style.boxShadow = `${shadowHorizontal} ${shadowVertical} ${shadowBlur} ${shadowColor}`;
            }
           
            if (dem === 5){
                tyletc.classList.add('gamebutton');
                var shadowColor = 'rgb(238, 0, 255)'; // Màu sắc, ở đây là một màu đen có độ trong suốt 50%
                var shadowBlur = '40px'; // Độ mờ
                var shadowHorizontal = '0px'; // Khoảng cách theo chiều ngang
                var shadowVertical = '0px'; // Khoảng cách theo chiều dọc
                quacau.style.boxShadow = `${shadowHorizontal} ${shadowVertical} ${shadowBlur} ${shadowColor}`;
                nangcap.innerHTML = "Đã max cấp";

            }
        }
        else {
            thongbao.classList.add('hieuungthongbao');
            thongbao.innerHTML = "Nâng cấp thất bại rồi bạn êy!";
            nangcap.classList.add('gamebutton');
            tancong.classList.add('gamebutton');
            tyletc.classList.add('gamebutton');
            setTimeout(function() {
                nangcap.classList.remove('gamebutton');
                tancong.classList.remove('gamebutton');
                thongbao.classList.remove('hieuungthongbao');
                tyletc.classList.remove('gamebutton');
            }, 1000);
        } 
    }  
});
// Tấn công
var tancong = document.getElementById('tancong');
var vegeta = document.getElementById('vegeta');
var goku = document.getElementById('goku');

var mainDisplay = document.getElementById('mainDisplay');
tancong.addEventListener('click', function(){
    var gokuImage = document.getElementById('gokuImage');
    gokuImage.src = './bigImg/goku3.png';
    var vegetaRect = vegeta.getBoundingClientRect();
    mainDisplay.style.backgroundColor = 'white';
    quacau.classList.add('back');
    console.log('da click');
    console.log(vegetaRect.left);
    console.log(vegetaRect.top);
    quacau.style.left = vegetaRect.left - 50 + 'px';
    quacau.style.top = vegetaRect.top - 30 + 'px';
    setTimeout(function() {
        quacau.classList.remove('back');
        quacau.style.left = leftleft + 'px';
        quacau.style.top = leftleft + 'px';
        gokuImage.src = './img/Goku.png';
    }, 1000);
    // hieu ung nghien nguoi
   
    
});


// vegeta tái tạo năng lượng
var vegetaimg = document.getElementById('vegetaimg');



function startLoop() {
    setInterval(function () {
        vegetaimg.src = './img/vegetagif2.gif';
        vegeta.classList.remove('taitaonangluong');
        var timeTtnl = Math.floor(Math.random() * 3) + 1;
        var randomNum = Math.floor(Math.random() * 3) + 1;
        if (timeTtnl === randomNum) {
            vegetaimg.src = './img/vegeta.png';
            vegeta.classList.add('taitaonangluong');    
        }
    }, 500); // Chạy mỗi giây (1000 miliseconds)
}

startLoop()