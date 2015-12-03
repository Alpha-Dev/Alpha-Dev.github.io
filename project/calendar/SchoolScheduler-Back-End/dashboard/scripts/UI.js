var calJSON;
var fId;
var blankTemp;
$(function() {
  debug("Script running");
  //Init the interface
  init(newCalCall, uiInit);
  //Attempt the log in and handle errors
  handleAuth(function(err){
    if(err != null){
      debug("There was an error trying to authorize the user");
      debug(err);
    }
  });
});

var date = new Date();

//TODO : support calendar as the years progress, etc.
function newCalCall(){
  //TODO : Make an actual form
  debug("Generating new calendar");
  var name = prompt("Calendar Name");
  var desc = prompt("Calendar Description");
  var auth = prompt("Calendar Author");
  //HACK: lul should not be using the message boxes


  var year = date.getFullYear();
  var month = date.getMonth()

  //Self explanitory, however 'calendar' has a json, of a json, of a json,
  Blanktemp =
  {"group": name,
    "groupDescription": desc,
    "groupAuthor": auth,
    "calendar":{}
  };
  blankTemp["calendar"][year] =  {};
  //Empty events array
  blankTemp["calendar"][year][month + 1] = {};

  //insert calendar with a template, check the documentation on backend.js for
  //more info
  insertNewCalendar(blankTemp);
  debug("Generating sequence finished");
}

function addEvent(name, desc, timestart, timeend, miscJSON, year, month, dayOfMonth){
  var eventJson = {
    "eventId": generateUUID(),
    "eventName": name,
    "eventDesc": desc,
    "eventStart": timestart,
    "timeend": timeend,
    //Data for stuff that hasn't been implmentated yet or planned for in the future
    "miscData": miscJSON
  };

    if(typeof calJSON["calendar"][year] === 'undefined'){
      calJSON["calendar"][year] = {};
    }

    if(typeof calJSON["calendar"][year][month] === 'undefined'){
      calJSON["calendar"][year][month] = {};
    }

    if(typeof calJSON["calendar"][year][month][dayOfMonth] === 'undefined'){
      calJSON["calendar"][year][month][dayOfMonth] = [];
    }

    calJSON["calendar"][year][month][dayOfMonth].push(eventJson);

    submitCal();
}

var eDebug;

function removeEvent(year, month, dayOfMonth, UUID){

  var events = calJSON["calendar"][year][month][dayOfMonth];

  for(var i = 0; i < events.length; i++)
  {
    if(events[i].eventId == UUID)
    {
      events.splice(i, 1);
      calJSON["calendar"][year][month][dayOfMonth] = events;
      submitCal();
      break;
    }
  }
}


function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
}

function uiInit(fileId){
    //Gets the raw file content asyncly
    fId = fileId;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
    if (xhttp.readyState == 4 && xhttp.status == 200) {
        debug("Calendar fetched");
        calJSON = JSON.parse(xhttp.responseText);
        console.log(calJSON);
    }
    };
    xhttp.open("GET", "https://googledrive.com/host/" + fId, true);
    xhttp.send();
}

function submitCal(){
  console.log("CALENDAR CALL = " + JSON.stringify(calJSON));
  updateCalendar(calJSON,fId);
}

//Seperate the UI script from the interface
function debug(string){
  console.log("UI : " + string);
}
