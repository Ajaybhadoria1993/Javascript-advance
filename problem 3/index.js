function generatecard() {

  //name input field
  const nameelement = document.getElementById("Sname"); //get name value from input
  const namevalue = nameelement.value

  const cardname = document.getElementById("uname") //assign value to name
  cardname.innerHTML = namevalue

  //collage name input field

  const collageelement = document.getElementById("Cname")
  const valuecollage = collageelement.value

  const cardcollage = document.getElementById("ucollage")
  cardcollage.innerHTML = valuecollage;

  //Location input field
  const locationelement = document.getElementById("Lname")
  const valuelocation = locationelement.value;

  const cardlocation = document.getElementById("ulocation")
  cardlocation.innerHTML = valuelocation;

  // Display final generated card to user 
  document.getElementById("collegeCard").display = "block";


  //image
}
  function loadimage(event) {
    const image= document.getElementById("imgdisplayed");
    image.src=URL.createObjectURL(event.target.files[0]);
  }



