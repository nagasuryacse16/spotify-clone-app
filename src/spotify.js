export const authEndpoint="https://accounts.spotify.com/authorize/";

const redirectUri = "https://spotify-clone-fbe28.web.app/";

const clientId = "fd9a73b920bf48258b5f149b99498d75";

/*A space-separated list of scopes.If no scopes are specified,
authorization will be granted only to access publicly available
information: that is, only information normally visible in the 
Spotify desktop, web, and mobile players.*/

const scopes=[
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = () => {         /*http://localhost:3000/#access_token=BQAFzR0iQNiCXxZt63WUjzU&token_type=Bearer&expires_in=3600*/
    return window.location.hash                /*#access_token=BQAFzR0iQNiCXxZt63WUjzU&token_type=Bearer&expires_in=3600*/
    .substring(1)                              /*access_token=BQAFzR0iQNiCXxZt63WUjzU&token_type=Bearer&expires_in=3600*/
    .split('&')                                /*access_token=BQAFzR0iQNiCXxZt63WUjzU, token_type=Bearer&expires_in=3600*/
    .reduce((initial, item) => {                    
        let parts = item.split('=');           /*access_token, BQAFzR0iQNiCXxZt63WUjzU, token_type, Bearer, expires_in, 3600*/
        initial[parts[0]]=decodeURIComponent( parts[1] );       /*initial = (parts[0]=access_token) =  (parts[1]=BQAFzR0iQNiCXxZt63WUjzU)*/
        return initial;                                         /*BQAFzR0iQNiCXxZt63WUjzU*/        
    },{})
};     

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`; 