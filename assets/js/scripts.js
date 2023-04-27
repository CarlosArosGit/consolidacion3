$( document ).ready(function() {
  $("#id__msj_1").css("display", "none");
  $("#id__msj_2").css("display", "none");
  $("#id__msj_3").css("display", "none");
  $("#id__msj_4").css("display", "none");
  $("#id__msj_5").css("display", "none");
  $("#id__msj_6").css("display", "none");

  $("#idInputGeneral").css("display", "none");
  
  $("#nav_movil").click(function(){
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  });

  $("#id__chat__tamara").click(function(){
    $("#id__msj_1").css("display", "block");
    $("#id__msj_2").css("display", "none");
    $("#id__msj_3").css("display", "none");
    $("#id__msj_4").css("display", "none");
    $("#id__msj_5").css("display", "none");
    $("#id__msj_6").css("display", "none");
    $("#idInputGeneral").css("display", "block");
  });

  $("#id__chat__juan").click(function(){
    $("#id__msj_2").css("display", "block");
    $("#id__msj_1").css("display", "none");
    $("#id__msj_3").css("display", "none");
    $("#id__msj_4").css("display", "none");
    $("#id__msj_5").css("display", "none");
    $("#id__msj_6").css("display", "none");
    $("#juan").removeClass("principal__izquierda__info--sinLeer");
    $("#juan").addClass("principal__izquierda__info--leer");
    $("#idInputGeneral").css("display", "block");
  });
  
  $("#id__chat__matias").click(function(){
    $("#id__msj_3").css("display", "block");
    $("#id__msj_1").css("display", "none");
    $("#id__msj_2").css("display", "none");
    $("#id__msj_4").css("display", "none");
    $("#id__msj_5").css("display", "none");
    $("#id__msj_6").css("display", "none");
    $("#idInputGeneral").css("display", "block");
  });
  $("#id__chat__carlos").click(function(){
    $("#id__msj_1").css("display", "none");
    $("#id__msj_2").css("display", "none");
    $("#id__msj_3").css("display", "none");
    $("#id__msj_4").css("display", "block");
    $("#id__msj_5").css("display", "none");
    $("#id__msj_6").css("display", "none");
    $("#idInputGeneral").css("display", "block");
  });

  $("#id__chat__profe").click(function(){
    $("#id__msj_2").css("display", "none");
    $("#id__msj_1").css("display", "none");
    $("#id__msj_3").css("display", "none");
    $("#id__msj_4").css("display", "none");
    $("#id__msj_5").css("display", "block");
    $("#id__msj_6").css("display", "none");
    $("#idInputGeneral").css("display", "block");
  });
  
  $("#id__chat__camila").click(function(){
    $("#id__msj_3").css("display", "none");
    $("#id__msj_1").css("display", "none");
    $("#id__msj_2").css("display", "none");
    $("#id__msj_4").css("display", "none");
    $("#id__msj_5").css("display", "none");
    $("#id__msj_6").css("display", "block");
    $("#camila").removeClass("principal__izquierda__info--sinLeer");
    $("#camila").addClass("principal__izquierda__info--leer");
    $("#idInputGeneral").css("display", "block");
  });

  $("#btnChats").click(function(){
    $("#principal__izquierda__chats").removeClass("principal__izquierda__chats");  
    $("#principal__izquierda__chats").addClass("visibleChats");
    $("#btnChatsOcultar").css("display", "block");
    $("#btnChats").css("display", "none");
  });

  $("#btnChatsOcultar").click(function(){
    $("#principal__izquierda__chats").removeClass("visibleChats");  
    $("#principal__izquierda__chats").addClass("principal__izquierda__chats");
    $("#btnChatsOcultar").css("display", "none");
    $("#btnChats").css("display", "block");
  });
});
