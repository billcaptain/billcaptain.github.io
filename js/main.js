function sayHello() {
    console.log("大家好，這是黃金瀑布的一角，是我在中秋聯假時去九份老街附近遊玩時拍下的。九份地區是一個古老且風景非常優美的地方，是一個很適合遊玩的地點。詳情在右上方Travel處。");
    $("#output").text("大家好，這是黃金瀑布的一角，是我在中秋聯假時去九份老街附近遊玩時拍下的。九份地區是一個古老且風景非常優美的地方，是一個很適合遊玩的地點。詳情在右上方Travel處。");
}

function sayWelcome() {
    console.log("這是我的家鄉廈門，一個美麗的海濱城市，坐落在福建省的東南部。這裡天氣宜人，很適合居住，左圖是廈門傍晚的部分景色。更多圖片點擊右上方Hometown");
    $("#output1").text("這是我的家鄉廈門，一個美麗的海濱城市，坐落在福建省的東南部。這裡天氣宜人，很適合居住，左圖是廈門傍晚的部分景色。更多圖片點擊右上方Hometown");
}

function sayImg() {
    console.log("welcome to Captain's web");
    $("#output2").text("welcome to Captain's web");
}

function time1() {　
    var Today = new Date();　
    alert("今天日期是 " + Today.getFullYear() + " 年 " + (Today.getMonth() + 1) + " 月 " + Today.getDate() + " 日");
}