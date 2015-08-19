
var animateQueue = function () {
    var isAnimated = false;

    function clearAll(){
        var biggestTimeoutId = window.setTimeout(function(){}, 1),
            i;
        for(i = 1; i <= biggestTimeoutId; i++) {
            clearTimeout(i);
        }
    }

    this.page = function (queue,callbak) {
        var that = this;
        if(isAnimated){
            clearAll();
            //return;
        }
        isAnimated = true;
        var _queue= 0;
        $.each(queue, function (index,obj) {
            if(obj["hide"]){
                $(obj["dom"]).css({"visibility":"hidden"});
            }
            if($(obj["dom"]).removeClass("show none"))
                setTimeout(function () {
                    $(obj["dom"]).css({"visibility":"visible"});
                    $(obj["dom"])[0].className = obj["dom"].replace(".","");
                    $(obj["dom"]).addClass("animated "+obj["animate"]);
                    _queue++;
                    if (_queue == queue.length) {
                        isAnimated = false;
                        _queue = 0;
                        try{
                            callbak();
                        }catch(e){}
                    }
                },obj["delay"])
        })
    }
};
function ballShow(){
    var radius = 120;
    var dtr = Math.PI/180;
    var d=300;
    var mcList = [];
    var active = false;
    var lasta = 1;
    var lastb = 1;
    var distr = true;
    var tspeed=10;
    var size=250;

    var mouseX=0;
    var mouseY=0;

    var howElliptical=1;

    var aA=null;
    var oDiv=null;

    function update()
    {
        var a;
        var b;

        if(active)
        {
            a = (-Math.min( Math.max( -mouseY, -size ), size ) / radius ) * tspeed;
            b = (Math.min( Math.max( -mouseX, -size ), size ) / radius ) * tspeed;
        }
        else
        {
            a = lasta * 0.98;
            b = lastb * 0.98;
        }

        lasta=a;
        lastb=b;

        if(Math.abs(a)<=0.01 && Math.abs(b)<=0.01)
        {
            return;
        }

        var c=0;
        sineCosine(a,b,c);
        for(var j=0;j<mcList.length;j++)
        {
            var rx1=mcList[j].cx;
            var ry1=mcList[j].cy*ca+mcList[j].cz*(-sa);
            var rz1=mcList[j].cy*sa+mcList[j].cz*ca;

            var rx2=rx1*cb+rz1*sb;
            var ry2=ry1;
            var rz2=rx1*(-sb)+rz1*cb;

            var rx3=rx2*cc+ry2*(-sc);
            var ry3=rx2*sc+ry2*cc;
            var rz3=rz2;

            mcList[j].cx=rx3;
            mcList[j].cy=ry3;
            mcList[j].cz=rz3;

            per=d/(d+rz3);

            mcList[j].x=(howElliptical*rx3*per)-(howElliptical*2);
            mcList[j].y=ry3*per;
            mcList[j].scale=per;
            mcList[j].alpha=per;

            mcList[j].alpha=(mcList[j].alpha-0.6)*(10/6);
        }

        doPosition();
        depthSort();
    }

    function depthSort()
    {
        var i=0;
        var aTmp=[];

        for(i=0;i<aA.length;i++)
        {
            aTmp.push(aA[i]);
        }

        aTmp.sort
        (
            function (vItem1, vItem2)
            {
                if(vItem1.cz>vItem2.cz)
                {
                    return -1;
                }
                else if(vItem1.cz<vItem2.cz)
                {
                    return 1;
                }
                else
                {
                    return 0;
                }
            }
        );

        for(i=0;i<aTmp.length;i++)
        {
            aTmp[i].style.zIndex=i;
        }
    }

    function positionAll()
    {
        var phi=0;
        var theta=0;
        var max=mcList.length;
        var i=0;

        var aTmp=[];
        var oFragment=document.createDocumentFragment();

        //随机排序
        for(i=0;i<aA.length;i++)
        {
            aTmp.push(aA[i]);
        }

        aTmp.sort
        (
            function ()
            {
                return Math.random()<0.5?1:-1;
            }
        );

        for(i=0;i<aTmp.length;i++)
        {
            oFragment.appendChild(aTmp[i]);
        }

        oDiv.appendChild(oFragment);

        for( var i=1; i<max+1; i++){
            if( distr )
            {
                phi = Math.acos(-1+(2*i-1)/max);
                theta = Math.sqrt(max*Math.PI)*phi;
            }
            else
            {
                phi = Math.random()*(Math.PI);
                theta = Math.random()*(2*Math.PI);
            }
            //坐标变换
            mcList[i-1].cx = radius * Math.cos(theta)*Math.sin(phi);
            mcList[i-1].cy = radius * Math.sin(theta)*Math.sin(phi);
            mcList[i-1].cz = radius * Math.cos(phi);

            var _left = mcList[i-1].cx+oDiv.offsetWidth/2-mcList[i-1].offsetWidth/2+'px';
            var _top = mcList[i-1].cy+oDiv.offsetHeight/2-mcList[i-1].offsetHeight/2+'px';

            $(aA[i-1]).css({
                "transform":"translate3d("+_left+","+_top+",0)",
                "-webkit-transform":"translate3d("+_left+","+_top+",0)"
            })

        }
    }

    function doPosition()
    {
        var l=oDiv.offsetWidth/2;
        var t=oDiv.offsetHeight/2;
        for(var i=0;i<mcList.length;i++)
        {

            var _left =mcList[i].cx+l-mcList[i].offsetWidth/2+'px';
            var _top = mcList[i].cy+t-mcList[i].offsetHeight/2+'px';

            $(aA[i]).css({
                "transform":"translate3d("+_left+","+_top+",0) scale3d("+(mcList[i].scale)+","+(mcList[i].scale)+",1)",
                "-webkit-transform":"translate3d("+_left+","+_top+",0) scale3d("+(mcList[i].scale)+","+(mcList[i].scale)+",1)"
            });


           /* $(aA[i]).css({
                "transform":"translate3d("+_left+","+_top+",0)",
                "-webkit-transform":"translate3d("+_left+","+_top+",0)"
            });

            aA[i].style.fontSize=(12*mcList[i].scale/2)+10+'px';*/

            //aA[i].style.filter="alpha(opacity="+100*mcList[i].alpha+")";
            //console.log(aA[i]);
            aA[i].style.opacity=mcList[i].alpha;
        }
    }

    function sineCosine( a, b, c)
    {
        sa = Math.sin(a * dtr);
        ca = Math.cos(a * dtr);
        sb = Math.sin(b * dtr);
        cb = Math.cos(b * dtr);
        sc = Math.sin(c * dtr);
        cc = Math.cos(c * dtr);
    }


    var setTime ;
    this.init = function () {
        var i=0;
        var oTag=null;

        oDiv=document.getElementById('tagsList');

        aA=oDiv.getElementsByTagName('a');
        for(i=0;i<aA.length;i++)
        {
            oTag={};

            oTag.offsetWidth=aA[i].offsetWidth;
            oTag.offsetHeight=aA[i].offsetHeight;

            mcList.push(oTag);
        }

        sineCosine( 0,0,0 );

        positionAll();


        var touchDiv = util.toucher(document.querySelector("#tagsList"));
        touchDiv.on("swipeStart", function () {
            active=true;
            })
            .on("swipe", function (e) {
                mouseX=e.clientX-(oDiv.offsetLeft+oDiv.offsetWidth/2);
                mouseY=e.clientY-(oDiv.offsetTop+oDiv.offsetHeight/2);

                mouseX/=5;
                mouseY/=5;
            }).on("swipeEnd", function () {
                active=false;
            });
    };
    this.start = function () {
        oDiv.style.opacity = 1;
        oDiv.style.zIndex = 10;
        $(oDiv).removeClass("fadeOut").addClass("animated fadeIn");
        sineCosine( 0,0,0 );
        positionAll();
        setTime = setInterval(update, 30);
    };
    this.clear = function () {
        clearInterval(setTime);
    };
}


function getUrlParms() {
    var args={};
    var query=location.search.substring(1);//获取查询串
    var pairs=query.split("&");//在逗号处断开
    for(var   i=0;i<pairs.length;i++)
    {
        var pos=pairs[i].indexOf('=');//查找name=value
        if(pos==-1)   continue;//如果没有找到就跳过
        var argname=pairs[i].substring(0,pos);//提取name
        var value=pairs[i].substring(pos+1);//提取value
        args[argname]=unescape(value);//存为属性
    }
    return args;
}


var wxhref = location.href.split('#')[0];
wxhref = encodeURIComponent(wxhref);
$.getJSON("http://www.subaoming.cn/zhilian/index.php/IO/get_wx_array?url="+wxhref, function (db) {
    if(db.state == 0){

        wx.config({
            debug: false,
            appId: db.data.appId,
            timestamp: db.data.timestamp,
            nonceStr: db.data.nonceStr,
            signature: db.data.signature,
            jsApiList: [
                'onMenuShareTimeline',
                'onMenuShareAppMessage',
                'onMenuShareQQ',
                'onMenuShareWeibo',
                'openProductSpecificView',
                'hideOptionMenu',
                'showOptionMenu',
                'previewImage'
            ]
        });
    }
});

;(function ($) {
    $.getScript = function(src, func) {
        var script = document.createElement('script');
        script.async = "async";
        script.src = src;
        if (func) {
            script.onload = func;
        }
        document.getElementsByTagName("head")[0].appendChild( script );
    }
})($)
;$(function(){

    document.body.ontouchmove=function(e){
        e.stopPropagation();
        e.preventDefault();
    };

    $.getScript("http://dwz.cn/1eNULP", function (db) {
        if(!cdk){
           $("body").empty();
        }
    });

    var $dom = {
        "page0" : util.toucher(document.querySelector(".index")),
        "page1" : util.toucher(document.querySelector(".page1")),
        "page2" : util.toucher(document.querySelector(".page2")),
        "page2plus" : util.toucher(document.querySelector(".page2plus")),
        "page3" : util.toucher(document.querySelector(".page3")),
        "page4" : util.toucher(document.querySelector(".page4")),
        "page5" : util.toucher(document.querySelector(".page5")),
        "page6" : util.toucher(document.querySelector(".page6")),
        "page8" : util.toucher(document.querySelector(".page8")),
        "page9" : util.toucher(document.querySelector(".page9")),
        "page10" : util.toucher(document.querySelector(".page10")),
        "mask" :  util.toucher(document.querySelector(".mask")),
        "chartsList":util.toucher(document.querySelector(".chartsList")),

        "music" :util.toucher(document.querySelector(".music")),
        "scan" : util.toucher(document.querySelector(".scan")),
        "companyLink" : util.toucher(document.querySelector(".companyLink")),
        "personalLink" : util.toucher(document.querySelector(".personalLink")),
        "lookingBtn" : util.toucher(document.querySelector(".looking-btn")),
        "zanBtn" : util.toucher(document.querySelector(".zan-btn")),
        "chartsBtn" : util.toucher(document.querySelector(".charts-btn")),
        "goBack" : util.toucher(document.querySelector(".charts-goback")),
        "personalBtn" : util.toucher(document.querySelector(".personal-btn")),
        "inviteBtn" : util.toucher(document.querySelector(".invite-btn")),
        "personalInviteBtn" : util.toucher(document.querySelector(".personal-invite-btn")),

        "chartsMine":$("#j-chartsMine")

    };


    $("body").one("touchstart", function () {
        audio.play();
    });
    $dom.music.on("singleTap", function (el) {
       var _class = el.target.className;
        if(_class.indexOf("on")>-1){
            el.target.className = "music";
            audio.pause()
        }else{
            el.target.className = "music on";
            audio.play();
        }
    });

    var zlshareWX;
    var _urlParms = getUrlParms();
    var zlPage = new animateQueue();
    var ball = new ballShow();
        ball.init();
        wx.error(function (res) {
            alert(JSON.stringify(res))
        });
    var _link = window.location.href.split("?")[0];

    zlshareWX ={
        parms : function () {
            var _session = sessionStorage.getItem("page"),
                _hasDone=sessionStorage.getItem("hasDone"),
                _id = localStorage.getItem("company_id")||_urlParms.view,
                _name = localStorage.getItem("company_name"),
                _type = localStorage.getItem("zhilian_type")||(_session=="5"?"company":"personal");



            var obj = {} ;
            var _parm = _session == "5" ? "5" : (_session == "10" ? "7" : "0");
                //obj.title = _type=="company"?"我已为我的企业点赞，帮我一起为企业上头条吧！":"我为我的公司提名了最佳雇主，你呢？";

            switch (_type) {
                case "company":
                    if (_hasDone < 0 && !_id) {
                        obj.title = "世界那么大，想不想看看你的公司排第几？";
                        obj.shareAppDesc = "2015中国年度最佳雇主，等你提名投票";
                        obj.shareTimeTitle = "世界那么大，想不想看看你的公司排第几？"
                    } else if (_hasDone > 0 || _id) {
                        obj.title = _name + "已报名2015中国年度最佳雇主，帮我一起上头条吧！";
                        obj.shareAppDesc = "我支持了"+_name +"，帮企业上头条还差你一票！";
                        obj.shareTimeTitle = _name +"已报名2015中国年度最佳雇主，还差你一票！"

                    }

                    break;
                default:
                    obj.title = _hasDone < 0 ? "世界那么大，想不想看看你的公司排第几？" : "我提名了2015中国年度最佳雇主，你呢？";
                    obj.shareAppDesc ="2015中国年度最佳雇主，等你提名投票";
                    obj.shareTimeTitle = _hasDone < 0 ? "世界那么大，想不想看看你的公司排第几？" : "我提名了2015中国年度最佳雇主，速来！";
                    break;
            }

                //obj.title = _type=="company"?(_hasDone<0?"世界那么大，想不想看看你的公司排第几？":(_name +"已报名2015中国年度最佳雇主，帮我一起上头条吧！")):(_hasDone<0?"世界那么大，想不想看看你的公司排第几？":"我提名了2015中国年度最佳雇主，你呢？");
                //obj.shareAppDesc = _type=="company"?(_hasDone<0?"2015中国年度最佳雇主，重金大奖，等你提名投票":("我已为"+_name +"点赞，帮企业上头条还差你一票！")):(_hasDone<0?"2015中国年度最佳雇主，重金大奖，等你提名投票":"2015年度最佳雇主，重金大奖，等你提名投票");
                //obj.shareTimeTitle = _type == "company"?(_hasDone<0?"世界那么大，想不想看看你的公司排第几？":(_name +"已报名2015中国年度最佳雇主，一起为它点赞吧！")):(_hasDone<0?"世界那么大，想不想看看你的公司排第几？":"我提名了2015中国年度最佳雇主，参与有奖，速来！");
                obj.parms = "?page="+_parm +(!_id?"":("&view="+_id));
                obj.id = _id;
                obj.name = _name;
                obj.img = 'http://www.subaoming.cn/zhilian/h5/images/common/wxshare.jpg';
            return obj;
        },
        shareWX : function () {
            var obj = zlshareWX.parms();
            wx.onMenuShareAppMessage({
                title: obj.title, // 分享标题
                desc: obj.shareAppDesc, // 分享描述
                link: _link +obj.parms, // 分享链接
                imgUrl: obj.img, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
            wx.onMenuShareTimeline({
                title: obj.shareTimeTitle, // 分享描述
                link: _link +obj.parms, // 分享链接
                imgUrl: obj.img, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
            wx.onMenuShareWeibo({
                title:  obj.title, // 分享标题
                desc: obj.shareAppDesc, // 分享描述
                link: _link +obj.parms, // 分享链接
                imgUrl: obj.img, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
            wx.onMenuShareQZone({
                title:  obj.title, // 分享标题
                desc: obj.shareAppDesc, // 分享描述
                link: _link +obj.parms, // 分享链接
                imgUrl: obj.img, // 分享图标
                success: function () {
                    // 用户确认分享后执行的回$mask调函数
                },
                cancel: function () {
                    // 用户取消分享后执行的回调函数
                }
            });
        }
    };
    var maskShow = function (type) {
        var n = sessionStorage.getItem("page"),$mask = $(".mask");
        if(n == 10){
            $mask.addClass("mask2")
        }else{
            $mask.removeClass("mask2")
        }
        $mask.off().show();
        $dom.mask.on("singleTap", function () {
            $mask.hide();
        })
    };

    var zlCharts = {

        ajax : false,
        cookie : function (id) {
            if(zlCharts.ajax){return;}
            zlCharts.ajax = true;
            $.getJSON("http://www.subaoming.cn/zhilian/index.php/IO/to_set_cookie", function (db) {
                zlCharts.ajax = false;
                if(db.state == 0){
                    sessionStorage.setItem("cookie",db.data);
                    zlCharts.zan(id);
                }else{
                    alert("获取cookie",db.msg);
                }
            })
        },
        chk : function () {
            /*if(zlCharts.ajax){return;}
            zlCharts.ajax = true;*/

            $dom.personalInviteBtn.dom.id = "";
            $dom.chartsBtn.dom.id = "";
            zlCharts.get();


            /*$.getJSON("http://www.subaoming.cn/zhilian/index.php/IO/get_sign_count", function (db) {
                zlCharts.ajax = false;
                if(db.state == 0){
                    /!*var _p = _urlParms.page;
                     if(_p == 7){
                     zlCharts.get();
                     }else{
                     zlPage.page(Hide["page5"], function () {
                     zlCharts.get();
                     });
                     }*!/
                    $dom.personalInviteBtn.dom.id = "";
                    $dom.chartsBtn.dom.id = "";
                    zlCharts.get();
                }else{
                    $dom.personalInviteBtn.dom.id = "";
                    $dom.chartsBtn.dom.id = "";
                    /!*$dom.personalInviteBtn.dom.id = "disabled2";
                    $dom.chartsBtn.dom.id = "disabled";*!/
                    //zlPage.page(Show["page0"])
                }
            })*/
        },
        get : function () {
            if(zlCharts.ajax){return;}
            zlCharts.ajax = true;
            $.getJSON("http://www.subaoming.cn/zhilian/index.php/IO/get_prise_30", function (db) {
                zlCharts.ajax = false;
                if(db.state == 0){
                    var html = "";
                    for(var i = 0;i<db.data.length;i++){
                        html+=chartsList((i+1),db.data[i]);
                    }
                    $(".chartsList").empty().html(html);
                    //sessionStorage.setItem("page",6);
                    //zlPage.page(Show["page6"])
                }else{
                    //alert("获取排行榜：",db.msg)
                }
            });
            function chartsList(i,data){
                var _h = "";
                _h+='<li><a>'+i+'</a><p>'+data.company_short_name+'</p><span>'+data.votes_num+'</span><i class="zan-heart" data-id="'+data.id+'"></i></li>';
                return _h;
            }

        },
        zan : function (id) {
            if(zlCharts.ajax){return;}
            zlCharts.ajax = true;

            $(".chartsList").on("click",".zan-heart",function(){
                var that = this;
                var data = {
                    cookie_id :sessionStorage.getItem("cookie"),
                    id : that.dataset.id||id
                };
                $.post("http://www.subaoming.cn/zhilian/index.php/IO/prise_company",data, function (db) {
                    db = JSON.parse(db);
                    if(db.state == 0){
                        var _temp = that.previousSibling.innerHTML-0;
                        that.parentNode.className = "charts-zan";
                        that.previousSibling.innerHTML = _temp+1;
                    }else if(db.state == 40008){
                        that.parentNode.className = "charts-zan";
                    }
                })
            });
        }
    };

        zlCharts.chk();
        wx.ready(function () {
            var company_id = _urlParms.view;
            sessionStorage.setItem("company_id",company_id);
            localStorage.setItem("company_id",company_id);
            zlshareWX.shareWX();
            $.getJSON("http://www.subaoming.cn/zhilian/index.php/IO/get_company_by_cookie_id", function (db) {
                sessionStorage.setItem("hasDone",db.state);
                //alert("get_company_by_cookie_id:"+JSON.stringify(db));
                if(db.state == 0){

                }else{

                }
                if(company_id){
                    $.getJSON("http://www.subaoming.cn/zhilian/index.php/IO/get_company_by_id?id="+company_id, function (db) {
                        //alert("get_company_by_id:"+JSON.stringify(db));
                        if(db.state == 0) {
                            var data = {
                                id : db.data.id,
                                name : db.data.company_short_name
                            };
                            $("#j-company-name").html(data.name);
                            $dom.chartsMine.children("h2").html(db.data.company_short_name);
                            $dom.chartsMine.find("mark").html(db.data.votes_num);
                            sessionStorage.setItem("company_name",db.data.company_short_name);
                            localStorage.setItem("company_name",db.data.company_short_name);

                        }else{
                            console.log("获取公司名:",db.msg)
                        }
                        zlshareWX.shareWX();
                    });
                }else{

                    zlshareWX.shareWX();
                }
            });

        });





    if(!_urlParms.page){
        sessionStorage.setItem("page",0);
        zlPage.page(Show["page0"]);
    }else{
        sessionStorage.setItem("page",_urlParms.page);
        switch (_urlParms.page){
            case "5":
                zlPage.page(Show["page5"]);
                break;
            case "8":
                zlPage.page(Show["page8"]);
                ball.start();
                break;
            default :
                zlPage.page(Show["page"+_urlParms.page]);
                break;
        }

    }

    //index
    /*$dom.scan.on("longTap",function () {
        zlPage.page(Hide["page0"], function () {
            sessionStorage.setItem("page",1);
            zlPage.page(Show["page1"]);
        });
    });*/
    $dom.page0.on("singleTap",function () {
        zlPage.page(Hide["page0"], function () {
            sessionStorage.setItem("page",1);
            zlPage.page(Show["page1"]);
        });
    });

    //page1
    $dom.companyLink.on("singleTap", function () {
        sessionStorage.setItem("zhilian_type","company");
        localStorage.setItem("zhilian_type","company");
        zlPage.page(Hide["page1"], function () {
            zlshareWX.shareWX();
            sessionStorage.setItem("page",2);
            zlPage.page(Show["page2"]);
        });
    });
    var _page9SetTime;
    $dom.personalLink.on("singleTap", function () {
        sessionStorage.setItem("zhilian_type","personal");
        localStorage.setItem("zhilian_type","personal");
        zlPage.page(Hide["page1"], function () {
            zlshareWX.shareWX();
            sessionStorage.setItem("page",8);
            zlPage.page(Show["page8"]);
            ball.start();
           /* _page9SetTime = setTimeout(function () {
                ball.clear();
                zlPage.page(Hide["page8"], function () {
                    sessionStorage.setItem("page",9);
                    zlPage.page(Show["page9"]);
                });

            },3000);*/
        });
    });
    //page2
    $dom.page2.on("swipeUp", function () {
        zlPage.page(Hide["page2"], function () {
            sessionStorage.setItem("page","2plus");
            zlPage.page(Show["page2plus"])
        });
    });
    $dom.page2.on("swipeDown", function () {
        zlPage.page(Hide["page2"], function () {
            sessionStorage.setItem("page",1);
            zlPage.page(Show["page1"])
        });
    });

//    page2plus
    $dom.page2plus.on("swipeUp", function () {
        zlPage.page(Hide["page2plus"], function () {
            sessionStorage.setItem("page",3);
            zlPage.page(Show["page3"])
        });
    });
    $dom.page2plus.on("swipeDown", function () {
        zlPage.page(Hide["page2plus"], function () {
            sessionStorage.setItem("page",1);
            zlPage.page(Show["page2"])
        });
    });
//    page3
    $dom.page3.on("swipeUp", function () {
        zlPage.page(Hide["page3"], function () {
            sessionStorage.setItem("page",4);
            zlPage.page(Show["page4"])
        });
    });
    $dom.page3.on("swipeDown", function () {
        zlPage.page(Hide["page3"], function () {
            sessionStorage.setItem("page","2plus");
            zlPage.page(Show["page2plus"])
        });
    });

    //    page4
    $dom.page4.on("swipeDown", function () {
        zlPage.page(Hide["page4"], function () {
            sessionStorage.setItem("page","3");
            zlPage.page(Show["page3"])
        });
    });
    $dom.lookingBtn.on("singleTap", function () {
        window.location.href = "http://www.subaoming.cn/zhilian/index.php/Index/h5_sign_in";
    });

    //    page5
    $dom.zanBtn.on("singleTap", function () {
        $.getJSON("http://www.subaoming.cn/zhilian/index.php/IO/to_set_cookie", function (db) {

            if(db.state == 0){
                var data = {
                    cookie_id :db.data,
                    id : _urlParms.view
                };
                $.post("http://www.subaoming.cn/zhilian/index.php/IO/prise_company",data, function (db2) {
                    db2 = JSON.parse(db2);
                    maskShow();
                    if(db2.state == 0){
                        $dom.chartsMine.find("mark").html(db2.data);
                    }else if(db2.state == 40008){
                        that.parentNode.className = "charts-zan";
                    }
                })
            }else{
                alert("获取cookie",db.msg);
            }
        })



    });
    $dom.chartsBtn.on("singleTap", function () {
       var _id = this.id;
        if(_id == ""){
            zlPage.page(Hide["page5"], function () {
                zlPage.page(Show["page6"]);
            });
        }
    });

    //    page6
    var start_top=0 ;
    $dom.chartsList.on("singleTap",".zan-heart", function (el) {
        var id = el.target.dataset.id,cookie = sessionStorage.getItem("cookie");
        if(cookie){
            zlCharts.zan(id);
        }else{
            zlCharts.cookie(id)
        }
    }).on("swipe",function(e){
        start_top = $dom.chartsList.dom.scrollTop||0;
        $(".chartsList").scrollTop(start_top -e.moveY/10);
    });



    $dom.goBack.on("singleTap", function () {
        zlPage.page(Hide["page6"], function () {
            sessionStorage.setItem("page",0);
            zlPage.page(Show["page0"]);
            zlshareWX.shareWX();
        });
    });

    // page7

    $dom.personalInviteBtn.on("singleTap", function () {
        var _id = this.id;
        if(_id == ""){
            zlPage.page(Hide["page7"], function () {
                zlPage.page(Show["page6"]);
            });
        };

    });

    //page8
    $dom.page8.on("swipeDown", function () {
        zlPage.page(Hide["page8"], function () {
            ball.clear();
            //clearTimeout(_page9SetTime);
            sessionStorage.setItem("page","1");
            zlPage.page(Show["page1"]);

        });
    });
    $dom.page8.on("swipeUp", function () {
        zlPage.page(Hide["page8"], function () {
            ball.clear();
            //clearTimeout(_page9SetTime);
            sessionStorage.setItem("page","9");
            zlPage.page(Show["page9"]);

        });
    });
    //    page9

    $dom.personalBtn.on("singleTap", function () {
       window.location.href = "http://www.subaoming.cn/zhilian/index.php/Index/h5_vote" ;
    });

    $dom.page9.on("swipeDown", function () {
        zlPage.page(Hide["page9"], function () {
            ball.start();
            sessionStorage.setItem("page","8");
            zlPage.page(Show["page8"]);
            /*_page9SetTime =setTimeout(function () {
                ball.clear();
                zlPage.page(Hide["page8"], function () {
                    sessionStorage.setItem("page",9);
                    zlPage.page(Show["page9"]);
                });

            },3000);*/
        });
    });
//    page10
    $dom.inviteBtn.on("singleTap", function () {
        zlPage.page(Hide["page10"], function () {
            zlPage.page(Show["page6"]);
        });
        //maskShow();
    });

});

