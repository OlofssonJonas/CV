
const skills = document.getElementById("myLanguage");
const newSkills = document.getElementById("myNewLanguage")

const mySkills = ["HTML", "CSS", "JAVASCRIPT", "PHP", "Node.js"];

for (const skill of mySkills) {
        const p = document.createElement("p");
        p.classList.add("language");
        p.innerText = skill;
        skills.append(p);

    }

const myLearningSkills = ["React"];

for (const skill of myLearningSkills) {
    const p = document.createElement("p");
    p.classList.add("language")
    p.innerText = skill;
    newSkills.append(p);
}

