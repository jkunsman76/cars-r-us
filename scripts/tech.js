import { getTech } from './database.js'

const technology = getTech()

export const Technology = () => {
    let html = "<h2>Technologies</h2>"

    html += '<select id="tech">'
    html += '<option value="0">Select a technology package</option>'

    const arrayOfOptions = technology.map( (tech) => {
            return `<option value="${tech.id}">${tech.tech}</option>`
        }
    )

    html += arrayOfOptions.join("")
    html += "</select>"
    return html
}