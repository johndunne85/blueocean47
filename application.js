function johnFunction(){
  $("#content").hide();
  var x = document.getElementById("john");
          x.style.display = "block";
}

function landbot(){
  $("#content").hide();
  var myLandbot = new Landbot.Fullpage({
    configUrl: 'https://chats.landbot.io/v3/H-1090799-BMAAIVCQMLY44QCM/index.json',
  });
}
function backHome(){
  $("#content").show();
  var x = document.getElementById("john");
          x.style.display = "none";
}
