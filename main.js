(function(e) {
	setInterval(function flutter() {
        var times += 1;
        var num +=5;
        $("snake").css("left","num");
        if(times == 60){
            return;
        }
    }, 2);
})(jQuery, window, document);