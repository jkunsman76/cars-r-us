import { getInterior, setInterior } from './database.js'

const interior = getInterior()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const Interior = () => {
    let html = "<h2>Interiors</h2>"

    html += '<select id="interior">'
    html += '<option value="0">Select an interior package</option>'

    const arrayOfOptions = interior.map((interior) => {
        return `<option value="${interior.id}">${interior.type}</option>`
    }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}