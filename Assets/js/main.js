$(function () {

    var currentInterviewContainer;
    var oldScrollPosition;


    $('#close-content-button').click(function () {

        $('.interview-content').removeClass('animate');
        $('#close-content-button').removeClass('animate');
        $('#previews-container').removeClass('no-scroll');

        setTimeout(function() {

            $(window).scrollTop(oldScrollPosition);
            $('.overlay').removeClass('animate');

            setTimeout(function() {

                currentInterviewContainer.removeClass('animate');
                $('.interview-content').html('');

            }, 500);

        }, 500);
    });


    $('.interview-container').click(function () {

        currentInterviewContainer = $(this);

        var elementIndex = $('.interview-container').index($(this));
        var interviewContentID = elementIndex + '.html';
        console.log(interviewContentID);


            $('.interview-content').load(interviewContentID, function () {
                // when finish loading, animate the content
                currentInterviewContainer.addClass('animate');
                setTimeout(function() {

                    $('.overlay').addClass('animate');
                    setTimeout(function() {
                        oldScrollPosition = $(window).scrollTop();
                        $(window).scrollTop(0);
                        $('.interview-content').addClass('animate');

                        $('.interview-content').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
                                                    function(e) {

                            $('#previews-container').addClass('no-scroll');
                            $('#close-content-button').addClass('animate');

                        });
                    }, 700);

                }, 500);

            });

    });


});
