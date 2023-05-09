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
        name: "Next.js", 
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
        <img class="icon" src="${skills[i].img}" alt="${skills[i].name}" /> ${skills[i].name}
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
        <img class="icon" src="${tabsTitle[i].img}" alt="" />
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





// Projectsss
const projectList = {
    1: {
        title   : "Glib Portfolio",
        img     : "res/project/1.jpg", 
        desc    : "Digital agency is a landing page built with the latest version of next.js using best practices.",
        tagList : ["HTML", "Tailwind", "TypeScript", "Next.js"], 
        ghLink  : "#", 
        projectLink: "#",
    },
    2: {
        title   : "NFT Marketplace",
        img     : "res/project/2.jpg", 
        desc    : "Digital agency is a landing page built with the latest version of next.js using best practices.",
        tagList : ["HTML", "Tailwind", "TypeScript", "Next.js"], 
        ghLink  : "#", 
        projectLink: "#",
    },
    3: {
        title   : "Fintech landing",
        img     : "res/project/3.jpg", 
        desc    : "Digital agency is a landing page built with the latest version of next.js using best practices.",
        tagList : ["HTML", "Tailwind", "Next.js"], 
        ghLink  : "#", 
        projectLink: "#",
    },
    4: {
        title   : "Digital Agency",
        img     : "res/project/4.jpg", 
        desc    : "Digital agency is a landing page built with the latest version of next.js using best practices.",
        tagList : ["HTML", "Tailwind", "TypeScript", "HTML", "Tailwind", "TypeScript", "HTML", "Tailwind", "TypeScript"], 
        ghLink  : "#", 
        projectLink: "#",
    },
}


const projectContainer = document.querySelector('.project-container')

for (let prop in projectList) {
    let div = document.createElement('div')
    div.classList.add('project')

    let h3 = document.createElement('h3')
    h3.classList.add('project-title')
    h3.innerHTML = projectList[prop].title

    let img = document.createElement('img')
    img.classList.add("project-image")
    img.src = projectList[prop].img
    img.alt = "Project Image"   



    let tagList = document.createElement('div')
    tagList.classList.add('project-tag-list')

    for (let tag of projectList[prop].tagList) {
        let tagEl = document.createElement('small')
        tagEl.classList.add('tag')
        tagEl.innerHTML = tag

        tagList.append(tagEl)
    }



    let projectTagListWrapper = document.createElement('div')
    projectTagListWrapper.classList.add('project-tag-list-wrapper')
    projectTagListWrapper.append(tagList)

    let projectLinkWrapper = document.createElement('div')
    projectLinkWrapper.classList.add('project-link')
    projectLinkWrapper.innerHTML = `
            <a href="${projectList[prop].ghLink}" title="View project on Github">
                <img src="res/icon/gh.svg" alt=""/>
            </a>
            <a href="${projectList[prop].projectLink}" title="View Project detail in new tab">
                <img src="res/icon/newtab.svg" alt=""/>
            </a>
    `
    projectTagListWrapper.append(projectLinkWrapper)
    
    
    let p = document.createElement('p')
    p.classList.add('body-text')
    p.innerHTML = projectList[prop].desc
    
    div.append(h3)
    div.append(img)
    div.append(projectTagListWrapper)
    div.append(p)

    projectContainer.append(div)
}



// Theme Switcher

if (!localStorage.getItem('theme')) {
    localStorage.setItem('theme', 'light')
}

let getTheme = localStorage.getItem('theme')

// If user switch on the dark mode button 
// Set item local Storage 'theme' => dark

changeTheme() // change the theme onload 

document.querySelector('.ic-sun').addEventListener('click', function () {
    if (getTheme == 'light') {
        // On click set to dark mode
        localStorage.setItem('theme', 'dark')
        getTheme = 'dark'
        
    } else if (getTheme == 'dark') {
        // On click set to light mode
        localStorage.setItem('theme', 'light')
        getTheme = 'light'
    }

    changeTheme()
})


function changeTheme() {
    if (getTheme == 'dark') document.querySelector('html').classList.add('dark'), InvertColor();
    else document.querySelector('html').classList.remove('dark'), InvertColor()
}

function InvertColor() {
    if (document.querySelector('html').classList.contains('dark')) {
        // console.log('true');
        document.querySelectorAll('.icon').forEach(icon => {
            icon.style.filter = "invert(1)"
        });
    } else {
        // console.log('false');
        document.querySelectorAll('.icon').forEach(icon => {
            icon.style.filter = "invert(0)"
        });
        
    }
}