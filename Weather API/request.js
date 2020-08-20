const key ='73faa414a789c07612180f739ce41cc2';

const requestCity=async (city)=>{
    const baseURL='http://api.openweathermap.org/data/2.5/weather';
    const query = `?q=${city}&appid=${key}`;

   //fetch call
    const response  = await fetch(baseURL + query);
    const data= await response.json();
    return data;
};