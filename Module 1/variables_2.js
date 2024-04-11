function testScope() {
    var x_var = "This is variable x_var, declared using var";
    let x_let = "This is variable x_let, declared using let";
    const x_const = "This is variable x_const, declared using const";

    {
        console.log(x_var);    // Visible because var has function scope
        console.log(x_let);    // Visible because let has block scope
        console.log(x_const);  // Visible because const has block scope
        }
        
        console.log(x_var);    // Visible because var has function scope
        //console.log(x_let);  // Not visible because let has block scope
        //console.log(x_const);// Not visible because const has block scope
}

testScope();
