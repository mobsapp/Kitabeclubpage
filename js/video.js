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
