alert("It works! The dream is alive!");

function subscribeToNewsletter(){
    new Ajax.Request('../test.html', {
            method: 'get',
            parameters: $('newsletter-validate-detail').serialize(true),
            onSuccess: console.log(parameters)

        }
    )

}