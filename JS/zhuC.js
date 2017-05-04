
var geren=document.getElementById('geren');
var qiye=document.getElementById('qiye');
var gr=document.getElementById('gr');
var qy=document.getElementById('qy');


geren.onclick=function (){
    gr.style.display="block";
    qy.style.display="none";
};

document.getElementById("but").onclick=function(){
    if($("#yongh").val()=="" || $("#yongh").val()=="undefined"){
        alert("用户名称不能为空");
       return false;

    }; if($("#mima").val()=="" || $("#mima").val()=="undefined"){
       alert("密码不能为空");
       return false;
   };
    if($("#queren").val()=="" || $("#queren").val()=="undefined"){
        alert("确认不能为空");
        return false;
     }else if($("#queren").val()!==$("#mima").val()){
         alert("确认密码不匹配,请重新输入!");
        return false;
     };

   if($("#dian_z").val()=="" || $("#dian_z").val()=="undefined"){ alert("电子邮箱不能为空");
       return false;
   };
   if($("#shou_j").val()=="" || $("#shou_j").val()=="undefined"){ alert("手机号码不能为空");
      return false;
   };

};








