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

 //open popup
    $('.popup-anchor').on('click', function(event){
        var element = $(this); // the li that triggered the modal to show
        // var dynamic_text = element.find('.hexIn').tag(); // Extract the value of the .text div inside that li
var hex_type = element.find('.hexIn').attr('tag');
        
      
        // event.preventDefault();
        // $('#email-popup').addClass('is-visible');
        switch (hex_type) { 
            case '1':
                $('.cid-t42l8YaOiz').hide();
                $("#popupTitle").html("Book Meet");
                $('#hexDesc').html("We choose a 'Book Of The Month(BOTM)' every month. There are options such as basic reads for beginners and Power read for avid readers,  in various genres or with a specific country in mind. Members choose what they want to read. We gather on the first Saturday of each month to discuss the book and share our thoughts on it.");
                $('#hexImg').show();
                $('#hexImg').attr("src","assets/meet/photocollage.avif")
                $('#hexLive').hide(); 
                $('#hexButton').show();
                $('#hexButton').html("List of BOTMs") 
                $('#hexButton').attr("href", "booklist.html") 
                break;
                case '2':
                    $('.cid-t42l8YaOiz').hide();
                $("#popupTitle").html("Be Inspired Or Be An Inspirer Series");
                $('#hexDesc').html("As parents, caretakers, relatives the finest present we can give to our children is our time and attention.<p>We want to encourage children to read since it opens doors to so many possibilities. As a result, we started a video series with parents reading to their children.</p>");
                $('#hexImg').show();
                $('#hexImg').attr("src","assets/meet/inspirer.avif")
                $('#hexLive').hide(); 
                $('#hexButton').hide();
                break;
                case '3':
                    $('.cid-t42l8YaOiz').hide();
                $("#popupTitle").html("Crafty with Books");
                $('#hexDesc').html("Every club meeting is either entertaining or inspiring. We aim to make it beneficial for our members as well as book discussion. Bringing creativity around is one such initiative. Where members can spend some time or express their creativity.");
                $('#hexImg').show();
                $('#hexImg').attr("src","assets/meet/crafty.avif")
                $('#hexLive').hide(); 
                $('#hexButton').hide(); 
                
                break;
                case '4':
                    $('.cid-t42l8YaOiz').hide();
                $("#popupTitle").html("Power Speakers Series");
                $('#hexDesc').html("Every club meeting is either entertaining or inspiring. We aim to make it beneficial for our members as well as book discussion. Power Speakers is one such endeavour. A guest is invited to share their own personal power tale.");
                $('#hexImg').show();
                $('#hexImg').attr("src","assets/meet/powerspeaker.avif")
                $('#hexLive').hide(); 
                $('#hexButton').hide();  
                
                break;
                case '5':
                    $('.cid-t42l8YaOiz').hide();
                $("#popupTitle").html("Zoom Webinars");
                $('#hexDesc').html("We didn't stop reading and discussing books even during the pandemic.Through our Zoom online meetings, we now continue our bookish discussions from the comfort of our own homes.");
                $('#hexImg').show();
                $('#hexImg').attr("src","assets/meet/zoommeet.avif")
                $('#hexLive').hide(); 
                $('#hexButton').hide();
                break;
                case '6':
                    $('.cid-t42l8YaOiz').hide();
                $("#popupTitle").html("Live with Renowned Personalities");
                $('#hexDesc').html("We are proud of hosting speakers, filled with motivation and inspiration. They have the experience of being an author, and they share that passion to read book. We have a great group of speakers and we are constantly adding more to our wall of fame.");
                $('#hexImg').hide();
                $('#hexLive').show(); 
                $('#hexButton').show();
                $('#hexButton').html("Way To Wall Of Authors") 
                $('#hexButton').attr("href", "speakers.html")             
                break;
                case '7':
                    $('.cid-t42l8YaOiz').hide();
                $("#popupTitle").html("Dictionary Distribution");
                $('#hexDesc').html("Everyone should read a book. We believe in this and have started a dictionary distribution programme for underprivileged children.");
                $('#hexImg').show();
                $('#hexImg').attr("src","assets/meet/Dictionary.avif")
                $('#hexLive').hide(); 
                $('#hexButton').hide();
                break;
                case '8':
                    $('.cid-t42l8YaOiz').hide();
                $("#popupTitle").html("Book Donation");
                $('#hexDesc').html("Sometimes in life, you understand the joyofgiving.<p>We, through @kitabeclub and it’s members donated close to 100 books to Shivaji Maharaj PCMC School,for building their school library.</p>");
                $('#hexImg').show();
                $('#hexImg').attr("src","assets/meet/bookdonation.avif")
                $('#hexLive').hide(); 
                $('#hexButton').hide();
                break;
                case '9':
                $("#popupTitle").html( "Social media presence");
                $('.cid-t42l8YaOiz').show();
                $('#hexDesc').hide();
                $('#hexLive').hide(); 
                $('#hexButton').hide();
                $('#hexImg').hide();
                break;
        }

    });



