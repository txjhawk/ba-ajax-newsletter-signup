//this:         VarienForm('newsletter-validate-detail')
//callOriginal: Original function Validation.prototype.onSubmit
//ev:           The form submission event

Validation.prototype.onSubmit = Validation.prototype.onSubmit.wrap
(
    function(callOriginal,ev) {

        //return callOriginal(ev); // Used to override Ajax call and process request normally (for testing)

        // The AJAX validation should only be done for the Newsletter Subscribe form. Otherwise, continue normal execution.
        if (this.form.id != 'newsletter-validate-detail')
            return callOriginal(ev);

        if (!this.validate())
        {
            // Continue executing the original function (and pass back the event itself) so the user will be notified of the validation error
            return callOriginal(ev);
        }
        else
        {
            // Stop the form from processing normally so that we may issue an Ajax call for email submission and simply display a message instead.
            Event.stop(ev);

            // Get the email address being submitted for inclusion in the Ajax call
            var email_addr = this.form[0].value;

            // Set URL to call for Ajax request. The email will be sent, and the status message returned.
            var actionUrl = baseurl + 'ajaxnewsletter/subscribe/subscribe';

            new Ajax.Request(actionUrl, {
                method:     'GET',
                parameters: {email: email_addr},
                onSuccess:  function(transport) {

                    alert(transport.responseText);

                    var request_status = transport.status;
                }
            });
        }
    }
);