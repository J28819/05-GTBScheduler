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

function appendText() {
   var txt2 = $(`<li>
                  <div id="${idrow}" class="row time-block">
                     <p class="col-md-1 hour">6am</p>
                     <textarea class="col-md-8 description" placeholder="Write here your activities"></textarea>
                     <button class="col-md-1 btn saveBtn"><i class="glyphicon glyphicon-floppy-disk" style="font-size:36px;"></i></button>
                  </div>
                 </li>`);   // Create with jQuery

   $("ul").append(txt2);      // Append the new elements 
 }