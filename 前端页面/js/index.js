$(function(){
    var $picLi = $(".banner .pic li"),
        $tabLi = $(".banner .tab li"),
        $btnLi = $(".banner .btn li"),
        len = $picLi.length,
        first = 0,
        timer;

    //初始化
    $tabLi.eq(0).addClass("on");
    $picLi.eq(0).show();

    //tab区域
    $tabLi.click(function(){
        var x = $(this).index();
        if(x != first){
            change(x);
        }
    });

    //btn区域 2个箭头
    $btnLi.click(function(){
        var x = first;
        if ($(this).index()){
            x++;
            if(x >= len){
                x = 0;
        }}else{
            x--;
            if(x < 0){
                x = len - 1;
            }};
        change(x);
    });

    auto();
    //hover 传两个函数，移入时 和 移出时 的函数
    $(".banner").hover(function(){
        clearInterval(timer);
    },auto);


    function auto(){
        timer = setInterval(function(){
            var x = first;
            x++;
            x %= len;
            change(x);
        },3000);
    }
    function change(n){
        $tabLi.eq(first).removeClass("on");
        $picLi.eq(first).fadeOut(1200);
        first = n;
        $tabLi.eq(first).addClass("on");
        $picLi.eq(first).fadeIn(1200);
    };
});

$(function(){
    var $navLi = $(".news-nav .nav li"),
        $containLi = $(".news-nav .contain li"),
        first = 0;

    $navLi.click(function(){
        var x = $(this).index();
        $navLi.eq(first).removeClass("active");
        $containLi.eq(first).removeClass("show");
        first = x;
        $navLi.eq(first).addClass("active");
        $containLi.eq(first).addClass("show");
    });
});
/*$(function(){
    alert(1);
});*/
