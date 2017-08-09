document.addEventListener('DOMContentLoaded', function() {
    const moving__background = document.querySelector('#header__background');
    const parallax__img = moving__background.getAttribute('data-image');
    const parallaxOffset = moving__background.offsetHeight;

    // Set parallax image as background.
    if ( parallax__img ) {
    	moving__background.style.backgroundImage = "url('" + parallax__img +"')";
    }
 
 	// Bind scroll event
    window.addEventListener( 'scroll', function() {
        this.ParallaxAnimation( moving__background );
    }.bind(this));

	this.ParallaxAnimation = function( el ) {
	    let scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;

	    if (scrollTop <= parallaxOffset) {
		    el.style.marginTop = (scrollTop / 3) + 'px';
		    el.style.opacity = (1 - scrollTop / el.offsetHeight );
	    }
	};
});
