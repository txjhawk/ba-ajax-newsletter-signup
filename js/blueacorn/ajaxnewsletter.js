var AjaxSubscribe = Class.create({
    initialize: function(url) {
        this.useurl = url;
        alert(this.useurl);

        newsletterSubscriberFormDetail.form.observe('submit', function(ev) {
            console.log('Button has been clicked.');
            this.validate(ev);
        });
    },

    validate: function(event) {
        var thisForm    = newsletterSubscriberFormDetail;
        var isValid     = this_form.validator.validate();

        console.log(isValid);

    }
});

var as;


document.observe("dom:loaded", function()
{
    as = new AjaxSubscribe('fiddle');
});