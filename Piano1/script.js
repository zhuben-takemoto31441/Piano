const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm']
const BLACK_KEYS = ['s', 'd', 'g', 'h', 'j']

const keys = document.querySelectorAll('.key')
const whiteKeys = document.querySelectorAll('.key.white')
const blackKeys = document.querySelectorAll('.key.black')
const finger = document.querySelector(".finger");

	
keys.forEach(key => {
  key.addEventListener('click',
  () => { playNote(key);
          showFinger(key);})

  key.addEventListener("mouseup", function () {
            hideFinger(); // 隱藏手指頭
          });
        })
document.addEventListener('keydown', e => {
  if (e.repeat) return
  const key = e.key
  const whiteKeyIndex = WHITE_KEYS.indexOf(key)
  const blackKeyIndex = BLACK_KEYS.indexOf(key)

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex])
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex])
})

function playNote(key) {
  const noteAudio = document.getElementById(key.dataset.note)
  noteAudio.currentTime = 0
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}
function showFinger(key) {
  const keyRect = key.getBoundingClientRect();
  finger.style.left = keyRect.left + keyRect.width / 2 - 25 + "px";
  finger.style.top = keyRect.bottom + "px";
  finger.style.display = "block";
}

function hideFinger() {
  finger.style.display = "none";
}
 
 