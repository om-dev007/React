function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('targer', reactElement.props.targer)
    container.appendChild(domElement)
}

const reactElement = {
    type: "a",
    props: {
        href: "https://google.com",
        targer: '_blank'
    },
    children: 'Click me to visit google'
}

const mainCont = document.querySelector(".root")

customRender(reactElement, mainCont)