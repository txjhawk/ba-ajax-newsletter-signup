var AjaxSubscribe = Class.create({
    initialize: function(url) {
        this.useurl = url;
        alert(this.useurl);
    },

    validate: function(event) {
        var this_form = newsletterSubscriberFormDetail;

        var is_valid = this_form.validator.validate();

        console.log(is_valid);

    }
});

document.observe("dom:loaded", function()
{
    var as = new AjaxSubscribe('fiddle');
});