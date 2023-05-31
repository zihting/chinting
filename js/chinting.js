//導覽列顯示隱藏
$(".navbar .bar").click(function(){
    $(".navbar ul").toggleClass("show");
});
// 房間介紹modal
$('#chin101').on('show.bs.modal', function (e) {
    //show.bs.modal = BS內建，觸發時執行
    // 更改modal-title
    let btn = $(e.relatedTarget);//抓取觸發按鈕的資料
    // console.log(btn);//確認點擊到哪個按鈕
    let title = btn.data('title');
    // console.log(title);//確認title的內容
    let modal = $(this);//要修改的modal就是現在開啟的這個modal
    modal.find('.modal-title').text(title);//把modal的title換成按鈕上的title
     
    // alert(title);

    //更改modal-body
    let body="";
    let price="";
    if(title == '海津101-尊榮家庭四人套房')
    {
        body = '<div class="carousel-item active" data-bs-interval="3000">'+
                        '<img src="./image/room/chin101_1.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/chin101_2.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/chin101_3.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/chin101_4.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/chin101_5.jpg" class="d-block w-100" alt="...">'+
                    '</div>';
        price = '<p>平日 : 2,980元</p> <p>假日 : 3,680元</p> <p>春節 : 4,980元</p>';
    }
    else if(title == '海津201-溫馨四人套房-附陽台')
    {
        body = '<div class="carousel-item active" data-bs-interval="3000">'+
                        '<img src="./image/room/chin201_1.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/chin201_2.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/chin201_3.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/chin201_4.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/chin201_5.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/chin201_6.jpg" class="d-block w-100" alt="...">'+
                    '</div>';
        price = '<p>平日 : 2,980元</p> <p>假日 : 3,680元</p> <p>春節 : 4,980元</p>';
    }
    else if(title == '海津202-典雅浪漫六人和室')
    {
        body = '<div class="carousel-item active" data-bs-interval="3000">'+
                        '<img src="./image/room/chin202_1.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/chin202_2.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/chin202_3.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/chin202_4.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/chin202_5.jpg" class="d-block w-100" alt="...">'+
                    '</div>';
        price = '<p>平日 : 3,880元</p> <p>假日 : 4,680元</p> <p>春節 : 5,980元</p>';
    }
    else if(title == '海津203-經典雙人套房')
    {
        body = '<div class="carousel-item active" data-bs-interval="3000">'+
                        '<img src="./image/room/chin203_1.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/chin203_2.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/chin203_3.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/chin203_4.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/chin203_5.jpg" class="d-block w-100" alt="...">'+
                    '</div>';
        price = '<p>平日 : 1,980元</p> <p>假日 : 2,180元</p> <p>春節 : 3,580元</p>';
    }
    else if(title == '海町101-溫馨四人套房')
    {
        body = '<div class="carousel-item active" data-bs-interval="3000">'+
                        '<img src="./image/room/ting101_1.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/ting101_2.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/ting101_3.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/ting101_4.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/ting101_5.jpg" class="d-block w-100" alt="...">'+
                    '</div>';
        price = '<p>平日 : 2,980元</p> <p>假日 : 3,680元</p> <p>春節 : 4,980元</p>';
    }
    else if(title == '海町102-經典雙人套房')
    {
        body = '<div class="carousel-item active" data-bs-interval="3000">'+
                        '<img src="./image/room/ting102_1.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/ting102_2.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/ting102_3.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/ting102_4.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/ting102_5.jpg" class="d-block w-100" alt="...">'+
                    '</div>';
        price = '<p>平日 : 1,980元</p> <p>假日 : 2,180元</p> <p>春節 : 3,580元</p>';
    }
    else if(title == '海町201-家庭四人套房-附陽台')
    {
        body = '<div class="carousel-item active" data-bs-interval="3000">'+
                        '<img src="./image/room/ting201_1.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/ting201_2.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/ting201_3.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/ting201_4.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/ting201_5.jpg" class="d-block w-100" alt="...">'+
                    '</div>'
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/ting201_6.jpg" class="d-block w-100" alt="...">'+
                    '</div>';
        price = '<p>平日 : 3,080元</p> <p>假日 : 3,880元</p> <p>春節 : 4,980元</p>';
    }
    else if(title == '海町202-典雅四人和室')
    {
        body = '<div class="carousel-item active" data-bs-interval="3000">'+
                        '<img src="./image/room/ting202_1.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/ting202_2.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/ting202_3.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/ting202_4.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/ting202_5.jpg" class="d-block w-100" alt="...">'+
                    '</div>';
        price = '<p>平日 : 2,980元</p> <p>假日 : 3,680元</p> <p>春節 : 4,980元</p>';
    }
    else if(title == '海町203-浪漫四人套房')
    {
        body = '<div class="carousel-item active" data-bs-interval="3000">'+
                        '<img src="./image/room/ting203_1.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/ting203_2.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/ting203_3.jpg" class="d-block w-100" alt="...">'+
                    '</div>'+
                    '<div class="carousel-item" data-bs-interval="3000">'+
                        '<img src="./image/room/ting203_4.jpg" class="d-block w-100" alt="...">'+
                    '</div>';
        price = '<p>平日 : 2,980元</p> <p>假日 : 3,680元</p> <p>春節 : 4,980元</p>';
    }
    modal.find('.carousel-inner').html(body);
    modal.find('.price').html(price);
    
});
// 訂房須知分類
$(".service").click(function(){
    
    $(".serviceinfo").css("display","flex");
    $(".orderinfo > div").not(".serviceinfo").css("display","none");
    $(".service").css("background-color","#397c82");
    $(".service").css("color","white");
    
    $(".infotype button").not(".service").removeAttr("style");
});
$(".pay").click(function(){
    $(".payinfo").css("display","block");
    $(".orderinfo > div").not(".payinfo").css("display","none");
    $(".pay").css("background-color","#397c82");
    $(".pay").css("color","white");
    $(".infotype button").not(".pay").removeAttr("style");
});
$(".checkin").click(function(){
    $(".checkinfo").css("display","block");
    $(".orderinfo > div").not(".checkinfo").css("display","none");
    $(".checkin").css("background-color","#397c82");
    $(".checkin").css("color","white");
    $(".infotype button").not(".checkin").removeAttr("style");
});

//鄰近景點類別切換
$(".dinner").click(function(){
    $(".dinnercontainer").css("display","flex");
    $(".playcontainer > div").not(".dinnercontainer").css("display","none");
    $(".dinner").css("background-color","#397c82");
    $(".dinner").css("color","white");
    $(".playtype button").not(".dinner").removeAttr("style");
});
$(".dessert").click(function(){
    $(".dessertcontainer").css("display","flex");
    $(".playcontainer > div").not(".dessertcontainer").css("display","none");
    $(".dessert").css("background-color","#397c82");
    $(".dessert").css("color","white");
    $(".playtype button").not(".dessert").removeAttr("style");
});
$(".place").click(function(){
    $(".placecontainer").css("display","flex");
    $(".playcontainer > div").not(".placecontainer").css("display","none");
    $(".place").css("background-color","#397c82");
    $(".place").css("color","white");
    $(".playtype button").not(".place").removeAttr("style");
});
//晚餐button變換地圖
$("#d1").click(function(){
    $(".dinnercontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.6213286785433!2d120.43630477502492!3d22.48085997955723!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471e1190c2eb3ed%3A0x76efc3da6514f192!2z5a6J5aW96aOf5bGF!5e0!3m2!1szh-TW!2stw!4v1684835761847!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#d1").css("border","3px solid #397c82");
    $(".dinnerinfo button").not("#d1").removeAttr("style");
});
$("#d2").click(function(){
    $(".dinnercontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.6697637165303!2d120.44286277502465!3d22.47904087955849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471e1d427623ecf%3A0xbb0d631730072328!2z6ba06LKz5qiT6aOf5bqc!5e0!3m2!1szh-TW!2stw!4v1685000603710!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#d2").css("border","3px solid #397c82");
    $(".dinnerinfo button").not("#d2").removeAttr("style");
});
$("#d3").click(function(){
    $(".dinnercontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.625019148654!2d120.43965067463827!3d22.48072137955727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471e1f3682f1809%3A0x90d15e5ab8fc5bf!2z6ZuZ5Zac54mb6IKJ5bqX!5e0!3m2!1szh-TW!2stw!4v1685003353371!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#d3").css("border","3px solid #397c82");
    $(".dinnerinfo button").not("#d3").removeAttr("style");
});
$("#d4").click(function(){
    $(".dinnercontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.787961641646!2d120.43534061497517!3d22.474601072368674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471e18a3506b87d%3A0xecd018c6aaf3c4dd!2z6Zi_5oW26a6u6a2a5rmv!5e0!3m2!1szh-TW!2stw!4v1685001987202!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#d4").css("border","3px solid #397c82");
    $(".dinnerinfo button").not("#d4").removeAttr("style");
});
$("#d5").click(function(){
    $(".dinnercontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.9720319253743!2d120.43739617502438!3d22.467685279566552!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471e1865492abff%3A0x7dfcd2ef9c39a0c1!2z5ryB6L6y5rW355Si5bqX!5e0!3m2!1szh-TW!2stw!4v1685002042805!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#d5").css("border","3px solid #397c82");
    $(".dinnerinfo button").not("#d5").removeAttr("style");
});
$("#d6").click(function(){
    $(".dinnercontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.787961641646!2d120.43534061497517!3d22.474601072368674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471e1898b382c87%3A0x2eb56b20bdc46bca!2z56eL6ZuE6a6u6a2a5bCP5ZCD!5e0!3m2!1szh-TW!2stw!4v1685001845667!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#d6").css("border","3px solid #397c82");
    $(".dinnerinfo button").not("#d6").removeAttr("style");
});
//點心button變換地圖
$("#dt1").click(function(){
    $(".dessertcontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.9772611715694!2d120.44600287502443!3d22.46748877956673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471e1900a7da151%3A0xb743c611fb48273b!2z6Zi_6bS76LGG5ry_56Kz54Ok6aWF6aCt!5e0!3m2!1szh-TW!2stw!4v1685008508852!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#dt1").css("border","3px solid #397c82");
    $(".dessertinfo button").not("#dt1").removeAttr("style");
});
$("#dt2").click(function(){
    $(".dessertcontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.913253811918!2d120.45366367463794!3d22.469893879564943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471e1965ddb041f%3A0x44cb9e174aa406be!2z5b6h5pyo6LuS5Yaw5ZOB5bCI6LOj5bqX!5e0!3m2!1szh-TW!2stw!4v1685008542485!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#dt2").css("border","3px solid #397c82");
    $(".dessertinfo button").not("#dt2").removeAttr("style");
});
$("#dt3").click(function(){
    $(".dessertcontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.8865562110673!2d120.453598374638!3d22.47089697956421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471e1975d8324f1%3A0x611d84400e1308b4!2z5qi55LuU5YmJ5Yaw!5e0!3m2!1szh-TW!2stw!4v1685008670941!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#dt3").css("border","3px solid #397c82");
    $(".dessertinfo button").not("#dt3").removeAttr("style");
});
$("#dt4").click(function(){
    $(".dessertcontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.0206688937787!2d120.44671057463783!3d22.465857579567857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471e19aece79e87%3A0x7719e305f095b82c!2z5p2x5riv5q2j5b-g6LGG6Iqx!5e0!3m2!1szh-TW!2stw!4v1685008709709!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#dt4").css("border","3px solid #397c82");
    $(".dessertinfo button").not("#dt4").removeAttr("style");
});
$("#dt5").click(function(){
    $(".dessertcontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.094951647282!2d120.44613097463773!3d22.4630658795699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471e19b3fa55fbf%3A0x411456de35d5df34!2z5Yaw44Gu5a62!5e0!3m2!1szh-TW!2stw!4v1685008742926!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#dt5").css("border","3px solid #397c82");
    $(".dessertinfo button").not("#dt5").removeAttr("style");
});
$("#dt6").click(function(){
    $(".dessertcontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.993566028744!2d120.44722927463785!3d22.466876079567214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471e1086e2ee663%3A0xcef2231ae1e0738a!2z5Y-k5pep5ZGz55m957OW54K4!5e0!3m2!1szh-TW!2stw!4v1685008789805!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#dt6").css("border","3px solid #397c82");
    $(".dessertinfo button").not("#dt6").removeAttr("style");
});
$("#dt7").click(function(){
    $(".dessertcontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.958118992001!2d120.44137887502447!3d22.468208079566324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471e1975d8324f1%3A0x67b0e110ca604b63!2z55Ge5a2X6Jmf5peX6a2a6buR6Lyq!5e0!3m2!1szh-TW!2stw!4v1685008814948!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#dt7").css("border","3px solid #397c82");
    $(".dessertinfo button").not("#dt7").removeAttr("style");
});
$("#dt8").click(function(){
    $(".dessertcontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.1491235509993!2d120.4394281750242!3d22.461029779571295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471e183d3e759d5%3A0x4bef6ab631fe6fcb!2z6Iet6LGG6IWQ!5e0!3m2!1szh-TW!2stw!4v1685008845883!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#dt8").css("border","3px solid #397c82");
    $(".dessertinfo button").not("#dt8").removeAttr("style");
});
$("#dt9").click(function(){
    $(".dessertcontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.0144873610466!2d120.45042447463783!3d22.466089879567658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471e19a1dcb317d%3A0xff02826ed77c8359!2z5p2x5riv6Zi_6bS76JSl5rK56aSF5rC054WO5YyF!5e0!3m2!1szh-TW!2stw!4v1685008880505!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#dt9").css("border","3px solid #397c82");
    $(".dessertinfo button").not("#dt9").removeAttr("style");
});
//景點button變換地圖
$("#p1").click(function(){
    $(".placecontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29523.131280047226!2d120.3506650577185!3d22.33884504813818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471ef8b9905a955%3A0xc695f3e2705e695b!2z55CJ55CD5ba8!5e0!3m2!1szh-TW!2stw!4v1685089822297!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#p1").css("border","3px solid #397c82");
    $(".placeinfo button").not("#p1").removeAttr("style");
});
$("#p2").click(function(){
    $(".placecontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.7620526477153!2d120.47222357502348!3d22.4379800795879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471e1ca4742d89d%3A0x16cfb5f6c8cbb2d6!2z5bGP5p2x5r-x54Gj5YWs5ZyS!5e0!3m2!1szh-TW!2stw!4v1685089864811!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#p2").css("border","3px solid #397c82");
    $(".placeinfo button").not("#p2").removeAttr("style");
});
$("#p3").click(function(){
    $(".placecontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14750.07161657977!2d120.44551084820752!3d22.44716417329676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471e172ee34ea6d%3A0x600e0d96bd0a5a7!2z6Z2S5rSy5r-x5rW36YGK5oap5Y2A!5e0!3m2!1szh-TW!2stw!4v1685089903157!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#p3").css("border","3px solid #397c82");
    $(".placeinfo button").not("#p3").removeAttr("style");
});
$("#p4").click(function(){
    $(".placecontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.4576025529254!2d120.47418877502389!3d22.449431979579693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471e1b31c37b0bb%3A0x3bf2500f9ef0af30!2z5rW35LiK5pWZ5aCC!5e0!3m2!1szh-TW!2stw!4v1685089941938!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#p4").css("border","3px solid #397c82");
    $(".placeinfo button").not("#p4").removeAttr("style");
});
$("#p5").click(function(){
    $(".placecontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.4069914837833!2d120.48415767502378!3d22.451335179578205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471e19f39615e63%3A0x571da801b6d74e0e!2z5aSn6bWs54Gj5Y2h5LiB6LuK5bCP5Z6L6LO96LuK5aC0!5e0!3m2!1szh-TW!2stw!4v1685089978007!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#p5").css("border","3px solid #397c82");
    $(".placeinfo button").not("#p5").removeAttr("style");
});
$("#p6").click(function(){
    $(".placecontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.3341078870526!2d120.48192307503095!3d22.678603079416337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e179dca95ffab%3A0xed14bf5fd56491!2z5Yud5Yip5pif5p2R5Ym15oSP55Sf5rS75ZyS5Y2A!5e0!3m2!1szh-TW!2stw!4v1685090021724!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#p6").css("border","3px solid #397c82");
    $(".placeinfo button").not("#p6").removeAttr("style");
});
$("#p7").click(function(){
    $(".placecontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7363.54282658438!2d120.41730419357911!3d22.662309799999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e5affffffffff%3A0x82366d20376e77c!2z6auY5bGP5rqq6IiK6ZC15qmL!5e0!3m2!1szh-TW!2stw!4v1685090088087!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#p7").css("border","3px solid #397c82");
    $(".placeinfo button").not("#p7").removeAttr("style");
});
$("#p8").click(function(){
    $(".placecontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3699.602022876583!2d120.83925937500965!3d21.988232279912154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471b45acb9a0ec7%3A0x6d173b665efd6681!2z5riv5Y-j5ZCK5qmL!5e0!3m2!1szh-TW!2stw!4v1685090135582!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#p8").css("border","3px solid #397c82");
    $(".placeinfo button").not("#p8").removeAttr("style");
});
$("#p9").click(function(){
    $(".placecontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.0798554622875!2d120.58782107502655!3d22.53868117951588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e219d364ba5f3%3A0x73e6447af3468232!2z5p6X5b6M5Zub5p6X5bmz5Zyw5qOu5p6X5ZyS5Y2A!5e0!3m2!1szh-TW!2stw!4v1685090192280!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#p9").css("border","3px solid #397c82");
    $(".placeinfo button").not("#p9").removeAttr("style");
});
$("#p10").click(function(){
    $(".placecontainer .map").html('<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3693.6303586534414!2d120.7969937750166!3d22.216149679747254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3471cef69cf61047%3A0x6c4d19bff68f9ca7!2z6ZuZ5rWB5ZyL5a625qOu5p6X6YGK5qiC5Y2A!5e0!3m2!1szh-TW!2stw!4v1685090219875!5m2!1szh-TW!2stw" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>');
    $("#p10").css("border","3px solid #397c82");
    $(".placeinfo button").not("#p10").removeAttr("style");
});

// var moveStartX=0, moveEndX=0, differX=0, left=0, right=0;
// // 开始触碰
// $(".img").on("touchstart", function (e) {
//     moveStartX = e.originalEvent.changedTouches[0].pageX;
//     //alert(moveStartX);
// });
// // 滑动
// let touch = 0;
// $(".img img").on("touchmove", function (e) {
//     moveEndX = e.originalEvent.changedTouches[0].pageX,
//     differX = moveEndX - moveStartX;
//     let length = $(".img img").length;
//     length = (length-1)*210;
    
//     // 通过开始和结束的差判断是左滑还是右滑
//     if (differX > 50) {//右滑
//         let a = parseInt($(".img img").css("transform").replace(/[^0-9\-,]/g,'').split(',')[4]); //split分割字串
//         if(isNaN(a))
//         {
//             a=0;
//         }  
//         right = a - 210;
//         if(Math.abs(right) < length)
//         {
//             $(".img img").css("transform","translateX("+right+"px)");
//             $(".img img").css("transition","0.5s");
//         }
        

//     } else if (differX < -50) {//左滑
//         let a = parseInt($(".img img").css("transform").replace(/[^0-9\-,]/g,'').split(',')[4]); //split分割字串
//         left = a +210;
//         if(left <= 0 && left > -length)
//         {
//             $(".img img").css("transform","translateX("+left+"px)");
//             $(".img img").css("transition","0.5s");
//         }
//     }
// });