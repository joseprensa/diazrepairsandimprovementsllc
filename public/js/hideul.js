let toggle = (button, elementId) => {
        let element = document.getElementById(elementId);
        let hidden = element.getAttribute("hidden");

        if (hidden) {
            element.removeAttribute("hidden");
            button.innerText = "Hide item";
        } else {
            element.setAttribute("hidden", "hidden");
            button.innerText = "Show item";
        }
    }