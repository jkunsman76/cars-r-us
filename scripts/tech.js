import { getTech, setTech } from './database.js'

const technology = getTech()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "tech") {
            setTech(parseInt(event.target.value))
        }
    }
)

export const Technology = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option name="tech" value="0">Select a technology package</option>'

    const arrayOfOptions = technology.map((tech) => {
        return `<option value="${tech.id}">${tech.tech}</option>`
    }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}