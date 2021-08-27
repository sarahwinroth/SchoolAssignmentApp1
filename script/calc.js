
let operator = "";

function getOperator(op) {
    operator = op;
}

function summa() {
    let num1 = document.getElementById("input1").value;
    let num2 = document.getElementById("input2").value;
    let result = 0;
    console.log(num1);
    console.log(num2);

    if(num1 == "" || num2 == "") {
        document.getElementById("summan").innerHTML = "<h2>Nummer saknas, du måste fylla i båda fälten</h2>";
    }
    else if(operator == null || operator == "") {
        document.getElementById("summan").innerHTML = "<h2>Operator saknas</h2>";
    }
    else if(operator != null || operator != "")
    {
        switch(operator) {
            case '+':
                result = +num1 + +num2;
                clr();
                document.getElementById("summan").innerHTML = "<h2>" + num1 + " + " + num2 + " = " + result + "</h2>";          
                break;
        
            case '-':
                result = num1 - num2;
                clr();
                document.getElementById("summan").innerHTML = "<h2>"+ num1 + " - " + num2 + " = " + result + "</h2>";
                break;
        
            case '*':
                result = num1 * num2;
                clr();
                document.getElementById("summan").innerHTML = "<h2>"+ num1 + " * " + num2 + " = " + result + "</h2>";
                break;
        
            case '/':
                result = num1 / num2;
                clr();
                document.getElementById("summan").innerHTML = "<h2>"+ num1 + " / " + num2 + " = " + result + "</h2>";
                break;
        }
    }
    else {
        document.getElementById("summan").innerHTML = "<h2>Inmatning misslyckad</h2>";
    }
}

function clr()
         {
            num1 = "";
            num2 = "";
            operator = "";
            document.getElementById("input1").value = "";
            document.getElementById("input2").value = "";
         }