//Global variables
var date = moment().format('MMMM Do YYYY')
var hour = moment().format('h')
var variabledate = (moment().add(1, 'days').format('MMMM Do YYYY'))

$("#timeFinder").text(date);


// Check if the Local Storage is Empty if True, Write the empty Object if not Load the Existing Elements
    Localstoragevar = localStorage.getItem(date);
    
    if (Localstoragevar !==null){
         ObjectSquema = JSON.parse(Localstoragevar)
    }else{
        ObjectSquema = [ 
            {"date": date,
            "data": [
                    {"time":6,
                    "msg": " "},
                    {"time":7,
                    "msg": " "},
                    {"time":8,
                    "msg": " "},
                    {"time":9,
                    "msg": " "},
                    {"time":10,
                    "msg": " "},
                    {"time":11,
                    "msg": " "},
                    {"time":12,
                    "msg": " "},
                    {"time":13,
                    "msg": " "},
                    {"time":14,
                    "msg": " "},
                    {"time":15,
                    "msg": " "},
                    {"time":16,
                    "msg": " "},
                    {"time":17,
                    "msg": " "},
                    {"time":18,
                    "msg": " "}
                    ]
            }    
        ]
        localStorage.setItem(date.toString(),  JSON.stringify(ObjectSquema));
    }
// Create list of elements to display    
ObjectSquema[0]['data'].forEach(element => {
    var Objtime = element['time']
    var Objmsg= element['msg']
    var lastNumber = $(ObjectSquema).get(-1)
   
    if (Objtime < 12) {
        var timeini = (Objtime + ':00' + " am")
    } else{
        
        var timeini = (Objtime + ':00' + " pm")
    }
   
    elementsdefault = `<li>
    <div id="nodata" class="row time-block">
       <p class="col-md-1 hour">${timeini}</p>
        <textarea data-x="${Objtime}" class="col-md-8 description" placeholder="Write here your activities">${Objmsg}</textarea>
           <button class="col-md-1 btn saveBtn"><i class="glyphicon glyphicon-floppy-disk" style="font-size:36px;"></i></button>
       </div>`
    $("#ulList").append(elementsdefault);
    checktime();
});



// function to check if is past, present or future and add attributes
function checktime(){
    var listItems = $("#ulList li");
listItems.each(function(idx, li) {
    var activity = $(li);
    var datax = $(".description", activity).data('x')
    if (datax == hour){
        $(".description", activity).attr("style", "background-color: #d3d3d3" )
    }
    if (datax < hour){
        $(".description", activity).attr("style", "background-color: #ff6961") 
    }
    if (datax > hour){
        $(".description", activity).attr("style", "background-color: #77dd77")
    }

});
 }

 checktime();


    $("#addTime").click(function(){

        var arraylength = ObjectSquema[0]['data'];
        let offset = 6
        var newtime = (arraylength.length + offset)
        var time = " "
        if (newtime <= 23) {
        if (newtime < 12) {
            time = (newtime + ':00' + ' am');
            ObjectSquema[0]['data'].push({"time":newtime, "msg": " "})
            localStorage.setItem(date.toString(),  JSON.stringify(ObjectSquema));
        } else {
            
            time = (newtime + ':00' + ' pm')
            ObjectSquema[0]['data'].push({"time":newtime, "msg": " "})
            localStorage.setItem(date.toString(),  JSON.stringify(ObjectSquema));
        }

       
        var txt2 = `<li>
        <div id="newItem" class="row time-block">
           <p class="col-md-1 hour">${time}</p>
            <textarea data-x="${newtime}" class="col-md-8 description" placeholder="Write here your activities"></textarea>
               <button class="col-md-1 btn saveBtn"><i class="glyphicon glyphicon-floppy-disk" style="font-size:36px;"></i></button>
           </div>`

        $("#ulList").append(txt2);
        //Scroll down after add the element in the List
        $("html, body").animate({
            scrollTop: $(
              'html, body').get(0).scrollHeight
        }, 100); 
        checktime();
    }
    });

    // Save Button Function
    $(".saveBtn").click(function(){
        var textarea = $(this).siblings(".description").val()
        var id = $(this).siblings(".description").data('x')
        Localstorage = localStorage.getItem(date);
        ObjectSquema = JSON.parse(Localstorage);
         (ObjectSquema[0].data).forEach(element => {
             if (element.time === id){
                 element.msg = textarea;
             }
            }
         )
         
        localStorage.setItem(date.toString(),  JSON.stringify(ObjectSquema));
        //location.reload();
    })


   

    
