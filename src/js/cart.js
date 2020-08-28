 //查询并显示购物车
function showCart(){
        $.ajax({
        url:'./../interface/showlist.php',
        dataType:'json',
        success:function(res){
            $('.item-box1').html("");
            $.each(res.data,function(index,item){
                $('.item-box1').append(
                `<ul>
                    <li class="list-1"><input type="checkbox"  class="txte"></li> 
                    <li class="list-2"><img src="${item.product_img}" alt=""></li>
                    <li class="list-3"><h3 id="del">${item.product_name}</h3></li>  
                    <li class="list-4">￥<em class="danjia">5999</em></li>
                    <li class="list-5" class="list1">
                        <div class="change-goods-nu">
                            <div class="box-1"><button class="cutNum">-</button></div>
                            <div class="box-2"><span class="tt shuliang">1</span></div>
                            <div class="box-3"><button class="addNum">+</button></div>      
                        </div>
                    </li>
                    <li class="list-6">￥<em class="xiaoji">5999</em></li>
                    <li class="list-7"><button class="delProduct">X</button></li>
                    </ul> `
                    // <input type="text" value="${item.product_num}" class="tt shuliang">
                )
            })
        }
        })
    }
     showCart()
 //删除商品            
$('.item-box1').on('click','.delProduct',function(){
    console.log(this)
        var name =$("#del").html()
        console.log(name)
        $.ajax({
            url:"./../interface/delwq.php",
            data:{
                name:name
            },
            dataType:'json',
            success:function(res){
                if(res.code){
                    showCart();
                    del()
                } 
            }
        })
        
    })
    //增加商品，获取“+”时获取的内容
    $('.item-box1').on('click','.addNum',function(){
        $(".shuliang").html(parseInt($(".shuliang").html())+1);
        add();
        adds()
    })
    //增加商品，获取“-”时获取的内容
    $('.item-box1').on('click','.cutNum',function(){
        $(".shuliang").html(parseInt($(".shuliang").html())-1);
        if($(".shuliang").html()<1){
            $(".shuliang").html(1);
        }
        add();
        adds()
    })
    function add(){
        var result= parseInt($(".shuliang").html())*parseInt($(".danjia").html())
        $(".heji").html(result);
    }
    function adds(){
        var result= parseInt($(".shuliang").html())*parseInt($(".danjia").html())
        $(".xiaoji").html(result);
    }
    function del(){
        $(".shuliang").html(0);
        $(".heji").html(0);
    }



     // $('.item-box1').on('click','.addNum',function(){
    //     $.ajax({
    //         url:"./interface/updatewq.php",
    //         dataType:'json',
    //         data:{
    //             type:'add',
    //             name:"小米10至尊纪念版"
    //         },
    //         success:function(res){
    //             if(res.code){
    //                 showCart()
    //             }
    //             add();

    //         }
    //     })
    // })
    // $('.item-box1').on('click','.cutNum',function(){
    //     $.ajax({
    //         url:"./interface/updatewq.php",
    //         dataType:'json',
    //         data:{
    //             type:'del',
    //             name:"小米10至尊纪念版"
    //         },
    //         success:function(res){
    //             if(res.code){
    //                 showCart()
    //             }
    //             add()
    //         }
    //     })
    // })
   /*  function add(){
        var result= parseInt($(".num").html())*parseInt($(".price").html())
        $(".heji").html(result);
        console.log(result)
    } */