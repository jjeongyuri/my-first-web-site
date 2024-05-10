$(function(){
    // 함수 실행
    Toggle();
    CarShow();
    Cgallery();

    
    // 모바일 네비게이션
    let navWidth = $("header>div>nav").innerWidth();
    $(".btnNav").on("click",function(){
        $("nav").animate({left:0},500);
    })
    $(".close").on("click",function(){
        $("nav").css('left','-'+navWidth+"px")
    });

    // 돋보기
    let searchWide = $("#box input").innerWidth();
    let a = $(".search")
    // console.log(searchWide);
    $("#glass").on("click",function(){
        if(a.css("display") === "none"){
            a.show(searchWide)
        } else{
            a.hide(searchWide)
        }
    })

    // toggle
    function Toggle(){
        $("#iconedown").on("click",function(){
            $(".toggle").show();
            $("#iconeup").show();
            $("#iconedown").hide();
        })
        $("#iconeup").on("click",function(){
            $(".toggle").hide();
            $("#iconeup").hide();
            $("#iconedown").show();
        })
    };
    //

    // toggle 메뉴 클릭시 이미지 분류
    let aaa = $("#allpic>li");
    // console.log(aaa);
    let bbb = $(".all>#SEDAN");
    // console.log(bbb)
    let ccc = $(".all>#SUV");
    // console.log(ccc)

    let allpic = $(".all").outerWidth(true);
    let sedanpic = $(".all>li").outerWidth(true);
    let sedangup = sedanpic * 6;
    let suvgup = sedanpic * 4;
    // console.log(allpic,sedanpic,sedangup,suvgup)
    
    $(".toggle>ul>li>a").on("click",function(){
        // error or fix here
        // console.log(1)
        let move = $(this).attr("href");
        let abab = bbb.attr("id")
        console.log(move)
        console.log('aaa:');
        console.log(aaa)
        // console.log('bbb:');
        // console.log(bbb)
        // console.log('ccc:');
        // console.log(ccc);
        if(move === '#'+ abab){  
            console.log(1) 
            
            $(".all").show(allpic);
        } if (this === bbb){
            $(".all").show(sedangup).hide(suvgup);
        } if(this === ccc){
            $(".all").show(suvgup).hide(sedangup);
        }
    })




    
    // box03 자동차 갤러리 움직이기
    function CarShow(){
        // 기본정리
        let allLiWidth = $(".show>.all>li").outerWidth(true);
        $(".show>.all>li:last").prependTo(".show>.all");
        $(".show>.all").css("marginLeft",'-'+allLiWidth+'px');

        // prev클릭시 이동
        $(".prevTo").on("click",function(e){
            $(".show>.all").animate({marginLeft : '-='+allLiWidth+'px'},function(){
                $(".show>.all>li:first").appendTo(".show>.all");
                $(".show>.all").css("margin-left",'-'+allLiWidth+'px')
            })
        });

        // next클릭시 이동
        $(".nextTo").on("click",function(e){
            $(".show>.all").animate({marginLeft : '+='+allLiWidth+'px'},function(){
                $(".show>.all>li:last").prependTo(".show>.all");
                $(".show>.all").css("margin-left",'-'+allLiWidth+'px')
            })
        });
    }
    // 

    // box06갤러리 클릭시 보이기/이동
    function Cgallery(){
        $("#show>#all>ul>li>img").on("click",function(e){
            let pic = $(this).attr("src");
            $("#gallery>figure>img").attr("src",pic);
        })
    };

    let showWidth = $("#show>#all>ul>li").outerWidth(true);
    $("#show>#all>ul>li:last").prependTo("#show>#all>ul");
    $("#show>#all").css("marginLeft",'-'+showWidth+'px');

    $(".prev").on("click",function(){
        $("#show>#all").animate({marginLeft:'-='+showWidth+'px'},function(){
            $("#show>#all>ul>li:first").appendTo("#show>#all>ul");
            $("#show>#all").css("marginLeft","-"+showWidth+"px");
        })
    });
    $(".next").on("click",function(){
        $("#show>#all").animate({marginLeft:'+='+showWidth+'px'},function(){
            $("#show>#all>ul>li:last").prependTo("#show>#all>ul");
            $("#show>#all").css("marginLeft","-"+showWidth+"px");
        })
    });


    // box08 tap메뉴
    $(".qna>dl>dt:first").addClass("selected");
    $(".qna>dl>dd:not(:first)").hide();
    $('.qna>dl>dt').on('click',function(){
        let display = $(this).next('dd').css('display');
        if(display === "none"){
            $('.selected').next('dd').slideUp(300);
            $(this).next('dd').slideDown(300);
            $('.qna>dl>dt').removeClass('selected');
            $(this).addClass('selected')
        }
    })

    // swiper
    var swiper = new Swiper(
        ".swiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        speed: 2000,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        }
        }
    );
})
