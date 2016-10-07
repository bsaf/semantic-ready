$(document).ready(function() {

// Close message on clicking x
$('.message .close').on('click', function() {
    $(this).closest('.message').transition('fade');
});

});
