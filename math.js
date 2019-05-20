// request and response to get the info to make the caluations
const handleURLCals = (req,res) => 
{
    //get the variable, make it into a int
    req.query.x = Number(req.query.x);
    req.query.y = Number(req.query.y);

    const {method,x,y}=req.query;

    //validate these fools with the valid operations
    const validOpers=["Add","Subtract","Multiply","Divide"];

    //make sure that its in the operation in the array 
    if(validOpers.includes(method.toUpperCase))
    {
        //validate that x is a number
        if(isNaN(x))
        {
            return res.send('Uh oh looks likes you messed up on the x, it needs to be a number ');
        }
        //validate to see if y is a number
        else if(isNaN(y))
        {
            return res.send('Uh oh looks likes you messed up on the y, it needs to be a number ');
        }
    }
    //if the operation are wrong 
    else
    {
        res.send('Hey man that dont seem right the method must include one of the following: Add,Subtract, Multiply, Divide');
    }

};
//exportng the whole bad boi
module.exports = handleURLCals;
