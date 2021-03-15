const main = document.querySelector("main")
const joke1 ="A turtle is crossing the road when he's mugged by two snails. When the police show up, they ask him what happened. The shaken turtle replies, I don't know. It all happened so fast."
const joke2 ="Knock, Knock. Who's there? Nobel. Nobel who? Nobe...that's why I knocked!"
const joke3 ="Knock, knock. Who's there? Cows go. Cows go who? No silly, cows go MOO!"

const template = `
    <section>
        <title>My jokes</title>
            <ul>
                <li>${joke1}</li>
                <li>${joke2}</li>
                <li>${joke3}</li>
             </ul>
    </section>
`
main.innerHTML = template;
const body = document.querySelector("body")
const p = document.createElement('P');
p.textContent = "That's all folks!"
body.appendChild(p);
