
let launchcode = {
    organization : "nonprofit",
    executiveDirector : "Jeff",
    percentageCoolEmployees : 100,
    programsOffered : ["Web Development", "Data Analysis", "Liftoff"],
    launchOutput: function (num) {
        let parts = {
            2 : 'Launch!',
            3 : 'Code!',
            5 : 'Rocks!'
        };
        if (num % 2 === 'Launch!') {
            return "Launch!";
        } else if(num % 3 === 'Code!'){
            return "Code!";
        } else if(num % 5 === 'Rocks!') {
            return "Rocks!"
        }
        let result = ""
        for (let modulus in parts) {
            if (num % Number(modulus) === 0) {
                if (modulus == 5 && result.length > 0) {
                    result += "";
                }
                result += parts[modulus];
            }

        }
        if (result === "") {
            result = "Rutabagas! that dosen't work.";
        }
        else {
            result += "!";
        }
        if (result === "Launch Rocks!") {
            result += "(CRASH!!!)";
        }
        return result;
        
    }
}


module.exports = launchcode;

