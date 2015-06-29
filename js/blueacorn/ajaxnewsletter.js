var AjaxSubscribe = Class.create({
    initialize: function(url) {
        this.actionUrl  = url + 'ajaxnewsletter/subscribe/subscribe';
        this.thisForm   = newsletterSubscriberFormDetail;
        this.emailAddr  = '';
        this.response   = '';

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
        var parent = this;
        new Ajax.Request(this.actionUrl, {
            method:     'GET',
            parameters: {email: this.emailAddr},
            onSuccess:  function (transport) {
                parent.response = JSON.parse(transport.responseText);
                parent.addResponse();
            }
        });
    },

    addResponse: function() {
        // Insert the returned message in the <li> tag created on page load, and use the class associated with the status (error or success)
        var message_item = $$("li#nl_message_container")[0];
        var currentClass = message_item.classNames();
        message_item.removeClassName(currentClass);
        message_item.addClassName(this.response.status + "-msg");
        message_item.update('<ul><li>' + this.response.message + '</li></ul>');

    }
});

// Create the variable 'ajaxsubscribe' which will be set as an instance of the AjaxSubscribe class
var ajaxsubscribe;