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


// Tab Experience
const tabsTitle = {
    1: {
        company: "Google", 
        role: "UI Engineer", 
        img: "res/icon/google.svg", 
    }, 
    2: {
        company: "Hashnode", 
        role: "Frontend Developer", 
        img: "res/icon/hashnode.svg", 
    }, 
    3: {
        company: "Oculus", 
        role: "Frontend Developer", 
        img: "res/icon/oculus.svg", 
    }, 
}

const tabsContent = {
    1: {
        role    : "UI Engineer", 
        company :"Google",
        year    : "2022 - Present", 
        jobdesc : {
            1: "Design and implementation of visually appealing and intuitive user interfaces for innovative technology products. ", 
            2: "Continuous improvement of the user experience and maintenance of quality standards.", 
            3: "Conducting testing and validation, user research, and collaborating with other teams to ensure quality and effective integration with the final product."
        }
    },
    2: {
        role    : "Frontend Developer", 
        company : "Hashnode",
        year    : "2018 - 2022", 
        jobdesc : {
            1: "Continuous improvement of the user experience and maintenance of quality standards.", 
            2: "Design and implementation of visually appealing and intuitive user interfaces for innovative technology products. ", 
            3: "Conducting testing and validation, user research, and collaborating with other teams to ensure quality and effective integration with the final product."
        }
    },
    3: {
        role    : "Frontend Developer", 
        company : "Oculus", 
        year    : "2015 - 2018", 
        jobdesc : {
            1: "Conducting testing and validation, user research, and collaborating with other teams to ensure quality and effective integration with the final product.",
            2: "Continuous improvement of the user experience and maintenance of quality standards.", 
            3: "Design and implementation of visually appealing and intuitive user interfaces for innovative technology products. ", 
        }
    }
}

const tabTitleContainer = document.querySelector('.tab-title-container')

for (let i in tabsTitle) {
    let div = document.createElement('div')
    div.classList.add('tab-title')
    div.setAttribute('id', i)
    div.innerHTML = `
        <img src="${tabsTitle[i].img}" alt="" />
        <div class="title">
            <big>${tabsTitle[i].company}</big><br />
            <small>${tabsTitle[i].role}</small>
        </div>
    `
    if (i == 1) div.classList.add('active') 
    tabTitleContainer.append(div)
}


const tabContentElement = document.querySelector('.tab-content')
const tabContentDescription = document.querySelector('.tab-content-description')

showTabContent()

tabTitleContainer.addEventListener('click', (e) => {
    for (let child of tabTitleContainer.children) {
        child.classList.remove('active')
    }
    e.target.classList.add('active')

    let id = e.target.getAttribute('id')

    showTabContent(id)
})

function showTabContent(id = 1) {
    let ul = document.createElement('ul')
    ul.classList.add('tab-content-description')

    for (let i in tabsContent[id].jobdesc) {
        let li = document.createElement('li') 
        li.innerHTML = tabsContent[id].jobdesc[i]
        ul.append(li)
    }

    tabContentElement.innerHTML = `
        <big>${tabsContent[id].role} at <span>${tabsContent[id].company}</span></big>
        <br />
        <small>${tabsContent[id].year}</small>
    `

    tabContentElement.append(ul)
}
// End of tab