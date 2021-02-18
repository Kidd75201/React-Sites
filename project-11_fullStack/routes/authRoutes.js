const passport = require('passport');


//Create a route handler and associate it with a given route
 
/*
    1. app -> creating a new route handler
    2. .get -> watch for incoming requests with this method (Attempting to tget info)
    3. '/' -> tells express to watch for requests trying to access '/' ((Root) Route part of handler)
    4. req -> object which represents the incoming request
    5. res -> object which represents the outgoing response
    6. res.send({hi: 'there'}) -> immediately send some JSON back to whoever made this request
*/
// app.get('/', (req, res) => {
//     res.send({ bye: 'buddy'});
// });
 
module.exports = (app) => {
    app.get(
        '/auth/google', 
        // Make passport to authenticate user using google OAuth
        // 1st argument - 'google' - GoogleStrategy - has internal code and signifies 
        // itself as 'google'
        // 2nd argument - Asking google to give us access to the user's profile and email
    
        passport.authenticate('google', {
        scope: ['profile', 'email']
        })
    );
    
    //The scenario where user visits /auth/google/callback
    //Passport JS will help to finish out the process of sending
    //a request to Google for the actual user profile
    
    app.get('/auth/google/callback', passport.authenticate('google'));
    
    /*
        (process.env.PORT) -> Heroku defined port (to use in prod)
        Otherwise
        If in dev environment, use the port 5000
    */

    // req = request, res = responce
    app.get('/api/logout', (req, res) => {
        // .logout kills the cookie
        req.logout();
        // Passport destroys req.user
        res.send(req.user);
    });

    // req = request, res = responce
    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

};