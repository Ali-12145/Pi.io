$(".item-icon").on("click", function showSideBar() {
    $(".nav-bar-mob").css("display", "flex");
    $(".item-icon").css("display", "none");

});

$(".closebtn").on("click", function hideSideBar() {
    $(".nav-bar-mob").css("display", "none");
});