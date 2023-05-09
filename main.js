const skills = {
    1: {
        name: "HTML", 
        img:"res/icon/html.svg"
    },
    2: {
        name: "CSS", 
        img:"res/icon/css.svg"
    },
    3: {
        name: "JavaScript", 
        img:"res/icon/js.svg"
    },
    4: {
        name: "TypeScript", 
        img:"res/icon/ts.svg"
    },
    5: {
        name: "React", 
        img:"res/icon/react.svg"
    },
    6: {
        name: "NextJS", 
        img:"res/icon/next.svg"
    },
    7: {
        name: "NodeJS", 
        img:"res/icon/node.svg"
    },
    8: {
        name: "Express", 
        img:"res/icon/exp-js.svg"
    }
}

const skillsContainer = document.querySelector('.skills-list')

for (let i in skills) {
    let li = document.createElement('li')
    li.classList.add('skill', 'body-text', 'tag')
    li.innerHTML = `
        <img src="${skills[i].img}" alt="${skills[i].name}" /> ${skills[i].name}
    `
    skillsContainer.append(li)
}