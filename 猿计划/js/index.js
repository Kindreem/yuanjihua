

       $(document).ready(function() {
       	//轮播图
       	$(function(){
       		var i = 0;
          
        $(".spot>a").click(function () {
             $(".spot>a").removeClass("current");
             $(this).addClass("current");
             $("#aimg>a").removeClass("show");
             var index = $(this).index();
             $("#aimg>a").eq(index).addClass("show");
             i = index;
           });
           setInterval(function() {
          	$("#aimg>a").removeClass("show");
          	$(".spot>a").removeClass("current");
          	   i += 1;
          	   i %= 6;
          	  $(".spot>a").eq(i).addClass("current");
          	  $("#aimg>a").eq(i).addClass("show");
          },4000);
        });


        
        getlist()
          function getlist() {
          $.ajax({
                 type:"get",
                 url:"http://www.ftusix.com/static/data/content.php",
                 // datatype:"text",
                 data: {"user_id":"1","topic_id":"1"},
                 //dataType: "jsonp",
                 success: function(data) {
                  
                  
                 	// var obj = eval("("+data+")");
                 	console.log(data);
                 },
                 error: function (xhr) {
                 	alert(xhr.status);
                 }
          });
          }        
       });
