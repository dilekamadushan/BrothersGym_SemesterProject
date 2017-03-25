
var myLogoutFunc = function(){
   Router.go('home');
}



AccountsTemplates.configure({
    confirmPassword:false,
    termsUrl:'terms-of-use',
    privacyUrl:'privacy',
    sendVerificationEmail: true,
    enforceEmailVerification:true,

    forbidClientAccountCreation: true,
    onLogoutHook:myLogoutFunc




});


    AccountsTemplates.addFields([

        {
            _id:'firstName',
            type:'text',
            displayName:'First Name',
            required: true,
            //      re: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])/,
            // errStr: '1 lowercase and 1 uppercase letter required'
        }
        ,{
            _id:'profession',
            type:'select',
            displayName:'Profession',
            select:[
                {
                    text:'Member',
                    value:'member'
                },{
                    text:'Trainer',
                    value:'trainer'
                },{
                    text:'Officer',
                    value:'officer'
                }
            ]
        },
        {
            _id: "gender",
            type: "select",
            displayName: "Gender",
            select: [
                {
                    text: "Male",
                    value: "male",
                },
                {
                    text: "Female",
                    value: "female",
                },
            ],
        }



    ]);


    // AccountsTemplates.addField({
    //     _id: "gender",
    //     type: "select",
    //     displayName: "Gender",
    //     select: [
    //         {
    //             text: "Male",
    //             value: "male",
    //         },
    //         {
    //             text: "Female",
    //             value: "female",
    //         },
    //     ],
    // });






