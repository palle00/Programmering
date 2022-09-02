function OpenSlideBar()
{
    document.getElementById("side-menu").style.width = "250px";
    document.getElementById("open").style.width = "0px"
}

function CloseSlideBar()
{
    document.getElementById("side-menu").style.width = "0px";
    document.getElementById("open").style.width = "40px"
}



window.onscroll = function() {scrollFunction()};

var scrollcap = 20;

function scrollFunction() {
  if (document.body.scrollTop > scrollcap || document.documentElement.scrollTop > scrollcap) {
    document.getElementById("top").style.fontSize = "18px";
    document.getElementById("top").style.bottom = "20px";
    document.getElementById("top").style.right = "30px";
    
  } else {
    document.getElementById("top").style.fontSize = "0px";
    document.getElementById("top").style.bottom = "-30px";
    document.getElementById("top").style.right = "-30px";
top
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}