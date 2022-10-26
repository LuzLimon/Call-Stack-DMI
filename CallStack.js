// To the variable MyFriendCats type var we assign the value 2.
var MyFriendCats = 2;

// Here we execute the showMyCats function where it will show us in console the text of "My Cats" and the number 3.
function showMyCats(){
    console.log('My Cats', MyCats);
    showMyFriendCats(); // Call the showMyFriendCats function.
}

//  Here we execute the showMyFriendCats function where it will show us in console the text of "My Friend Cats" and the number 2.
function showMyFriendCats(){
    console.log('My Friend Cats', MyFriendCats);
    showMyUncleCats(); // Call to the showMyUncleCats function.
}

// Here we execute the showMyUncleCats function where it will show us on console the text of "My Uncle Does Not Cats".
function showMyUncleCats(){
    console.log('My Uncle Does Not Cats');
}

// showMyCats is the function that runs first since here we are making a call to it.
showMyCats();

// To the variable MyCats type var we assign the value 3.
var MyCats = 3;