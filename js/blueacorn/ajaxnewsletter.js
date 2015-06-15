VarienForm.prototype.submit = VarienForm.prototype.submit.wrap
(
    function(){
        console.log("That's a wrap!");
        return false;
    }
);




function subscribeToNewsletter(){
    new Ajax.Request('../test.html', {
            method: 'get',
            parameters: $('newsletter-validate-detail').serialize(true),
            onSuccess: console.log(parameters)

        }
    )

}