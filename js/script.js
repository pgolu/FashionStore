function $() {
    $('#nav-search-select').change(function() {
      var selectedText = $(this).find('option:selected').text();
      $('#nav-search').find('.nav-search-label').html(selectedText);
    });
  }

  // light and dark mode 
function changeMode() {
  let mybody = document.body;
  mybody.classList.toggle('myDark')
}

  //         COUPON CODE 
  function loadCoupon() {
    document.getElementsByClassName('coupon')[0].style.display ='block';
    document.getElementById('searchCoupon').style.opacity='1';
}

const closeCoupon = () => {
    document.getElementsByClassName('coupon')[0].style.display = 'none';
    document.getElementById('searchCoupon').style.opacity='1';
}

/* GEO LOCATION  */
let x = document.getElementById('out');
 let y = document.getElementById('weather');
function geolocation(){
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition);
    }else{
        x.innerText = "Geo Not Supported"
    }
}

function showPosition(data){
    console.log(data)
    let x = document.getElementById('out');
 let y = document.getElementById('weather');
    let lat = data.coords.latitude;
    let lon = data.coords.longitude;
    x.innerText = `latitude is ${lat} and longitude is ${lon}`;
    const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${lon}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`
    //api calling
    fetch(url,{method:"GET"})
    //return promise
    .then((res) => res.json())
    //resolve promise and get data
    .then((data) => {
        console.log(data);
        let cityName = data.city.name;
        let temp = data.list[0].temp.day;
        y.innerText= `Weather of ${cityName} is ${temp} °C`
    })
}