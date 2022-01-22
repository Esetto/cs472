window.onload = function () {
    let accountInfo = [];
    var banking = (function () {
        var name;
        var balance;
        function account() {
            balance = document.getElementById("dtext").value;
            name = document.getElementById("atext").value
            if (name == "" || balance == "") {
                return null;
            }
            else return {
                accname: name,
                depobalance: balance
            }
        } return {
            newAcc: function () {
                return account();
            }
        }
    }());

    var btn1 = document.getElementById("btn");
    btn1.onclick = list;
    function list() {
        var acc = banking.newAcc();
        if (acc == null) {
            alert("Please enter account name and deposit ");
            return;
        }

        accountInfo[accountInfo.length] = acc;

        showAccounts();

    }

    function showAccounts() {
        var acclist = "";
        accountInfo.forEach(function (item, index, array) {
            acclist += "Account Name: " + item["accname"] + "   Balance: " + item["depobalance"] + "\n";
        })

        document.getElementById("txt").innerHTML = acclist;



    }
}