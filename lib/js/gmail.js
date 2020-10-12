function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "cs6440.jlu348.min.pro3.test@gmail",
	Password : "ljl15320",
	To : 'jlu348@gatech.edu',
	From : "cs6440.jlu348.min.pro3.test@gmail",
	Subject : "TEST",
	Body : "TESTING",
	}).then(
		message => alert("mail sent successfully")
	);
}