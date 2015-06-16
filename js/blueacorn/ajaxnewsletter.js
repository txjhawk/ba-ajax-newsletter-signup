//this:         VarienForm('newsletter-validate-detail')
//callOriginal: Original function Validation.prototype.onSubmit
//ev:           The form submission event

Validation.prototype.onSubmit = Validation.prototype.onSubmit.wrap
(
    function(callOriginal,ev) {

        //return callOriginal(ev); // Used to override Ajax call and process request normally

        console.log('Executing Ajax call...');

        // The AJAX validation should only be done for the Newsletter Subscribe form. Otherwise, continue normal execution.
        if (this.form.id != 'newsletter-validate-detail')
            return callOriginal(ev);

        if (!this.validate())
        {
            console.log('Invalid email');
            // Continue executing the original function (and pass back the event itself) so the user will be notified of the validation error
            return callOriginal(ev);
        }
        else
        {
            // Stop the form from processing normally so that we may issue an Ajax call for email submission and simply display a message instead.
            Event.stop(ev);

            // Get the email address being submitted for inclusion in the Ajax call
            var email_addr = this.form[0].value;

            var actionUrl = window.location.href + 'ajaxnewsletter/subscribe/subscribe';

            // this.form.action = page that is originally called from standard form submission
            // ((ROOT)/app/code/core/Mage/Newsletter/controllers/SubscriberController.php)
            new Ajax.Request(actionUrl, {
                method:     'GET',
                parameters: {email: email_addr, method: 'ajax'},
                onSuccess:  function(transport) {

                    alert(transport.responseText);

                    var request_status = transport.status;
                }
            });
        }
    }
);