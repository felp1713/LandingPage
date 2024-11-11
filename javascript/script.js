document.addEventListener('DOMContentLoaded', function() {
    const closeBtn = $('#close-btn');
    const rightOffcanvas = $('#rightOffcanvas');
    const btnOpenOffcanvas  = $('#btnOpenOffcanvas');
    const backdrop = $('#backdrop');
    const offCanvaList = $('#offCanvaList')

    function openMenuOffcanvas() {
        rightOffcanvas.removeClass('translate-x-full').addClass('translate-x-0');
        backdrop.removeClass('hidden');

        setTimeout(() => {
            backdrop.removeClass('max-md:opacity-0').addClass('max-md:opacity-50');
            offCanvaList.removeClass('translate-y-full').addClass('translate-y-0');
        }, 200);
    }

    function closeMenuOffcanvas() {
        rightOffcanvas.addClass('translate-x-full').removeClass('translate-x-0');
        backdrop.removeClass('max-md:opacity-50').addClass('max-md:opacity-0');
        offCanvaList.addClass('translate-y-full').removeClass('translate-y-0');


        setTimeout(() => {
            backdrop.addClass('hidden');
        }, 300);
    }

    btnOpenOffcanvas.on('click', function(){
        openMenuOffcanvas()
    });

    closeBtn.on('click', function(){
        closeMenuOffcanvas();
    });

});
