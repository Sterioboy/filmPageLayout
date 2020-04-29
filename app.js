$(document).ready(() => {
    $('#mainBtn').on('click', () => {
        $('#body').fadeOut('fast');
        $('#body1').fadeIn('slow');
    });

    $('#cardBtn').on('click', () => {
        $('#body1').fadeOut('fast');
        $('#body').fadeIn('slow');
    });
})
