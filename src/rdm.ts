export function rdmNumber  (element: HTMLButtonElement) {

    
    const rdm = () => {
        const num = 34
        const rdm : number = Math.floor(Math.random() * num)
        element.innerHTML = `Random number is ${rdm}`
    }


    element.addEventListener('click', () => rdm())

    rdm()

}