$(function () {


    var routes = {
        '': homePage,
        '/:id': getInterview
    };

    var router  = Router(routes);
    router.init();

    function getInterview(elementIndex)
    {
        startTransitionToContent(elementIndex);
    }

    function homePage(){
        startTransitionBackToHomePage();
    }

    var currentInterviewContainer;
    var oldScrollPosition;


//    $('#close-content-button').click(function () {
//
//            startTransitionBackToHomePage();
//    });


//    $('.interview-container').click(function () {
//
//
//        //currentInterviewContainer = $(this);
//
//        var elementIndex = $('.interview-container').index($(this));
//        startTransitionToContent(elementIndex);
//    });





    function startTransitionBackToHomePage(){

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


    }
    function startTransitionToContent(elementIndex){

        currentInterviewContainer = $($('.interview-container').get(elementIndex));

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


    }


    var initFacebookSDK = function () {


        window.fbAsyncInit = function() {
            FB.init({
                appId      : '494147450754289',
                xfbml      : true,
                version    : 'v2.4'
            });
        };

        (function(d, s, id){
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {return;}
            js = d.createElement(s); js.id = id;
            js.src = "//connect.facebook.net/en_US/sdk.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));

    }

    initFacebookSDK();



});
