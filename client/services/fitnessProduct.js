Template.fitnessProduct.onCreated( () => {

    // var self = this;
    // self.autorun(function () {
    //     self.subscribe('saleNotification');
    // });
    //

    let template = Template.instance();

    template.selectedService  = new ReactiveVar( false );
    template.processing       = new ReactiveVar( false );

    template.checkout = StripeCheckout.configure({
        key: Meteor.settings.public.stripe,
        image: 'https://tmc-post-content.s3.amazonaws.com/ghostbusters-logo.png',
        locale: 'auto',
        token( token ) {
            let service = template.selectedService.get(),
                charge  = {
                    amount: token.amount || service.amount,
                    currency: token.currency || 'usd',
                    source: token.id,
                    description: token.description || service.description,
                    receipt_email: token.email
                };

            Meteor.call( 'processPayment', charge, ( error, response ) => {
                if ( error ) {
                    template.processing.set( false );
                    //Bert.alert( error.reason, 'danger' );
                } else {
                    //Bert.alert( 'Thanks! You\'ll be ghost free soon :)', 'success' );
                }
            });
        },
        closed() {
            template.processing.set( false );
        }
    });
});








Template.fitnessProduct.events({
    'click [data-service]' ( event,template ) {
        const pricing = {
            'full-torso-apparition': {
                amount: 300000,
                description: "Full Torso Apparition Removal"
            },
            'free-floating-repeater': {
                amount: 425000,
                description: "Free-Floating Repeater Removal"
            },
            'full-roaming-vapor': {
                amount: 1500000,
                description: "Full Roaming Vapor Removal"
            }
        };

        let service = pricing[ event.target.dataset.service ];

       template.selectedService.set( service );
        template.processing.set( true );

        Meteor.call('addSaleNotification', this._id,this.name,this.price);

        template.checkout.open({
            name: 'Ghostbusting Service',
            description: "hi",
            amount: this.price,
            bitcoin: true
        });
    },


});