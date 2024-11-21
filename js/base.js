$(document).ready(function(){
    $("#toggleBtn").click(function(){
        $(".navbar").toggleClass("collapsed"); 
        
        var icon = $(this).find("i");
        if ($(".navbar").hasClass("collapsed")) {
            icon.removeClass("fa-chevron-left").addClass("fa-chevron-right");
            $(this).text("Mở Rộng");
        } else {
            icon.removeClass("fa-chevron-right").addClass("fa-chevron-left");
            $(this).text("Thu gọn");
        }
    });
});
