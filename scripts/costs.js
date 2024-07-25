
        // Function to calculate and display the total cost
        function calculateCost() {
            // Get user input values
            var plata = parseFloat(document.getElementById("plata").value);
            var kredit = parseFloat(document.getElementById("kredit").value);
            var mts = parseFloat(document.getElementById("mts").value);
            var eps = parseFloat(document.getElementById("eps").value);
            var supern = parseFloat(document.getElementById("supern").value);
            var kom = parseFloat(document.getElementById("kom").value);
            var mtsn = parseFloat(document.getElementById("mtsn").value);
            var gas = parseFloat(document.getElementById("gas").value);
            var vod = parseFloat(document.getElementById("vod").value);
            var kreditna = parseFloat(document.getElementById("kreditna").value);


            // Calculate total cost
            var totalCost = plata - mts - kredit - eps - supern - kom - mtsn - gas - vod - kreditna;


            // Display the total cost
            document.getElementById("totalCost").textContent = totalCost.toFixed(2);


            // Store the values in local storage
            localStorage.setItem("plata", plata);
            localStorage.setItem("kredit", kredit);
            localStorage.setItem("mts", mts);
            localStorage.setItem("eps", eps);
            localStorage.setItem("supern", supern);
            localStorage.setItem("kom", kom);
            localStorage.setItem("mtsn", mtsn);
            localStorage.setItem("gas", gas);
            localStorage.setItem("vod", vod);
            localStorage.setItem("kreditna", kreditna);
        }

        // Check if data is available in local storage and populate the fields
        var storedPlata = localStorage.getItem("plata");
        var storedKredit = localStorage.getItem("kredit");
        var storedMts = localStorage.getItem("mts");
        var storedEps = localStorage.getItem("eps");
        var storedSuper = localStorage.getItem("supern");
        var storedKom = localStorage.getItem("kom")
        var storedMtsn = localStorage.getItem("mtsn")
        var storedGas = localStorage.getItem("gas")
        var storedVod = localStorage.getItem("vod")
        var storedKreditna = localStorage.getItem("kreditna")

        if (storedMts !== null && storedKredit !== null && storedPlata !== null && storedEps !== null && storedSuper !== null && storedKom !== null && storedMtsn !== null
            && storedGas !== null) {
            document.getElementById("plata").value = storedPlata;
            document.getElementById("kredit").value = storedKredit;
            document.getElementById("mts").value = storedMts;
            document.getElementById("eps").value = storedEps;
            document.getElementById("supern").value = storedSuper;
            document.getElementById("kom").value = storedKom;
            document.getElementById("mtsn").value = storedMtsn;
            document.getElementById("gas").value = storedGas;
            document.getElementById("vod").value = storedVod;
            document.getElementById("kreditna").value = storedKreditna;
        } 
    