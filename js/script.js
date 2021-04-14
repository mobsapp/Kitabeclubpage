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

function open_in_new_window(id, new_page_title, features) {
    var new_window;

    if(features !== undefined && features !== '') {
    new_window = window.open('', '_blank', features);
    }
    else {
        new_window = window.open('', '_blank');
    }

    var html_contents = document.getElementById(id);
    if(html_contents !== null) {
        new_window.document.write('<!doctype html><html><head><title>' + new_page_title + '</title><meta charset="UTF-8" /></head><body>' + html_contents.innerHTML + '</body></html>');
    }
}


