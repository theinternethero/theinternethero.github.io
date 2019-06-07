(function($) { "use strict";

  //Page cursors
  document.getElementsByTagName("body")[0].addEventListener("mousemove", function(n) {
    t.style.left = n.clientX + "px",
    t.style.top = n.clientY + "px",
    e.style.left = n.clientX + "px",
    e.style.top = n.clientY + "px",
    i.style.left = n.clientX + "px",
    i.style.top = n.clientY + "px"
  });
  var t = document.getElementById("cursor"),
      e = document.getElementById("cursor2"),
      i = document.getElementById("cursor3");
  function n(t) {
    e.classList.add("hover"), i.classList.add("hover")
  }
  function s(t) {
    e.classList.remove("hover"), i.classList.remove("hover")
  }
  s();
  for (var r = document.querySelectorAll(".hover-target"), a = r.length - 1; a >= 0; a--) {
    o(r[a])
  }
  function o(t) {
    t.addEventListener("mouseover", n), t.addEventListener("mouseout", s)
  }

  $(document).ready(function() {

    /* Hero Case study images */
    $('.case-study-name:nth-child(1)').on('mouseenter', function() {
      $('.case-study-name.active').removeClass('active');
      $('.case-study-images li.show').removeClass("show");
      $('.case-study-images li:nth-child(1)').addClass("show");
      $('.case-study-name:nth-child(1)').addClass('active');
    })
    $('.case-study-name:nth-child(2)').on('mouseenter', function() {
      $('.case-study-name.active').removeClass('active');
      $('.case-study-images li.show').removeClass("show");
      $('.case-study-images li:nth-child(2)').addClass("show");
      $('.case-study-name:nth-child(2)').addClass('active');
    })
    $('.case-study-name:nth-child(3)').on('mouseenter', function() {
      $('.case-study-name.active').removeClass('active');
      $('.case-study-images li.show').removeClass("show");
      $('.case-study-images li:nth-child(3)').addClass("show");
      $('.case-study-name:nth-child(3)').addClass('active');
    })
    $('.case-study-name:nth-child(4)').on('mouseenter', function() {
      $('.case-study-name.active').removeClass('active');
      $('.case-study-images li.show').removeClass("show");
      $('.case-study-images li:nth-child(4)').addClass("show");
      $('.case-study-name:nth-child(4)').addClass('active');
    })
    $('.case-study-name:nth-child(1)').trigger('mouseenter')
  });

  // Parallax
  function parallax(event) {
      this.querySelectorAll(".layer").forEach(layer => {
        let speed = layer.getAttribute("data-speed");
        layer.style.transform = `translateX(${event.clientX*speed/900}px)`;
      });
  }
  document.addEventListener("mousemove", parallax);

  // Mobile Parallax
  window.addEventListener('DOMContentLoaded', function() {
    this.addEventListener('touchmove', function(e) {
      document.querySelectorAll(".layer").forEach(layer => {
        let speed = layer.getAttribute("data-speed");
        layer.style.transform = `translateX(${e.touches[0].pageX*speed/500}px)`;
      });
    });

    // Сбрасывает при отпускании пальцам с пов-ти экрана:
    // this.addEventListener('touchend', function(e) {
    //   document.querySelectorAll(".layer").forEach(layer => {
    //     layer.style.transform = `translateX(0px)`;
    //   });
    // });
  });

  // Glitch
  const gsTitle = {
    init() {
      this._root = document.querySelector( "#gsTitle" );
      this._titles = this._root.querySelectorAll( ".gsTitle-title" );
      this._frame = this._frame.bind( this );
      this.setTexts( [
        "THEINTERNETHERO",
        "hELLO wORLD .",
        "ɥǝ˥˥0 M0ᴚ˥p ¡",
        "µΞ11Θ ∑θrld ¡",
        "こんにちは 世界国地球 ¡",
      ] );
    },
    on() {
      if ( !this._frameId ) {
        this._frame();
      }
    },
    off() {
      clearTimeout( this._frameId );
      this._textContent( this._text );
      delete this._frameId;
    },
    setTexts( [ text, ...alt ] ) {
      this._text = text;
      this._textAlt = alt;
    },

    // private:
    _text: "",
    _textAlt: [],
    _rand( n ) {
      return Math.random() * n | 0;
    },
    _textContent( txt ) {
      this._titles.forEach( el => el.textContent = txt );
    },
    _frame() {
      const txt = Array.from( this._text );

      for ( let i = 0; i < 6; ++i ) {
        const ind = this._rand( this._text.length );

        txt[ ind ] = this._textAlt[ this._rand( this._textAlt.length ) ][ ind ];
      }
      this._textContent( txt.join( "" ) );
      this._root.classList.add( "gsTitle-glitched" );
      setTimeout( () => {
        this._textContent( this._text );
        this._root.classList.remove( "gsTitle-glitched" );
      }, 50 + Math.random() * 200 );
      this._frameId = setTimeout( this._frame, 250 + Math.random() * 500 );
    },
  };

  gsTitle.init();
  gsTitle.on();
})(jQuery);
