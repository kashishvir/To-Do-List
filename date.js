module.exports = getdate;
function getdate(){
  let options =
  {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  let today = new Date();


  let day = today.toLocaleDateString("en-US", options); // Saturday, September 17, 2016
  return day;
}
