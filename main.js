const ratingCard=document.getElementById("rating-card")
const thankYouCard=document.getElementById("thank-you-card")
const submit=document.getElementById("submit")
const ratingNodeList=document.getElementsByName("rating")
const rating=[...ratingNodeList]
const ratingMessage=document.getElementById("rating-message")

submit.addEventListener("click",displayThankYou)
function displayThankYou() {
    if (rating.some(currentValue => {return currentValue.checked==true})){
    const selectedRating=rating.filter(currentValue=>{return currentValue.checked==true})[0].labels[0].innerHTML
    ratingCard.style.display="none"
    ratingMessage.innerHTML=`You selected ${selectedRating} out of 5`
    thankYouCard.style.display="flex"
    }
    else return;
}
