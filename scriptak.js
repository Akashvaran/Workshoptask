let calculate = () => {
    let bp = parseFloat(document.getElementById("bp").value);
    let hra = bp * 0.1;
    let da = bp * 0.05;
    let travel = bp * 0.15;
    let pf = bp * 0.15;
    let gross = pf + hra + da + travel + pf;
    let netSal = gross - pf;

    document.getElementById("hra").value = hra;
    document.getElementById("da").value = da;
    document.getElementById("travel").value = travel;
    document.getElementById("pf").value = pf;
    document.getElementById("gross").value = gross;
    document.getElementById("net").value = netSal;
}

let print = () => {
    let bp = parseFloat(document.getElementById("bp").value);
    let hra = bp * 0.1;
    let da = bp * 0.05;
    let travel = bp * 0.15;
    let pf = bp * 0.15;
    let gross = pf + hra + da + travel + pf;
    let netSal = gross - pf;

    document.getElementById("data").innerHTML = bp;
    document.getElementById("data1").innerHTML = hra;
    document.getElementById("data2").innerHTML = da;
    document.getElementById("data3").innerHTML = travel;
    document.getElementById("data4").innerHTML = pf;
    document.getElementById("data5").innerHTML = gross;
    document.getElementById("data6").innerHTML = netSal;

    document.getElementById("table").className = "table table-success table-striped-columns mt-3";
}

document.getElementById("bp").addEventListener("input", calculate);
document.getElementById("print").addEventListener("click", print);
