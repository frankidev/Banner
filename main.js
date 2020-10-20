ban = new Array(9);
ban[0]= "data/2.jpg";
ban[1]= "data/3.jpg";
ban[2]= "data/1.jpg";
ban[3]= "data/5.jpg";
ban[4]= "data/6.jpg";
ban[5]= "data/4.jpg";
ban[6]= "data/8.jpg";
ban[7]= "data/9.jpg";
ban[8]= "data/7.jpg";

var contador = 0;
var timer = 1500;

function banner(){
    contador = contador++;
    contador = contador % 9;
    document.banner.src = ban[contador];
     setTimeout("banner()",timer);

 if (ban[contador] = ban[8] ){
        clearTimeout(timer);
    }

    console.log(ban[contador++]);
    }




