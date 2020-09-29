
var visible = false;
var coloralert = false;
var UI = {};

function showDetails(){
    console.log("btn clicked!");

    if(!visible){
        UI.secForm.removeClass('invisible');
        UI.btnShow.text("Hide details");
        visible = true;
    }
    else{
        UI.secForm.addClass('invisible'); 
        UI.btnShow.text("Show details");
        visible = false;
    }

}

function changeColor(){
    console.log("it's clicked");

    if(!coloralert){
        UI.btnImportant.removeClass('btn-light');
        UI.btnImportant.addClass('btn-danger');
        coloralert = true;
    }
    else{
        UI.btnImportant.removeClass('btn-danger');
        UI.btnImportant.addClass('btn-light');
        coloralert = false;
    }
}

function init(){
    console.log("page is linked");

    UI = {
        btnShow: $('#btnShow'),
        btnImportant: $('#btnImportant'),
        secForm: $('#secForm')
    };
    
    //get data from servers



    //hook events
    UI.btnShow.click(showDetails);
    UI.btnImportant.click(changeColor);




    //set the text of an input field
     
}

window.onload = init;