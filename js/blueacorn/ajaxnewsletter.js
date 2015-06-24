var AjaxSubscribe = Class.create({
    initialize: function(url) {
        this.useurl = url;
        alert(this.useurl);
        var parent = this;

        newsletterSubscriberFormDetail.form.observe('submit', function(ev) {
            console.log('Button has been clicked.');
            parent.validate();
        });
    },

    validate: function(){
        var thisForm    = newsletterSubscriberFormDetail;

        console.log(thisForm);



        var isValid     = thisForm.validator.validate();

        console.log(isValid);

        if (is_valid) {

            Event.stop(ev);
        }

    }
});

var as;


document.observe("dom:loaded", function()
{
    as = new AjaxSubscribe('fiddle');
});