var storeOtp = [];
var maxArraySize = 3;
var compareArray = [1,2,3,4];

$(".otp-digit").on("input", function() {
    var otpValue = $(this).val(); // Get the value of the current input
    if (otpValue.length >= 1) {
        otpValue = otpValue.slice(0, 1); // Trim the value to only the first character
        $(this).val(otpValue); // Update the input field value
            storeOtp.push(parseInt(otpValue)); // Parse the value and add it to storeOtp array
        if (compareArrays(storeOtp, compareArray)) {
            alert("Verification Success");
            console.log("Verification Success");
        }
    }
    if ($(this).val().length > 0) {
        $(this).next(".otp-digit").focus();
    } else {
        $(this).prev(".otp-digit").focus();
    }
});

// Function to compare arrays
function compareArrays(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (var i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    }
    return true;
}
