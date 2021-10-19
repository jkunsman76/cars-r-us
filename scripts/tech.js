import { getTech } from './database'

const technology = getTech()

export const Technologies = () => {
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