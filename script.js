function toggleFireworks() {
  const fireworks = document.querySelectorAll('.firework');
  const checkbox = document.getElementById('open');
  fireworks.forEach(firework => {
    firework.style.display = checkbox.checked ? 'block' : 'none';
  });
}

document.addEventListener('click', function playMusic() {
  const audio = document.getElementById('audio');
  audio.play(); // Start the music
  document.removeEventListener('click', playMusic); // Remove the event listener after the first click
});