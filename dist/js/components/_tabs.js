//----------------------------------------------
// Tabs
//---------------------------------------------- 
const Tabs = (() => {
  let s;

  return {
    settings: {
      tabs: document.getElementsByClassName('tabs__item'),
      tab: document.getElementsByClassName('tab')
    },

    init() {
      s = this.settings;
      this.display();
      this.click();
    },

    display() {
      if (s.tab.length) {
        [].forEach.call(s.tab, (tab, idx) => {
          if (idx > 0) tab.style.display = 'none';          
        });
        s.tab[0].classList.add('active');
        s.tabs[0].classList.add('active');
      }
    },

    click() {
      if (s.tabs.length) {
        let currentIdx = 0;
        let prevIdx = currentIdx;

        [].forEach.call(s.tabs, (tab, idx) => {
          tab.addEventListener('click', () => {
            prevIdx = currentIdx;
            currentIdx = idx;

            if (prevIdx !== currentIdx) {
              s.tab[prevIdx].style.display = 'none';
              s.tab[prevIdx].classList.remove('active');
              s.tabs[prevIdx].classList.remove('active');
              s.tab[currentIdx].style.display = 'block';
              s.tab[currentIdx].classList.add('active');
              s.tabs[currentIdx].classList.add('active');
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
export default Tabs;
