function invalidRole(request,response,next){
  const {role}=request.body;
  
  if(!role){
    return response.status(401).send({
      error: `Expected role, got ${role}`
    });
  }
  next();
}

function isValidRole(request,response,next){
  const {role}=request.body;
  const isValidRole=validateRole(role);
  
  if(!isValidRole){
    const error=await getAccountCredentials(role);
    return response.status(401).send({...error});
  }
  
  next();
}

async function requestHandler(req,res){
  const credentials=await getAccountCredentials(role);
  res.send({...credentials});
}

module.exports={invalidRole,requestHandler,isValidRole};
