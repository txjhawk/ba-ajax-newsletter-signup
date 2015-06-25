var AjaxSubscribe = Class.create({
    initialize: function(url) {
        this.useurl = url;

        // Set this as the current class so that the observer can call the class's methods.
        var parent = this;

        newsletterSubscriberFormDetail.form.observe('submit', function(ev) {
            console.log('Button has been clicked.');
            console.log(ev);
            parent.validate(ev);
        });
    },

    validate: function(ev){
        var thisForm = newsletterSubscriberFormDetail;
        var isValid  = thisForm.validator.validate();

        if (isValid) {  // The entered email is valid

            // Stop the form from calling the php file that processes the email so that the ajax request can handle it
            Event.stop(ev);

            var email_addr = thisForm.form[0].value;
        }
    }
});

// Create the variable as which will be set as an instance of the AjaxSubscribe class
var as;
