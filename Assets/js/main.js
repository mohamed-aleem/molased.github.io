$(function () {

    var currentInterviewContainer;


    $('#close-content-button').click(function () {

        $('.interview-content').removeClass('animate');
        $('#previews-container').removeClass('no-scroll');

        setTimeout(function() {
            currentInterviewContainer.removeClass('animate');
            $('.interview-content').html('');
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
                        $('.interview-content').addClass('animate');

                        $('.interview-content').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend',
                                  function(e) {

                            $('#previews-container').addClass('no-scroll');

                        });



                    }, 500);


        });

    });


});
