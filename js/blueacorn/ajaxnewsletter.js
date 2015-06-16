// this: VarienForm('newsletter-validate-detail')
// callOriginal: Original function Validation.prototype.onSubmit
// ev: form submission event

Validation.prototype.onSubmit = Validation.prototype.onSubmit.wrap
(
    function(callOriginal,ev) {

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

            // this.form.action = page that is originally called from standard form submission
            // ((ROOT)/app/code/core/Mage/Newsletter/controllers/SubscriberController.php)
            new Ajax.Request(this.form.action, {
                method:     'GET',
                parameters: {addr: email_addr},
                onSuccess:  function(transport) {
                                                    var request_status = transport.status;

                                                    if (transport.status === 200) // Request was processed successfully
                                                    {
                                                        alert("The email was successfully added to the list.");
                                                    }
                                                    else
                                                    {
                                                        alert("There was an error processing your request.");
                                                    }
                                                }
            });
        }
    }
);