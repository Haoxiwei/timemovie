window.onload = function (){
        var flag = true;
        var mu = document.getElementById("mu");
        var pa = document.getElementById("musicradio");
        mu.onclick = function () {
            muted(pa);
            if (flag) {
                mu.style.backgroundImage = "url(images/startgai.png)";
                mu.style.width = 50 + "px"
                mu.style.height = 50 + "px"
                flag = false
            } else {
                mu.style.backgroundImage = "url(images/endgai.png)";
                mu.style.width = 50 + "px"
                mu.style.height = 50 + "px"
                flag = true;
            }

        }
        mu.style.position = "fixed";
        mu.style.bottom = 100 + "px";
        mu.style.left = 30 + "px";
        function muted(id) {
            if (id.muted) {
                id.muted = false;
            } else {
                id.muted = true;
            }
        }


        //��תľ�� ��ʼ
        var advert = document.getElementById("advert");
        var spin = document.getElementById("spin");//�����
        var ul = spin.children[0];
        var lis = ul.children;
        var arrow = document.getElementById("arrow");//װ���Ҽ��ĺ���
        var arrLeft = document.getElementById("arrLeft");//���ͷ
        var arrRight = document.getElementById("arrRight");//�Ҽ�ͷ
        var flag = true//���������򿪣�
        var config = [
            {
                "width": 180,
                "top": -20,
                "left": 580,
                "opacity": 0.2,
                "zIndex": 2
            },//0
            {
                "width": 180,
                "top": 60,
                "left": 520,
                "opacity": 0.8,
                "zIndex": 3
            },//1
            {
                "width": 180,
                "top": 130,
                "left": 668,
                "opacity": 1,
                "zIndex": 4
            },//2
            {
                width: 180,
                top: 60,
                left: 810,
                opacity: 0.8,
                zIndex: 3
            },//3
            {
                "width": 180,
                "top": -20,
                "left": 760,
                "opacity": 0.2,
                "zIndex": 2
            }//4
        ];//��תľ�����õ�
//1 ��꾭��(�뿪)����� ������ʾ���Ҽ�ͷ�ĺ���
        spin.onmouseover = function () {
            animate(arrow, {"opacity": 1});
        };
        spin.onmouseout = function () {
            animate(arrow, {"opacity": 0});
        };
        //2ͼƬ�������͸�λ
        assign();
        //3������Ҽ�ͷ�����õ���λ�� �����¸�ֵ��li
        arrRight.onclick = function () {
            if (flag) {//�������������
                flag = false;//�رս�����
                config.push(config.shift());//����ǰ��ɾ�����ŵ����
                assign();
            }
        };
        arrLeft.onclick = function () {
            if (flag) {//�������������
                flag = false;//�رս�����
                config.unshift(config.pop())//��������ɾ�����ŵ���ǰ��
                assign();
            }
        };
        //��װ
        function assign() {
            for (var a = 0; a < lis.length; a++) {
                animate(lis[a], config[a], function () {
                    flag = true;//ִ����Ϻ�Űѽ�������
                });
            }
        };
//��תľ�� ����

//������ ��ʼ
        var cnm = document.getElementById("cnm");
        var arrCnm = [];
        cnm.onclick = function () {
            flagX = 0;
            flagY = 0;
            for (var a = 0; a < 3; a++) {
                flagX = 0;
                for (var b = 0; b < 100; b++) {
                    var cnms = document.createElement("div");
                    advert.appendChild(cnms);
                    cnms.style.display = "inline-block";
                    cnms.style.width = 187 + "px";
                    cnms.style.height = 168 + "px";
                    cnms.style.zIndex = 9;
                    cnms.style.backgroundImage = "url(images/cnm.gif)";
                    cnms.style.position = "absolute";
                    //cnms.style.right = Math.floor(Math.random()*1000) + "px";
                    cnms.style.right = (flagX -1000)+ "px";
                    //cnms.style.top = Math.floor(Math.random()*500) + "px";
                    cnms.style.top = (flagY+40) + "px";
                    flagX += 187;
                    arrCnm.push(cnms);
                }
                flagX +=187;
                flagY +=168;
            }
            //console.log(arrCnm);
            //setInterval(function(){
            for(var i = 0;i<arrCnm.length;i++){
                animateeven(arrCnm[i],-500)
            }
            //},150)
        };

//������ ����

    };//window.onlord����

    var banner = document.getElementById("banner");
    var ul = banner.children[0];
    var timer = null;
    banner.onmouseover=function() {
        clearInterval(timer)
    }
    banner.onmouseout = function () {
        timer = setInterval(play,15)
    }
    timer=setInterval(play,15)


    function play() {
        var leader = ul.offsetLeft;
        var step = -3;
        if (leader > -6745) {
            leader = leader + step;
            ul.style.left = leader + "px";
        } else {
            ul.style.left = 0;
        }

};
