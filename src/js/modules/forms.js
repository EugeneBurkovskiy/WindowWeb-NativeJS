

function forms() {

    const form = document.querySelectorAll("form"),
        input = document.querySelectorAll("input"),
        phoneInputs = document.querySelectorAll('input[name="user_phone"]');

    phoneInputs.forEach(item => {
        item.setAttribute('type', 'number');
    });

    const postData = async (url, data) => {
        document.querySelector(".status").textContent = "Please wait";
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });

        return await res.text();
    };

    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();
            const element = document.createElement('div');
            element.classList.add('status');
            item.append(element);
            const formData = new FormData(item);
            postData("assets/server.php", formData)
                .then(result => {
                    console.log(result);
                    element.innerHTML = `Your message has been send`;
                })
                .catch(err => {
                    element.innerHTML = `Something went wrong...`;
                })
                .finally(() => {
                    setTimeout(() => { element.remove(); }, 5000);
                    input.forEach(item => {
                        item.value = ``;
                    });
                });
        });
    });

}

export default forms;