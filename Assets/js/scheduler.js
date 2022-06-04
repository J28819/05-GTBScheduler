//var date = moment().format('MMMM Do YYYY, h:mm:ss a')
var date = moment().format('MMMM Do YYYY')
var hour = moment().format('h')
$("#timeFinder").val(date);

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


$(document)

ObjectSquema[0]['data'].forEach(element => {
    var Objtime = element['time']

    var lastNumber = $(ObjectSquema).get(-1)
    console.log(lastNumber)
    if (Objtime < 12) {
        var timeini = moment().format(Objtime + ':00 a')
    } else{
        var timeini = moment().format(Objtime + ':00 a')
    }
    
    elementsdefault = `<li>
    <div id="newItem" class="row time-block">
       <p class="col-md-1 hour">${timeini}</p>
        <textarea class="col-md-8 description" placeholder="Write here your activities"></textarea>
           <button class="col-md-1 btn saveBtn"><i class="glyphicon glyphicon-floppy-disk" style="font-size:36px;"></i></button>
       </div>`
    $("#ulList").append(elementsdefault);
});

console.log(ObjectSquema)
// Adding Overtime blocks to the list
    $("#addTime").click(function(){

        var arraylength = ObjectSquema[0]['data'];
        
        var superv = arraylength.length
        console.log( $( "#ulList li" ).get( -1 ) )
        var newtime = superv + 1 
        //console.log(newtime)
        var time = " "
        if (newtime < 12) {
            time = moment().format(newtime + ':00 a')
        } else {
            time = moment().format(newtime + ':00 a')
        }
        
        var txt2 = `<li>
        <div id="newItem" class="row time-block">
           <p class="col-md-1 hour">${time}</p>
            <textarea class="col-md-8 description" placeholder="Write here your activities"></textarea>
               <button class="col-md-1 btn saveBtn"><i class="glyphicon glyphicon-floppy-disk" style="font-size:36px;"></i></button>
           </div>`

        $("#ulList").append(txt2);
        //Scroll down after add the element in the List
        $("html, body").animate({
            scrollTop: $(
              'html, body').get(0).scrollHeight
        }, 100);
       
    });


   

    
