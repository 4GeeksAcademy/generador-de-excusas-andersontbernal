import "./style.css";



window.onload = () => {
  document.querySelector("#btn").addEventListener("click", () => {
  document.querySelector("#the-excuse").innerHTML = generateExcuse();
});
  console.log("Hello Rigo from the console!");
};
let generateExcuse = () => {

  let pronoun = ["A", "The"];
  let subject = ["jogger", "racoon", "dog", "driver", "comedian", "pinecone"];
  let action = ["took my", "threw my", "yelled at my", "stole my", "bit my"];
  let possession = ["homework", "toe", "car", "shoe"];
  let where = ["on the street", "in my house", "in my driveway"];
  
  let proIndx= Math.floor(Math.random() * pronoun.length);
  let subIndx= Math.floor(Math.random() * subject.length);
  let actionIndx= Math.floor(Math.random() * action.length);
  let possessionIndx= Math.floor(Math.random() * possession.length);
  let whereIndex= Math.floor(Math.random() * where.length);
  
  return pronoun[proIndx] + " " + subject[subIndx] + " " + action[actionIndx] + " " + possession[possessionIndx] + " " + where[whereIndex] 
};
