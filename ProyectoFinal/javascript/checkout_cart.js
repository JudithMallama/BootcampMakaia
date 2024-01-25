document.getElementById('openPopup').addEventListener('click', function() {
    document.getElementById('popup').style.transform= 'translateX(0)';
  });
  
  document.getElementById('closePopup').addEventListener('click', function() {
    document.getElementById('popup').style.transform = 'translateX(100%)';
  });
  