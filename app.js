const unfinishedProjectsEl = document.querySelectorAll('.unfinished');

unfinishedProjectsEl[0].addEventListener('click', () => {
  alert(
    'Project is not responsive yet, and I am aware that edit has some bugs at the moment'
  );
});
unfinishedProjectsEl[1].addEventListener('click', () => {
  alert(
    ' Project its not finished yet, very basic functionality is present, form is not validated at the moment! '
  );
});
