export function renderBars(array, arrayContainer) {
    for (let i = 0; i < array.length; i++) {

        const wrapper = document.createElement("div");
        wrapper.classList.add("bar-wrapper");

        const label = document.createElement("div");
        label.classList.add("label")
        label.textContent = array[i];

        const bar = document.createElement("div");
        bar.classList.add("bar");
        bar.style.height = `${array[i]}px`;

        wrapper.appendChild(label);
        wrapper.appendChild(bar);

        arrayContainer.appendChild(wrapper);
    }
}