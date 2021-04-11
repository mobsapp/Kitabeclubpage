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

         $(function() {
            $('#tomission').click (function() {
              $('html, body').animate({scrollTop: $('section.content10').offset().top }, 'slow');
              return false;
            });
          });

           $(function() {
                      $('#tocontact').click (function() {
                        $('html, body').animate({scrollTop: $('section.info3').offset().top }, 'slow');
                        return false;
                      });
                    });

          $(function() {
                      $('#tovideo').click (function() {
                        $('html, body').animate({scrollTop: $('section.header17').offset().top }, 'slow');
                        return false;
                      });
                    });

                    $(function() {
                                          $('#tomembers').click (function() {
                                            $('html, body').animate({scrollTop: $('section.testimonails3').offset().top }, 'slow');
                                            return false;
                                          });
                                        });

 $(function() {
                                          $('#toactivity').click (function() {
                                            $('html, body').animate({scrollTop: $('section.toactivity').offset().top }, 'slow');
                                            return false;
                                          });
                                        });

$(function() {
                                          $('#tovideos').click (function() {
                                            $('html, body').animate({scrollTop: $('#speakervideos').offset().top }, 'slow');
                                            return false;
                                          });
                                        });

 $(function() {
            $('#toawards').click (function() {
              $('html, body').animate({scrollTop: $('#features12-3q').offset().top }, 'slow');
              return false;
            });
          });

 $(function() {
            $('#tospeakers').click (function() {
              $('html, body').animate({scrollTop: $('#speaker').offset().top }, 'slow');
              return false;
            });
          });