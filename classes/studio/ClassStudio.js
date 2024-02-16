//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate{
    constructor(name, mass, scores = []){
        this.name = name;
        this.mass = mass;
        this.scores = scores;
    }
    addScore(newScore) {
        this.scores.push(newScore);
      }
    //Add methods for adding scores, averaging scores and determining candidate status as described in the studio activity.
    // average(){
    //     let sum = 0;
    //     // for(i = 0; i < scores.length;i++){
    //     //     sum += this.score[i]
    //     // }
    //     // for (let score of this.scores){
    //     //     sum += Number(score);

    //     // }
    average() {
        let sum = 0;
        for (let score of this.scores) {
          sum += Number(score);
        }
        return (sum / this.scores.length).toFixed(2);
      }
        
        // return Math.round(10 * sum / this.scores.length) / 100
    }


    
//declaring the objects
let bubbaBear = new CrewCandidate("Bubba Bear", 135, [88, 85, 90]);
let maryMaltese = new CrewCandidate("Mary Maltese", 1.5, [93, 88, 97]);
let gladGator = new CrewCandidate("Glad Gator",225, [75, 78, 62]);
console.log(bubbaBear, maryMaltese, gladGator);
// Part 2, #3 - Add a score of 83 for Bubba, the print just his scores array
bubbaBear.addScore(83);
console.log(bubbaBear);
console.log(maryMaltese.average());


//Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.