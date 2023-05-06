function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function getNotificationNumber() {
    var notification_number = document.querySelector(".notification_number");
    axios
        .get(`/update-notifications/`, {
            method: "GET",
        })
        .then(response => {
            number = response.data;
            if (response.status == 200) {
                var number = number.number;
                notification_number.innerHTML = `${number}`;
            }
        })
        .catch(error => {
            console.log(error);
            this.error = true;
        })
        .finally(() => this.loading = false);
}