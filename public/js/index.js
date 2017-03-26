var bodyEl;
var sidedrawerEl;

$(document).ready(function() {
    bodyEl = $('body'),
    sidedrawerEl = $('#sidedrawer');

    $('.js-show-sidedrawer').on('click', showSidedrawer);
    $('.js-hide-sidedrawer').on('click', hideSidedrawer);
});

function showSidedrawer() {
    // show overlay
    var options = {
        onclose: function() {
            sidedrawerEl
            .removeClass('active')
            .appendTo(document.body);
        }
    };

    var overlayEl = $(mui.overlay('on', options));

    // show element
    sidedrawerEl.appendTo(overlayEl);
    setTimeout(function() {
        sidedrawerEl.addClass('active');
    }, 20);
}


function hideSidedrawer() {
    bodyEl.toggleClass('hide-sidedrawer');
}
