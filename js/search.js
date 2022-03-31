$(document).ready(function(){
    /*for slid the row */
    $('#search-filter-icon').click(function () { 
        $('.filter-column').slideToggle("slow");
    });

    $("input:checkbox").click(function(){
        /*for checkbow */
        var $box=$(this);

        if($box.is(":checked")){
            var group= "input:checkbox[name='" + $box.attr("name") +"']";
            $(group).prop("checked",false);
            $box.prop("checked",true);
        }
    });
});