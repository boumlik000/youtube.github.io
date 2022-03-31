$(document).ready(function(){
    /*hn fih lfct real dial btn real btn less */
    $('#myBtn').on('click',function(){
        read();
    });
    /*hna dial comments */
    $('.reply').click(function () { 
        $(this).parents('div.row').next('div.card').toggle();
        
    });
});
function read(){
    var dots=document.getElementById('dots');
    var moretext=document.getElementById('more');
    var btnText=document.getElementById('myBtn');

    if(dots.style.display=="none"){
        dots.style.display="inline";
        btnText.innerHTML="read more";
        moretext.style.display="none";

    }
    else{
        dots.style.display="none";
        btnText.innerHTML="read less";
        moretext.style.display="inline";
    }


}