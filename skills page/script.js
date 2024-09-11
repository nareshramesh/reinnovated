document.addEventListener('DOMContentLoaded', function() {
    
    const skillImages = document.querySelectorAll('.html-img');
    const infoBox = document.getElementById('infoBox');

    
    const skillInfo = {
        html: "HTML (Hypertext Markup Language) is the standard language for creating web pages. It describes the structure of web pages using markup.",
        css: "CSS (Cascading Style Sheets) is a stylesheet language used to describe the presentation of a document written in HTML or XML.",
        js: "JavaScript is a programming language that is commonly used to create interactive effects within web browsers.",
        figma: "Figma is a vector graphics editor and prototyping tool which is primarily web-based.",
        flutter: "Flutter is an open-source UI software development toolkit created by Google for building natively compiled applications.",
        git: "Git is a distributed version-control system for tracking changes in source code during software development.",
        word: "Microsoft Word is a word processing software developed by Microsoft for creating, editing, formatting, and sharing documents.",
        excel: "Microsoft Excel is a spreadsheet program developed by Microsoft for data analysis and documentation.",
        ppt: "Microsoft PowerPoint is a presentation program, used to create slideshows composed of a series of individual slides."
    };

    
    skillImages.forEach(image => {
        image.addEventListener('click', function() {
            
            const skillId = this.dataset.skill;

            
            infoBox.innerHTML = `<div class="active-skill">${skillInfo[skillId]}</div>`;
        });
    });
});
