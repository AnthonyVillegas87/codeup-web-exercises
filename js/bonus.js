$(document).ready(() => {
    $('#button1').on('click', (e) => {
       let nextImage = $(e.currentTarget).parent().next().children().first();
       let imageSrc = nextImage.attr('src')
        let thisSrc = $(e.currentTarget).prev().attr('src');
        $(e.currentTarget).prev().attr('src', imageSrc);
        imageSrc.attr('src', thisSrc)
    })
    $('#button2').on('click', (e) => {

    })
    $('#button3').on('click', (e) => {

    })
})