const axios = require('axios');
const login = (req, res) => {
    console.log(req.body)
    res.json({ result: "User Logged in" });
};
const signup =(req,res) =>{
    console.log(req.body);
    res.json({ result: "User singed up" });
}
const getCountries =async(req,res,next)=>{
    let countries = await axios.get("https://restcountries.com/v3.1/all")
    let mappedData = countries.data.map(x=>{
        return {name:x.name,currencies:x.currencies}
    })
    res.json(mappedData);
}
const validate = (req,res,next)=>{
    if(req.headers.authorization=='john'){
        next();
    }else{
        res.json({"result":"User not authenticated"})
    }
}
module.exports={
    login,
    signup,
    getCountries,
    validate
}
