var AjaxSubscribe = Class.create({
    initialize: function(url) {
        this.actionUrl  = url + 'ajaxnewsletter/subscribe/subscribe';
        this.thisForm   = newsletterSubscriberFormDetail;
        this.emailAddr  = '';

        // Assign the class as a variable so that the observer can call the class's methods.
        var parent = this;

        this.thisForm.form.observe('submit', function(ev) {

            var validated = parent.validate(ev);

            if (validated) {
                Event.stop(ev);

                parent.emailAddr = parent.thisForm.form[0].value;
                parent.subscribe();
            }
        });
    },

    validate: function(ev){
        return this.thisForm.validator.validate();
    },

    subscribe: function() {
        console.log('Subscribe ' + this.emailAddr + ' using ' + this.actionUrl);

        new Ajax.Request(this.actionUrl, {
            method:     'GET',
            parameters: {email: this.emailAddr},
            onSuccess:  function (transport) {

                alert(transport);

                var message_item = $$("li#nl_message_container")[0];


                //message_item.addClassName("success-msg");
                //message_item.update("<ul><li>" + transport.responseText + "</li></ul>");


            }
        });
    }
});

// Create the variable 'ajaxsubscribe' which will be set as an instance of the AjaxSubscribe class
var ajaxsubscribe;