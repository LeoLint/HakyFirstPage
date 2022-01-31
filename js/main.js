$(document).ready(() => {
    $('.about_wrapper-button').click(() => {
        $('.about_toggle-paragraph').toggle('open');
    })
    $('.mobile_button').click(() => {
        $('.menu').toggle('.slide');
    })
    $('.buttonStyle').click(() => {
        $('.mobile_button').toggleClass('.open');
    })
    $('#aboutUs').click(function() {
        $('html, body').animate({
            scrollTop: $('.about').offset().top
        }, 700);
    });
    $('#news').click(function() {
        $('html, body').animate({
            scrollTop: $('.news').offset().top
        }, 700);
    });
    $('#vacancies').click(function() {
        $('html, body').animate({
            scrollTop: $('.vacancies').offset().top
        }, 700);
    });
    $('#feedback').click(function() {
        $('html, body').animate({
            scrollTop: $('.feedback').offset().top
        }, 1000);
    });
    $('#moreVacansiesButton').click(() => {
        $('.wrapper').toggle('.open');
        alert('Наши вакансии меняются периодически, следите за обновлениями')
    })
});
