let welcome= function(userName)
{
    
    
    return ` welcome ${userName}`;
    
}


let welcome = (userName) => ` welcome ${userName}`;

let person = 
    {
        
        salary:5000 ,
        calcSalary:function()
        {
            
            
            
            let calcTaxes = () => { return (this.salary*14/100;)}
            return this.salary- calcTaxes();
            
        }
        
        
        
    }



console.log(person.calcSalary());
