$(document).ready(function(){
    $('#box').hover(function(){
        $('#halftop').addClass('hover');
        $('#halfbottom').addClass('hovered');
        $('#bg').addClass('bgen');
        $('#circlebg').addClass('circleen');
        $('#rewardb').css('z-index','5').addClass('show');
        


    });

    $('#box').mouseout(function(){
        $('#halftop').removeClass('hover');
        $('#halfbottom').removeClass('hovered');
        $('#bg').removeClass('bgen');
        $('#circlebg').removeClass('circleen');
        $('#rewardb').css('z-index','-2').removeClass('show');

    });

    $('#rewardb').hover(function(){
        $(this).attr('class','show hoverb');
        $('#halftop').addClass('hover');
        $('#halfbottom').addClass('hovered');
        $('#bg').addClass('bgen');
        $('#circlebg').addClass('circleen').css('background-color','#DAA520').css('transition-duration','.7s');

    });

    $('#rewardb').mouseout(function(){
        $(this).removeClass('hoverb');
        $('#circlebg').css('background-color','rgb(189, 189, 189)').css('transition-duration','1s');

    });

    $('#rewardb').click(function(){
        $(this).css('opacity','0');
        $('#halftop').attr('class','leave');
        $('#halfbottom').attr('class','leaveb');
        $('#circlebg').attr('class','end');
        $('#bg').removeClass('bgen');
        $('#box','#rewardb').css('display','none').css('pointer-events','none').css('animation','none');
        $('#endmsg').addClass('start');
        $('#bg').css('transition-duration','1s').css('background-color','rgba(0,0,0,.9)');
    })

});