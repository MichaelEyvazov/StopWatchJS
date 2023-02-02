let usersID = [1, 2, 3, 4, 5];
function callGoogleUsers(infoID, success, failure){
    if (usersID.includes(infoID)) {
        success(infoID);
    } else {
        failure();
    }
}
function onSuccess(idInfo) {
    console.log('The information regarding user '+idInfo+' has been retreived.');
}
function onFailure() {
    console.log('There is no such user in the database.');
}

callGoogleUsers(9, onSuccess, onFailure);
callGoogleUsers(2, onSuccess, onFailure);