document.observe("dom:loaded", function()
{
    newsletterSubscriberFormDetail.form.observe('submit', function(ev) {

        var this_form = newsletterSubscriberFormDetail;

        var is_valid = this_form.validator.validate();

        if (is_valid) {

            Event.stop(ev);

            var email_addr = this_form.form[0].value;

            var http = location.protocol;
            var slashes = http.concat("//");
            var actionUrl = slashes.concat(window.location.hostname) +  '/index.php/ajaxnewsletter/subscribe/subscribe';

            new Ajax.Request(actionUrl, {
                method: 'GET',
                parameters: {email: email_addr},
                onSuccess: function (transport) {

                    alert(transport.responseText);
                }
            });
        }
    });
});
