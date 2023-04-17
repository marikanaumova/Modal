const modal = $.modal({
    title: 'Modalka',
    closable: true,
    content: `
       <h4>Modal is working</h4>
       <p>Lorem ipsum dolor sit.</p>
    `,
    width: '400px',
    footerButtons: [
        {text: 'OK', type: 'primary', handler() {
            console.log('Primary btn clicked')
            }},
        {text: 'Cancel', type: 'danger', handler() {
                console.log('Danger btn clicked')
            }},
    ]
})