export function updateBar(index, value, bars, labels) {
    bars[index].style.height = `${value}px`;
    labels[index].textContent = value;
}