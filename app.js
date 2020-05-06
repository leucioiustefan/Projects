const unfinishedProjectsEl = document.querySelectorAll('.unfinished');

unfinishedProjectsEl[0].addEventListener('click', () => {
  alert(
    ' Project its not 100% finished, edit and delete will be added, and its not responsive'
  );
});
unfinishedProjectsEl[1].addEventListener('click', () => {
  alert(
    ' Project its not finished yet, very basic functionality is present, form is not validated at the moment! '
  );
});
