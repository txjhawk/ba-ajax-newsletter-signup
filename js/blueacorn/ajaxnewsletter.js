var AjaxSubscribe = Class.create({
    initialize: function (url) {
        this.useurl = url;
        alert(this.useurl);
    },

    validate: function () {


    }
});

document.observe("dom:loaded", function()
{
    var as = new AjaxSubscribe('fiddle');
}