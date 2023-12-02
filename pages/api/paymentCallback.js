import api from 'api'

const handler = async(req, res)=> {

    console.log("body", req.body, req.method)
    return res.status(200).json({
        method: req.method,
        body: JSON.stringify(req.body)
    });
    
  
  
    }

  
  
  export default handler
  
  
  
  