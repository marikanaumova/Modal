const modal = $.modal({
    title: 'Modal is working',
    closable: true,
    content: `
       <h4>Some text</h4>
       <p>Text</p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'OK', type: 'primary', handler() {
                console.log('OK')
                modal.close()
            }},
        {text: 'Cancel', type: 'danger', handler() {
                console.log('Cancel')
                modal.close()
            }},
    ]
})





