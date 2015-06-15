// this: VarienForm('newsletter-validate-detail')
// callOriginal: Original function Validation.prototype.onSubmit
// ev: form submission event

Validation.prototype.onSubmit = Validation.prototype.onSubmit.wrap
(
    function(callOriginal,ev) {
        if (!this.validate())
        {
            // Continue executing the original function (and pass back the event itself) so the user will be notified of the validation error
            return callOriginal(ev);
        }
        else
        {
            // Stop the form from processing normally so that we may issue an Ajax call for email submission and simply display a message instead.
            Event.stop(ev);
            console.log(this);
            var email_addr = this.form[0].value;

            new Ajax.Request(this.form.action, {
                method: 'GET',
                parameters: {addr: email_addr},
                onSuccess: function(transport) {
                    var request_status = transport.status;
                    console.log(transport.status);
                    if (status === 200)
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

function successFunc(response) {}