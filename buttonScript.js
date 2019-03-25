var form = document.getElementById('searchform');
function resetClick(form) {
   if (confirm('Do you want to reset?')) {
       form.submit();
   } else {
       return false;
   }
}
