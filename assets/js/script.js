$(document).ready(function () {
    $('select').styler();
    $(".phone").mask('+7 (999)-999-99-99');
});

$(document).ready(function () {
    var time = 0;
    $('.open-menu').on('click', function () {
        $(this).toggleClass('close-menu');
        if (window.innerHeight < 380) {
        }
        if ($(this).hasClass('close-menu')) {
            $('.menu-cnt').addClass('transition-menu');
            $('.menu-header-mobile').css({'width': '100%', transition: '0.3s'});
            $('body').addClass('body_fix');
        } else {
            $('.menu-cnt').addClass('menu-width');
            $('body').removeClass('body_fix');
            $('.menu-cnt').removeClass('transition-menu');
            time = 0;
        }

    });
    $('.for-mobile-bg').on('click', function () {
        if ($('.open-menu').hasClass('close-menu')) {
            $('.open-menu').removeClass('close-menu')
        }
        $('.menu-cnt').removeClass('transition-menu');
        $('.menu-cnt').css({width: '0%!important'});
        $('body').removeClass('body_fix');
        time = 0;
    })
});
if ($('.sidenav>ul li').has('submenu-drop')) {
    $('.submenu__head').parent().addClass('submenu__active');
}

$(document).ready(function () {
    $('.search-block').on('click', function (e) {
        $(this).toggleClass('open-search');
        openSearchMenu(this, 'search-box');
        e.stopPropagation();
    });
    $('.search-box').on('click', function (e) {
        e.stopPropagation();
    });

    function openSearchMenu($this, search_box) {
        let search_block = $($this).find('.' + search_box);
        $(search_block).slideToggle(400);
    }

    $(document).on('click', function () {
        $('.search-box').slideUp();
        $('.search-block').removeClass('open-search')
    });
    $('.close-input-search').on('click', function () {
        $('.search-box').slideUp();
        $('.search-block').removeClass('open-search')
    })
});


$('.open_modal').on('click', function (e) {
    $('body').css({"overflow": "hidden"});
    var attr = $(this).attr('data-val');
    var modal = $('#' + attr);
    let isCopyText = $(this).attr('data-is-copy-text');
    if (isCopyText) {
        $('.add-text-btn')[0].innerText = $(this)[0].innerText;
    }
    modal.removeClass('out');
    modal.fadeIn();
    e.stopPropagation()
});
$('.close').on('click', function () {
    $('body').css({"overflow": "unset"});
    var prt = $(this).parents('.modal');
    prt.addClass('out')
    setTimeout(function () {
        prt.fadeOut();
    }, 100);
});
$(window).on('click', function (event) {
    $('body').css({"overflow": "unset"});
    $('.modal').each(function () {
        var gtattr = $(this).attr('id');
        var new_mod = $('#' + gtattr);
        var md_cnt = $(new_mod).find('.modal-content');
        $('body').removeClass('body__fix');
        if (event.target === $(md_cnt)[0]) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
        }
        if (event.target === this) {
            setTimeout(function () {
                $(new_mod).addClass('out');
                $(new_mod).fadeOut()
            }, 100)
        }
    })
});


var swiper = new Swiper(".avintage-swiper", {
    slidesPerView: 1,
    slidesPerGroup: 1,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        }
    },
    navigation: {
        nextEl: ".clients-button-next",
        prevEl: ".clients-button-prev",
    },
});



var swiperSphinx = new Swiper(".sphinx-small-slid", {
    spaceBetween: 5,
    slidesPerView: 5,
    freeMode: true,
    loop: true,
    watchSlidesProgress: true,
    breakpoints: {
        '1299': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
        '1170': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 5,

        },
        '991': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 5,

        },
        '767': {
            slidesPerView: 5,
            slidesPerGroup: 1,
            spaceBetween: 5,
        },
        '370': {
            slidesPerView: 4,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 3,
            slidesPerGroup: 1,
        },

    },
    navigation: {
        nextEl: ".sphinx-slid-next",
        prevEl: ".sphinx-slid-prev",
    },
});
var swiperSphinx2 = new Swiper(".sphinx-photo-slid", {
    slidesPerView: 1,
    spaceBetween: 5,
    loop: true,
    thumbs: {
        swiper: swiperSphinx,
    },
});


$(document).ready(function () {
    $('.increment').on('click', incrementsVal);
    $('.decrement').on('click', decrementVal);
    function incrementsVal() {
        var parent_val = $(this).parents('.add-catalog-for-shop');
        var input_val = $(parent_val).find('input[type=text]').val();
        input_val++;
        $(parent_val).find('input[type=text]').val(input_val)
    }
    function decrementVal() {
        var parent_val = $(this).parents('.add-catalog-for-shop');
        var input_val = $(parent_val).find('input[type=text]').val();
        input_val--;
        if (input_val <= 1) {
            $(parent_val).find('input[type=text]').val('1')
        } else {
            $(parent_val).find('input[type=text]').val(input_val)
        }
    }
});


var descswiper = new Swiper(".descr-slider", {
    slidesPerView: 3,
    slidesPerGroup: 1,
    spaceBetween: 10,
    loop: true,
    breakpoints: {
        '1199': {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,

        },
        '760': {
            slidesPerView: 2,
            slidesPerGroup: 1,
        },
        '370': {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        '320': {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    },
    navigation: {
        nextEl: ".descr-button-next",
        prevEl: ".descr-button-prev",
    },
});


$(document).ready(function () {
    addActiveClass('new-min-text-hrefs', 'new-active-href');
    changeCaseBlock(this, 'new-min-text-hrefs', 'new-min-info', 'new-active-href', 'new-click-reviews');

    $('.new-click-reviews').on('click', function () {
        changeActiveClassWithClick(this, 'new-min-text-hrefs', 'new-active-href')
        changeCaseBlock(this, 'new-min-text-hrefs', 'new-min-info', 'new-active-href', 'new-click-reviews');
    })

    function addActiveClass(parent_menu, active_class) {
        var prt = $('.' + parent_menu);
        var prt_childrens = $(prt).children();
        var prt_child_li = $(prt_childrens).children();
        var first_child = $(prt_child_li)[0]
        if (!$(first_child).hasClass(active_class)) {
            !$(first_child).addClass(active_class)
        }
    }

    function changeActiveClassWithClick($this, parent_block, active_class) {
        var prt = $($this).parents('.' + parent_block);
        var prt_child = $(prt).find('li');
        $(prt_child).each(function () {
            $(this).removeClass(active_class);
        })
        $($this).addClass(active_class);
    }

    //   change case block with click  case menu
    function changeCaseBlock($this, case_menu, case_block, active_class, menu_link) {
        var case_menu_block = $('.' + case_menu);
        var case_block_sub = $('.' + case_block);
        var case_block_child = $(case_block_sub).children();
        $(case_block_child).each(function () {
            $(this).css({display: 'none', height: 0});
        })

        if ($($this).hasClass(menu_link)) {
            var this_attr = $($this).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == this_attr) {
                    $(this).css({display: 'block', height: 'auto'});
                }
            })

        } else {
            var active_find = $(case_menu_block).find('.' + active_class);
            var active_find_attr = $(active_find).attr('data-catalog');
            $(case_block_child).each(function () {
                if ($(this).attr('data-catalog') == active_find_attr) {
                    $(this).css({display: 'block', height: 'auto'});

                }
            })
        }
    }

});


$(function () {
    var Accordion = function (el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var links = this.el.find('.link');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    };
    Accordion.prototype.dropdown = function (e) {
        var $el = e.data.el;
        $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (e.data.multiple) {
            $el.find('.submenu').not($next).slideUp();
        }
        if (!$this.hasClass('open')) {
            $('.link').each(function () {
                $(this).removeClass('open')
            })
            $this.addClass('open')
        } else {
            $this.removeClass('open')
        }
    }
    var accordion = new Accordion($('#accordion'), false);
});



$('.catalog-filter').on('click',function (){
   $('.catalog-aps').toggleClass("catalog-aps__none")
});