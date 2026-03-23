let location_data = document.querySelector(".Location_image")
let data = document.querySelector(".location")
let input_tag = document.createElement("input")
let insert_data=document.querySelectorAll(".value")
let temp=document.querySelector(".temp")
let weather=document.querySelector(".weather")
let C_F_btn=document.querySelector(".btn")
location_data.addEventListener("click", () => {
    location_data.disabled = true;
    value = data.textContent
    data.textContent = ""
    input_tag.value = value
    input_tag.classList = "location"
    data.append(input_tag)
    input_tag.focus()
})
input_tag.addEventListener("blur", () => {

    value1 = input_tag.value
    value1 = value1.toUpperCase();
    data.textContent = value1
    location_data.disabled = false;
    fetch_data(value1)
})
async function fetch_data(value) {
    try {
    const res = await fetch(`https://api.weatherapi.com/v1/current.json?key=5ea070b6a4ec4646b94140123260302&q=${value}`);
    const data = await res.json();
    console.log("Temp:", data.current.temp_c);
    console.log("Climate:", data.current.condition.text);
    console.log("Time:", data.location.localtime.time);
    console.log("region:", data.location.region);
    console.log("country:", data.location.country);
    console.log("humidity:", data.current.humidity);
    console.log("wind:", data.current.wind_kph);
    console.log("weather:", data.current.condition.text);
    time=data.location.localtime.split(" ")
    temp.innerHTML=parseInt(data.current.temp_c)+"<sup>o</sup>"+"C"
    weather.textContent=data.current.condition.text;
    insert_data[0].textContent=data.current.humidity+"%"
    insert_data[1].textContent=data.current.wind_kph+"Km/h"
    insert_data[2].textContent=time[1]
    console.log(data)
    } catch (error) {
        alert("Loction Not Exist")
        
    }
}
C_F_btn.addEventListener("click",()=>
{
    check=temp.textContent.split("o")
    console.log(check[1])
    if(check[1]=="C")
    {
        F = (check[0]* 9/5) + 32
        temp.innerHTML=F+"<sup>o</sup>"+"F"
    }
    else{
        C = (check[0]- 32) *5/9
        temp.innerHTML=C+"<sup>o</sup>"+"C"
    }
    console.log(check)
})