$("#channel-layout .layout").on("click",function(){$(this).addClass("active").siblings().removeClass("active"),$(this).is(".fullscreen")&&$(".display-section").find("input").slice(1).val("").end().end().hide().eq(0).show(),$(this).is(".right-panel")&&$(".display-section").hide().slice(0,2).show()}),$('#edit-channel [type="submit"]').on("click",function(e){if(e.preventDefault(),$("input.is-error").removeClass("is-error"),$empty=$("#edit-channel input:visible").filter(function(){return!this.value}),$empty.addClass("is-error"),$empty.length||!$(".layout.active").length)notify({message:"Please fill out all fields and select a layout before saving.",style:"error"});else{var n,i=$("#channel-layout .layout.active");i.is(".fullscreen")&&(n="fullscreen"),i.is(".right-panel")&&(n="right-panel"),$.ajax({method:"post",data:`${$("#edit-channel").serialize()}&layout=${n}`,success:function(e){window.location="/channels"}})}}),$("#delete-channel").on("click",function(){return confirm("Are you sure? This action cannot be undone.")&&$.ajax({method:"delete",success:function(e){window.location="/channels"}}),!1});