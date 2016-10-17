function myFunction(){
    //console.log('Hello');
   // $("div#output").text("Hello");
    var str = $("#input").val();
    $("#output").text(str);    
}
$("#test").bind('click',myFunction);
function myFunction1(){
    console.log('ByeBye');
    $("div#output1").text("ByeBye");
}