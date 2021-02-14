const button = document.querySelector(".fireLambda");

button.addEventListener("click", handleClick);

let count = 0;

function handleClick() {
	const contentEl = document.querySelector(".content");
	count++;
	if (count <= 3) {
		fireLambda().then((data) => {
			contentEl.innerHTML =
				"<p>" +
				data +
				"</p>" +
				"<p>You've called this Lambda " +
				count +
				" times</p>";
		});
	}

	if (count > 3) {
		contentEl.innerHTML =
			"<p>Alright that's enough. I have to pay per compute time ya know...</p>";
		button.disabled = true;
		button.innerHTML = "You've ran out of clicks";
	}
}

function fireLambda() {
	const request = fetch("<api-gateway-endpoint>");
	return request.then((response) => {
		return response.json();
	});
}
