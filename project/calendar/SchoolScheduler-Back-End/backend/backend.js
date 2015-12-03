
  var blankCalTemplate =
  {"group": "TestGroup",
    "groupDescription": "This is a TestGroup",
    "events": []
  };

  var CLIENT_ID = '936634867807-n297ujkst77k3kl9g4jgssp6e3s3bc1n.apps.googleusercontent.com';

  var SCOPES = ['https://www.googleapis.com/auth/drive'];

  var calCall;

  var passCalCall;

  var authCall;

//    init(function(){
//    insertNewCalendar(blankCalTemplate);
//=/  }, function(d){
  //  console.log ("File ID is: " + d);
  //}, function (error){

  //});

  //callbackOnNewCalender - called when a new calender is needed, for UI purposes
  //callbackOnCalenderRecieved - called when a calender is recieved, passes fileID to the callback
  function init(callbackOnNewCalendar, callbackOnCalendarRecieved){
    calCall = callbackOnNewCalendar;
    passCalCall = callbackOnCalendarRecieved;
  }


  //Double check to see if the user is still authorized
  function checkAuth() {
    gapi.auth.authorize(
      {
        'client_id': CLIENT_ID,
        'scope': SCOPES.join(' '),
        'immediate': true
      }, handleAuthResult);
  }

  //Callback for authorization
  function handleAuthResult(authResult) {
    var authorizeDiv = document.getElementById('authorize-div');
    if (authResult && !authResult.error) {
      // Hide auth UI, then load client library.
      authCall(null);
      loadDriveApi();
    } else {
      authCall(authResult.error);
    }
  }

  //Called when the authorize is clicked
  function handleAuth(callback) {
    gapi.auth.authorize(
      {client_id: CLIENT_ID, scope: SCOPES, immediate: false},
      handleAuthResult);
    authCall = callback;
    return false;
  }

  function makeFilePublic(fileId){
    var resource = {
      'value': 'default',
      'type': 'anyone',
      'role': 'reader'
    };
    var request = gapi.client.drive.permissions.insert({
      'fileId': fileId,
      'resource': resource
    }).execute(function() {
      console.log("Calendar has been set to public");
      console.log("Handing script to UI");
      passCalCall(fileId);
    });
  }

  //Called when the authorization finally finishes
  function loadDriveApi() {
    console.log("Loading the Google Drive API");
    gapi.client.load('drive', 'v2', handleInit);
  }

  //Callback for when the drive API is initialized
  function handleInit(){
    //Check for file
    //TODO: Add cookies so this doesn't have to perform every time
    //If exists skip
    gapi.client.drive.children.list({
      folderId: "root",
      'q' : "title = 'cal-DO_NOT-TOUCH-AJISDBHO7N8388Y8OCYAYA8DGwdonasycD8ASD.json' and trashed = false"
    }).execute(function(resp){
      console.log(resp);
      var files = resp.items;
      console.log(files.length);
      if (files.length >= 1) {
          console.log("No need to make new ");
          console.log("Handing script to UI");
          passCalCall(resp.items[0].id);
        } else {
          console.log("Making a new calendar");
          calCall();
        }
    });
  }

  function updateCalendar(value, fileId){
    console.log("Updaing the Calendar");
    const boundary = '-------314159265358979323846264';
    const delimiter = "\r\n--" + boundary + "\r\n";
    const close_delim = "\r\n--" + boundary + "--";
    var fileName = 'cal-DO_NOT-TOUCH-AJISDBHO7N8388Y8OCYAYA8DGwdonasycD8ASD.json';
    var contentType = 'application/json';
    var metadata = {
      'title': fileName,
      'mimeType': contentType
    };
    var base64Data = btoa(JSON.stringify(value));
    var multipartRequestBody =
        delimiter +
        'Content-Type: application/json\r\n\r\n' +
        JSON.stringify(metadata) +
        delimiter +
        'Content-Type: ' + contentType + '\r\n' +
        'Content-Transfer-Encoding: base64\r\n' +
        '\r\n' +
        base64Data +
        close_delim;
    var request = gapi.client.request({
        'path': '/upload/drive/v2/files/' + fileId,
        'method': 'PUT',
        'params': {'uploadType': 'multipart'},
        'headers': {
          'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
        },
        'body': multipartRequestBody});

    request.execute(function(arg) {
      console.log("Calendar Updated");
    });
  }

  //function getCalender();

  //function addEvent();
  //function removeEvent();
  //function readCal();
  //function deleteAllCalender();

  //TODO: should not insert if the file already exists
  //Inserts a new calender
  function insertNewCalendar(template) {

      const boundary = '-------314159265358979323846264';
      const delimiter = "\r\n--" + boundary + "\r\n";
      const close_delim = "\r\n--" + boundary + "--";
      var fileName = 'cal-DO_NOT-TOUCH-AJISDBHO7N8388Y8OCYAYA8DGwdonasycD8ASD.json';
      var contentType = 'application/json';
      var metadata = {
        'title': fileName,
        'mimeType': contentType
      };
      var base64Data = btoa(JSON.stringify(template));
      var multipartRequestBody =
          delimiter +
          'Content-Type: application/json\r\n\r\n' +
          JSON.stringify(metadata) +
          delimiter +
          'Content-Type: ' + contentType + '\r\n' +
          'Content-Transfer-Encoding: base64\r\n' +
          '\r\n' +
          base64Data +
          close_delim;
      var request = gapi.client.request({
          'path': '/upload/drive/v2/files',
          'method': 'POST',
          'params': {'uploadType': 'multipart'},
          'headers': {
            'Content-Type': 'multipart/mixed; boundary="' + boundary + '"'
          },
          'body': multipartRequestBody});

      request.execute(function(arg) {
        console.log("A new calendar has been inserted");

        gapi.client.drive.children.list({
          folderId: "root",
          'q' : "title = 'cal-DO_NOT-TOUCH-AJISDBHO7N8388Y8OCYAYA8DGwdonasycD8ASD.json' and trashed = false"
        }).execute(function(resp){
          makeFilePublic(resp.items[0].id);
        });
      });
    }
