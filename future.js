function openPopup(projectName) {
    document.getElementById('popup').style.display = 'flex';

    document.getElementById('project-title').textContent = projectName;
    document.getElementById('project-info').textContent = 'Future projects soon(tm) ';
    document.getElementById('project-image').src = 'img/noImage.png';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}
