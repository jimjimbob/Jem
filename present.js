function openPopup(projectName) {
    document.getElementById('popup').style.display = 'flex';

    document.getElementById('project-title').textContent = projectName;
    document.getElementById('project-info').textContent = "I'm currently transforming one of my Scratch projects into a Python-based application. The original Scratch project, which involved creating a password system, is being adapted to leverage Python's programming capabilities. This transition involves translating the block-based logic into Python code, enhancing its functionality and scalability. The new Python version aims to offer more robust features and greater flexibility, allowing for better integration with other applications and more sophisticated security measures.";
    document.getElementById('project-image').src = 'img/noImage.png';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
