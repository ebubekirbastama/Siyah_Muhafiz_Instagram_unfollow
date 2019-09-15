//By & Ebubekir Bastama Instagram Unfollow Function ...
//www.ebubekirbastama.com  

//Unfollow Function... 
var count=14       
for (var j = 1; j <count; j++) 
{
    document.getElementsByClassName('_0mzm- sqdOP  L3NKy   _8A5w5    ')[j].click();
    sleep(2000);
    document.getElementsByClassName('aOOlW -Cab_   ')[0].click(); 
}
alert('Totel :'+ count + 'Person Unfollowed');
alert('www.ebubekirbastama.com');
//Unfollow Function...

//Sleep Function....
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }

}
//Sleep Function..
 
