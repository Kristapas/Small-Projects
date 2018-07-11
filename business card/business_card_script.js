window.addEventListener("load", e => {

    if (window.localStorage.length === 0) {
        document.getElementById("business-card").classList.add("hidden");
    } 

    const getFormData = () => {
        const formInputs = document.querySelectorAll("form input");
        const formTextarea = document.querySelector("form textarea");
        let inputValues = {};
        formInputs.forEach((val) => {
            inputValues[val.id] = val.value;
        });
        inputValues[formTextarea.id] = formTextarea.value;
        return inputValues;
    };

    const drawCard = (data) => {
        let result = "";
  
        Object.keys(data).forEach((key) => {
            result = `${result} <p class="line"><span class='place'>${document.getElementById(key).placeholder}:</span> ${data[key]}</p>`;
            window.localStorage.setItem(key, data[key]);
        });
        document.getElementById("business-card").innerHTML =result;
    }

    const fromStorage = () => {
        const localStorageKeys = Object.keys(window.localStorage);
        const storageData = {};
        localStorageKeys.forEach((val) => {
            storageData[val] = window.localStorage.getItem(val);
        });
        drawCard(storageData);
    }

    document.getElementById("btn").addEventListener("click", e => {
        e.preventDefault();
        document.getElementById("business-card").classList.remove("hidden");
        const data = getFormData();
        return drawCard(data);
    });

    fromStorage();

});