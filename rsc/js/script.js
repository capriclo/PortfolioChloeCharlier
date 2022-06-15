$.fn.typewriter = function (opt) {
    var typeone = function (self, text, content) {
        if (text.length > 0) {
            var next = text.match(/(\s*(<[^>]*>)?)*(&.*?;|.?)/)[0];
            text = text.substr(next.length);
            $(self).html(content + next);
            setTimeout(function () {
                typeone(self, text, content + next);
            }, opt['delay']);
        }
    }
    this.each(function () {
        opt = opt || {
         };

        if($(this).width() > 0 && $(this).height() > 0){
            $(this).height($(this).height());
            $(this).width($(this).width());
            typeone(this, $(this).html(), '');
        }

    });
}


function animations(){
	$(".typewriter").typewriter();
    $(".percentage").each(function () {
        var width = $(this).attr("percentage");
        console.log($(this).width()+" "+$(this).height());
		if($(this).height() > 0){
            console.log(width);
			$(this).css("width", width).empty();
			$(this)
				.data("origWidth", $(this).width())
				.width(0)
				.animate({
					width: $(this).data("origWidth")
				}, 5000);
		}
    });
}
	
	
$(document).ready( function() {
   
	animations();

	//Langues
	$( ".english" ).click(function() {
		$(".lg_francais").fadeOut().promise().done(function(){
            $(".lg_anglais").fadeIn(1000);
            animations();
        });
	});
	
	$( ".francais" ).click(function(){
        $(".lg_anglais").fadeOut().promise().done(function(){
            $(".lg_francais").fadeIn(1000);
            animations();
        });
	});


})
	
	

	