"use strict";

// Addons
$('.dropselect').click(() => {
    $(this).toggleClass('is-open');
});
$('[data-toggle="tooltip"]').tooltip();

// Sidebar
$('[data-toggle="sidebar"]').click(() => {
    $("#app").toggleClass('toggled');
});

$('.sidebar-menu').metisMenu({
    // enabled/disable the auto collapse.
    toggle: true,

    // prevent default event
    preventDefault: true,

    // default classes
    activeClass: 'active',
    collapseClass: 'collapse',
    collapseInClass: 'show',
    collapsingClass: 'collapsing',

    // .nav-link for Bootstrap 4
    triggerElement: 'a',

    // .nav-item for Bootstrap 4
    parentTrigger: 'li',

    // .nav.flex-column for Bootstrap 4
    subMenu: 'ul',
});