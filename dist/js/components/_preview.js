//----------------------------------------------
// Preview
//---------------------------------------------- 
const Preview = (() => {
  let s;

  return {
    settings: {
      img: document.getElementsByClassName('preview__img'),
      post: document.getElementsByClassName('preview')
    },

    init() {
      s = this.settings;
      this.display();
      this.mouseenter();
    },

    display() {
      if (s.img.length) {
        [].forEach.call(s.img, (img, idx) => {
          if (idx > 0) img.style.display = 'none';
        });
      }
    },

    mouseenter() {
      if (s.post.length) {
        let currentIdx = 0;
        let prevIdx = currentIdx;

        [].forEach.call(s.post, (preview, idx) => {
          preview.addEventListener('mouseenter', () => {
            prevIdx = currentIdx;
            currentIdx = idx;

            if (prevIdx !== currentIdx) {
              s.img[prevIdx].style.display = 'none';
              s.img[currentIdx].style.display = 'block';
            }
          });
        });
      }
    }
  }
})();

//----------------------------------------------
// Exports
//----------------------------------------------
export default Preview;
