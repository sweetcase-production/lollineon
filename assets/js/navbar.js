$(() => {
    const LIGHT_ICON_CLASS = 'bi-brightness-high-fill';
    const DARK_ICON_CLASS = 'bi-moon-stars-fill';
    const getCurrentIconClass = () => getTheme() === MODE.DARK ? DARK_ICON_CLASS : LIGHT_ICON_CLASS;

    (() => {
        $('#navbar-mode-selector').addClass(getCurrentIconClass);
    })();
    

    $('#navbar-mode-selector').click(() => {
        const nextTheme = getTheme() === MODE.DARK ? MODE.LIGHT : MODE.DARK;
        const prevIconClass = getCurrentIconClass();
        setTheme(nextTheme);

        const icon = $('#navbar-mode-selector');
        icon.removeClass(prevIconClass);
        icon.addClass(getCurrentIconClass());
    });

    $('#navbar-menu-button').click(() => {
        const leftSideBar = $('#left-side-bar');
        if (leftSideBar.hasClass('hidden')) {
            leftSideBar.removeClass('hidden');
        } else {
            leftSideBar.addClass('hidden');
        }
    });
});