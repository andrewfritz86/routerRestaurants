console.log("router linked")


var routes = {
    "/about": aboutMe,
    "/menus/new": renderPostForm,
    "/menus": fetchAllMenus,
    "/menus/:id": fetchOne,
}


var router = Router(routes);

router.init();