const getCookie = ( name ) => {
    var nameLookup = name + "=";
    var cookies = document.cookie.split(';');
    for(var i=0;i < cookies.length;i++) {
        var cookie = cookies[i];
        while (cookie.charAt(0)==' '){
            cookie = cookie.substring(1,cookie.length); 
        } 
        if (cookie.indexOf(nameLookup) == 0) {
            return cookie.substring(nameLookup.length,cookie.length);
        }
       
    }
    return null;

}


export default {getCookie};



