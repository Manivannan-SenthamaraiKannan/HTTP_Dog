const baseURL = 'https://http.dog/200.jpg';

const httpRespCode =  async() =>{
    const response = await fetch(`${baseURL}`,{
        method : "GET",
        // headers : {
        //     "content-type" : "image/jpeg",

        // }
    })
    const siteResp = await response.json();
    console.log(siteResp);
}

httpRespCode()