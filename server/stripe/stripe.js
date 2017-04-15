/**
 * Created by Dileka on 4/11/2017.
 */

let Stripe = StripeAPI( Meteor.settings.private.stripe );

Meteor.methods({
    processPayment( charge ) {
        check( charge, {
            amount: Number,
            currency: String,
            source: String,
            description: String,
            receipt_email: String
        });

        let handleCharge = Stripe.charges.create( charge, ( error, reponse ) => {
                if ( error ) {
                    return error;
                } else {
                    //return response;
                }
            });
            //     Meteor.wrapAsync( Stripe.charges.create, Stripe.charges ),
        payment      = handleCharge( charge );

        return payment;
    }
});
