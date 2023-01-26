jQuery("#frmRegistration").submit(function (e) {
    e.preventDefault();
    jQuery(".field_error").html("");
    jQuery.ajax({
        url: "registration_process",
        data: jQuery("#frmRegistration").serialize(),
        type: "post",
        success: function (result) {
            if (result.status == "error") {
                jQuery.each(result.error, function (key, val) {
                    jQuery("#" + key + "_error").html(val[0]);
                });
            }
            if (result.status == "success") {
                jQuery("#frmRegistration")[0].reset();
                jQuery("#thank_you_msg").html(result.msg);
            }
        },
    });
});


jQuery("#frmLogin").submit(function (e) {
    e.preventDefault();
    jQuery("#login_msg").html("");
    jQuery.ajax({
        url: "/login_process",
        data: jQuery("#frmLogin").serialize(),
        type: "post",
        success: function (result) {
            if (result.status == "error") {
                jQuery("#login_msg").html(result.msg);
            }
            if (result.status == "success") {
                if(result.user_type=="user"){
                    window.location.href ="user/dashboard";
                }
                else{
                    window.location.href ="admin/dashboard";
                }
            }
        },
    });
});
