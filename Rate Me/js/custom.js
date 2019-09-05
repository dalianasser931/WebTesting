
	/* Search Screen Script */

	btnOpenSearch = $(".search-btn"),
    searchScreenItem = $(".search-screen"),
	closeSearchScreen = $(".close-search");
		
    btnOpenSearch.on("click", function (e) {
        e.preventDefault();
        searchScreenItem.addClass("open");
    });
    closeSearchScreen.on("click", function (e) {
        e.preventDefault();
        searchScreenItem.removeClass("open");
	});
	
	/* Side Menu script */

	btnOpenSideMenu = $(".side-menu-btn"),
    sideMenuItem = $(".side-menu"),
    closeSidebarOverLay = $(".close-menu-sidebar"),
     btnCloseSideMenu = $(".close-side-menu"),
    body = $("body")

    btnOpenSideMenu.on("click", function (e) {
        e.preventDefault();
        sideMenuItem.addClass("open");
        closeSidebarOverLay.addClass("open");
        body.css('overflow', 'hidden');
    });
    
    closeSidebarOverLay.on("click", function (e) {
        e.preventDefault();
        sideMenuItem.removeClass("open");
        closeSidebarOverLay.removeClass("open");
        body.css('overflow', 'auto');
    });
    
    btnCloseSideMenu.on("click", function (e) {
        e.preventDefault();
        sideMenuItem.removeClass("open");
        closeSidebarOverLay.removeClass("open");
        body.css('overflow', 'auto');
	});
