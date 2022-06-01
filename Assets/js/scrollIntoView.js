var lastScrollTop = 0;
window.scrollTo(300, 500);	//X=300 and Y=500
var element = document.querySelector("#scroll1");
// element should be replaced with the actual target element on which you have applied scroll, use window in case of no target element.
element.addEventListener("scroll", function(){ // or window.addEventListener("scroll"....
   var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
   console.log("scrolling")
   
   if (st > lastScrollTop){
      // downscroll code
      console.log("scrolling down")
   } else {
      // upscroll code
      console.log("scrolling up")
   }
   lastScrollTop = st <= 0 ? 0 : st; // For Mobile or negative scrolling
}, false);

//const list = document.getElementById("list");

//list.innerHTML += `<li><a href="#">Item ${list.children.length + 1}</a></li>`;