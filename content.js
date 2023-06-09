chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    let requestType = request.type
    if(requestType === "CHANGE_STATUS"){
        let isChecked = request.payload.checked
        if(isChecked){
            localStorage.setItem("tcDebugger", "true")
        }else{
            localStorage.setItem("tcDebugger", "false")
        }
    }else if(requestType === "GET_STATUS"){
        sendResponse({ tcDebugger : localStorage.getItem("tcDebugger") });
    }
  });