const unfinishedProjectsEl = document.querySelectorAll('.unfinished');

unfinishedProjectsEl[0].addEventListener('click', () => {
  alert('Project is not responsive yet');
});
unfinishedProjectsEl[1].addEventListener('click', () => {
  alert(
    ' Project its not finished yet, very basic functionality is present, form is not validated at the moment! '
  );
});
