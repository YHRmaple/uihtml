$(function(){
    var PutDowm = function(el,tag){
        var _this_ = this
        this.el = el || {};
        this.tag = tag || false;
        var link = this.el.find('.link');
        link.on('click',{el:this.el,tag:this.tag},this.dropDown)
        console.log(link);
    }
    PutDowm.prototype = {
        dropDown:function(e){
            var $el = e.data.el,
            $tag = e.data.tag,
            $this = $(this),
            $next = $this.next();
            console.log($next);

            $next.slideToggle();
            $this.parent().toggleClass('open');
                if(!$tag){
                    $el.find('.desc').not($next).slideUp().parent().removeClass('open');
                }
        }
    }
    var putdown = new PutDowm($('.container'),false);
})