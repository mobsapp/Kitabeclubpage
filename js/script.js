 $(document).ready(function() {
            var url = $("#kbvideo").attr('src');
            $("#videodiv").on('hide.bs.modal', function() {
                $("#kbvideo").attr('src', '');
            });
            $("#videodiv").on('show.bs.modal', function() {
            $("#videodiv").css("display","table");
                $("#kbvideo").attr('src', url);
            });
        });


sections=$("section");
s=1;

if(s==1){
$(".adown").css("display", "inline-block");
 $(".aup").css("display", "none");
}

$(".adown").click(function() {
if(s<sections.length-1){
++s;
console.log(s+"  down");
$('html, body').animate({
   scrollTop: sections.eq(s+1).offset().top
}, 500);

}else{
$(".aup").css("display", "inline-block");
$(".adown").css("display", "none");
}

});

$(".aup").click(function() {
if(s>1){
--s;
console.log(s+"  up");
$('html, body').animate({
   scrollTop: sections.eq(s-1).offset().top
}, 500);
}else{
 $(".adown").css("display", "inline-block");
 $(".aup").css("display", "none");
 }
});


window.onscroll = function(ev) {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {

        $(".aup").css("display", "inline-block");
        $(".adown").css("display", "none");
        s=sections.length;
    }else  if (window.scrollY==0) {

                  $(".adown").css("display", "inline-block");
                  $(".aup").css("display", "none");
                  s=1;
              }
};


