//validate these fools with the valid operations
const validOpers=["Add","Subtract","Multiply","Divide"];

// request and response to get the info to make the caluations
const handleURLCals = (req,res) => 
{
    //get the variable, make it into a int
    req.query.x = parseInt(req.query.x);
    req.query.y = parseInt(req.query.y);

    const {method,x,y}=req.query;
    
console.log(validOpers);

    //make sure that its in the operation in the array 
    if (validOpers.includes(method.toUpperCase())) 
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
        res.send('Hey man that dont seem right the method must include one of the following: Add, Subtract, Multiply, Divide');
    }
    
    // get action and result from calfuctions function
    const { action, result } = calFunctions(method, x, y);

    //print out the action and result of said action
    res.send(`${x} ${action} ${y} = ${result}`); 
};

//this fution is to calulate everything and send it back to get printed out 
const calFunctions = (method, x, y) => 
{
    switch(method.toLowerCase())
    {
        case 'Add':
            return {
                action: '+', result: x + y};

        case 'Subtract':
            return {
                action: '-', result: x - y};
        case 'Multiply':
            return {
                action: '*', result: x * y};
        case 'Divide':
            return {
                action: '/', result: x / y};
        default:
            return 'Sorry I can only Add(+), Subtract(-), Multiply(*), or Divide(/). Please try again ;)';    
    }
};

//exportng the whole bad boi
module.exports = handleURLCals;
