const CATS = {
    alkali: { label: 'Alkali Metal', c: '#ff6b6b' },
    alkaline: { label: 'Alkaline Earth Metal', c: '#ff9f43' },
    transition: { label: 'Transition Metal', c: '#54a0ff' },
    'post-transition': { label: 'Post-Transition Metal', c: '#48dbfb' },
    metalloid: { label: 'Metalloid', c: '#1dd1a1' },
    nonmetal: { label: 'Nonmetal', c: '#ffeaa7' },
    halogen: { label: 'Halogen', c: '#a29bfe' },
    noble: { label: 'Noble Gas', c: '#fd79a8' },
    lanthanide: { label: 'Lanthanide', c: '#81ecec' },
    actinide: { label: 'Actinide', c: '#55efc4' },
};

const ELS = [
    [1, 'H', 'Hydrogen', 'nonmetal', 1, 1, 1.008],
    [2, 'He', 'Helium', 'noble', 18, 1, 4.003],
    [3, 'Li', 'Lithium', 'alkali', 1, 2, 6.941],
    [4, 'Be', 'Beryllium', 'alkaline', 2, 2, 9.012],
    [5, 'B', 'Boron', 'metalloid', 13, 2, 10.81],
    [6, 'C', 'Carbon', 'nonmetal', 14, 2, 12.011],
    [7, 'N', 'Nitrogen', 'nonmetal', 15, 2, 14.007],
    [8, 'O', 'Oxygen', 'nonmetal', 16, 2, 15.999],
    [9, 'F', 'Fluorine', 'halogen', 17, 2, 18.998],
    [10, 'Ne', 'Neon', 'noble', 18, 2, 20.18],
    [11, 'Na', 'Sodium', 'alkali', 1, 3, 22.99],
    [12, 'Mg', 'Magnesium', 'alkaline', 2, 3, 24.305],
    [13, 'Al', 'Aluminum', 'post-transition', 13, 3, 26.982],
    [14, 'Si', 'Silicon', 'metalloid', 14, 3, 28.086],
    [15, 'P', 'Phosphorus', 'nonmetal', 15, 3, 30.974],
    [16, 'S', 'Sulfur', 'nonmetal', 16, 3, 32.06],
    [17, 'Cl', 'Chlorine', 'halogen', 17, 3, 35.45],
    [18, 'Ar', 'Argon', 'noble', 18, 3, 39.948],
    [19, 'K', 'Potassium', 'alkali', 1, 4, 39.098],
    [20, 'Ca', 'Calcium', 'alkaline', 2, 4, 40.078],
    [21, 'Sc', 'Scandium', 'transition', 3, 4, 44.956],
    [22, 'Ti', 'Titanium', 'transition', 4, 4, 47.867],
    [23, 'V', 'Vanadium', 'transition', 5, 4, 50.942],
    [24, 'Cr', 'Chromium', 'transition', 6, 4, 51.996],
    [25, 'Mn', 'Manganese', 'transition', 7, 4, 54.938],
    [26, 'Fe', 'Iron', 'transition', 8, 4, 55.845],
    [27, 'Co', 'Cobalt', 'transition', 9, 4, 58.933],
    [28, 'Ni', 'Nickel', 'transition', 10, 4, 58.693],
    [29, 'Cu', 'Copper', 'transition', 11, 4, 63.546],
    [30, 'Zn', 'Zinc', 'transition', 12, 4, 65.38],
    [31, 'Ga', 'Gallium', 'post-transition', 13, 4, 69.723],
    [32, 'Ge', 'Germanium', 'metalloid', 14, 4, 72.63],
    [33, 'As', 'Arsenic', 'metalloid', 15, 4, 74.922],
    [34, 'Se', 'Selenium', 'nonmetal', 16, 4, 78.971],
    [35, 'Br', 'Bromine', 'halogen', 17, 4, 79.904],
    [36, 'Kr', 'Krypton', 'noble', 18, 4, 83.798],
    [37, 'Rb', 'Rubidium', 'alkali', 1, 5, 85.468],
    [38, 'Sr', 'Strontium', 'alkaline', 2, 5, 87.62],
    [39, 'Y', 'Yttrium', 'transition', 3, 5, 88.906],
    [40, 'Zr', 'Zirconium', 'transition', 4, 5, 91.224],
    [41, 'Nb', 'Niobium', 'transition', 5, 5, 92.906],
    [42, 'Mo', 'Molybdenum', 'transition', 6, 5, 95.95],
    [43, 'Tc', 'Technetium', 'transition', 7, 5, 98],
    [44, 'Ru', 'Ruthenium', 'transition', 8, 5, 101.07],
    [45, 'Rh', 'Rhodium', 'transition', 9, 5, 102.906],
    [46, 'Pd', 'Palladium', 'transition', 10, 5, 106.42],
    [47, 'Ag', 'Silver', 'transition', 11, 5, 107.868],
    [48, 'Cd', 'Cadmium', 'transition', 12, 5, 112.414],
    [49, 'In', 'Indium', 'post-transition', 13, 5, 114.818],
    [50, 'Sn', 'Tin', 'post-transition', 14, 5, 118.71],
    [51, 'Sb', 'Antimony', 'metalloid', 15, 5, 121.76],
    [52, 'Te', 'Tellurium', 'metalloid', 16, 5, 127.6],
    [53, 'I', 'Iodine', 'halogen', 17, 5, 126.904],
    [54, 'Xe', 'Xenon', 'noble', 18, 5, 131.293],
    [55, 'Cs', 'Cesium', 'alkali', 1, 6, 132.905],
    [56, 'Ba', 'Barium', 'alkaline', 2, 6, 137.327],
    [72, 'Hf', 'Hafnium', 'transition', 4, 6, 178.49],
    [73, 'Ta', 'Tantalum', 'transition', 5, 6, 180.948],
    [74, 'W', 'Tungsten', 'transition', 6, 6, 183.84],
    [75, 'Re', 'Rhenium', 'transition', 7, 6, 186.207],
    [76, 'Os', 'Osmium', 'transition', 8, 6, 190.23],
    [77, 'Ir', 'Iridium', 'transition', 9, 6, 192.217],
    [78, 'Pt', 'Platinum', 'transition', 10, 6, 195.084],
    [79, 'Au', 'Gold', 'transition', 11, 6, 196.967],
    [80, 'Hg', 'Mercury', 'transition', 12, 6, 200.592],
    [81, 'Tl', 'Thallium', 'post-transition', 13, 6, 204.38],
    [82, 'Pb', 'Lead', 'post-transition', 14, 6, 207.2],
    [83, 'Bi', 'Bismuth', 'post-transition', 15, 6, 208.98],
    [84, 'Po', 'Polonium', 'metalloid', 16, 6, 209],
    [85, 'At', 'Astatine', 'halogen', 17, 6, 210],
    [86, 'Rn', 'Radon', 'noble', 18, 6, 222],
    [87, 'Fr', 'Francium', 'alkali', 1, 7, 223],
    [88, 'Ra', 'Radium', 'alkaline', 2, 7, 226],
    [104, 'Rf', 'Rutherfordium', 'transition', 4, 7, 267],
    [105, 'Db', 'Dubnium', 'transition', 5, 7, 268],
    [106, 'Sg', 'Seaborgium', 'transition', 6, 7, 271],
    [107, 'Bh', 'Bohrium', 'transition', 7, 7, 272],
    [108, 'Hs', 'Hassium', 'transition', 8, 7, 270],
    [109, 'Mt', 'Meitnerium', 'transition', 9, 7, 278],
    [110, 'Ds', 'Darmstadtium', 'transition', 10, 7, 281],
    [111, 'Rg', 'Roentgenium', 'transition', 11, 7, 282],
    [112, 'Cn', 'Copernicium', 'transition', 12, 7, 285],
    [113, 'Nh', 'Nihonium', 'post-transition', 13, 7, 286],
    [114, 'Fl', 'Flerovium', 'post-transition', 14, 7, 289],
    [115, 'Mc', 'Moscovium', 'post-transition', 15, 7, 290],
    [116, 'Lv', 'Livermorium', 'post-transition', 16, 7, 293],
    [117, 'Ts', 'Tennessine', 'halogen', 17, 7, 294],
    [118, 'Og', 'Oganesson', 'noble', 18, 7, 294],
    [57, 'La', 'Lanthanum', 'lanthanide', 3, 9, 138.905],
    [58, 'Ce', 'Cerium', 'lanthanide', 4, 9, 140.116],
    [59, 'Pr', 'Praseodymium', 'lanthanide', 5, 9, 140.908],
    [60, 'Nd', 'Neodymium', 'lanthanide', 6, 9, 144.242],
    [61, 'Pm', 'Promethium', 'lanthanide', 7, 9, 145],
    [62, 'Sm', 'Samarium', 'lanthanide', 8, 9, 150.36],
    [63, 'Eu', 'Europium', 'lanthanide', 9, 9, 151.964],
    [64, 'Gd', 'Gadolinium', 'lanthanide', 10, 9, 157.25],
    [65, 'Tb', 'Terbium', 'lanthanide', 11, 9, 158.925],
    [66, 'Dy', 'Dysprosium', 'lanthanide', 12, 9, 162.5],
    [67, 'Ho', 'Holmium', 'lanthanide', 13, 9, 164.93],
    [68, 'Er', 'Erbium', 'lanthanide', 14, 9, 167.259],
    [69, 'Tm', 'Thulium', 'lanthanide', 15, 9, 168.934],
    [70, 'Yb', 'Ytterbium', 'lanthanide', 16, 9, 173.045],
    [71, 'Lu', 'Lutetium', 'lanthanide', 17, 9, 174.967],
    [89, 'Ac', 'Actinium', 'actinide', 3, 10, 227],
    [90, 'Th', 'Thorium', 'actinide', 4, 10, 232.038],
    [91, 'Pa', 'Protactinium', 'actinide', 5, 10, 231.036],
    [92, 'U', 'Uranium', 'actinide', 6, 10, 238.029],
    [93, 'Np', 'Neptunium', 'actinide', 7, 10, 237],
    [94, 'Pu', 'Plutonium', 'actinide', 8, 10, 244],
    [95, 'Am', 'Americium', 'actinide', 9, 10, 243],
    [96, 'Cm', 'Curium', 'actinide', 10, 10, 247],
    [97, 'Bk', 'Berkelium', 'actinide', 11, 10, 247],
    [98, 'Cf', 'Californium', 'actinide', 12, 10, 251],
    [99, 'Es', 'Einsteinium', 'actinide', 13, 10, 252],
    [100, 'Fm', 'Fermium', 'actinide', 14, 10, 257],
    [101, 'Md', 'Mendelevium', 'actinide', 15, 10, 258],
    [102, 'No', 'Nobelium', 'actinide', 16, 10, 259],
    [103, 'Lr', 'Lawrencium', 'actinide', 17, 10, 266],
];

function open_(num, sym, name, cat, mass) {
    const c = CATS[cat].c;
    document.getElementById('mn').textContent = `Atomic Number: ${num}`;
    const msElem = document.getElementById('ms');
    msElem.textContent = sym;
    msElem.style.color = c;
    document.getElementById('mm').textContent = name;
    document.getElementById('mw').textContent = `Atomic Mass: ${mass} u`;
    const mcElem = document.getElementById('mc');
    mcElem.textContent = CATS[cat].label;
    mcElem.style.cssText = `color:${c};border-color:${c}66;background:${c}18`;
    const card = document.getElementById('mcard');
    card.style.borderColor = c + '55';
    card.style.boxShadow = `0 0 50px ${c}22, inset 0 0 30px ${c}08`;
    document.getElementById('modal').classList.add('open');
}

function close_() {
    document.getElementById('modal').classList.remove('open');
}

function buildPeriodicTable() {
    const grid = document.getElementById('grid');
    grid.innerHTML = '';

    const spacer = document.createElement('div');
    spacer.className = 'spacer';
    spacer.style.gridRow = '8';
    grid.appendChild(spacer);

    function ph(txt, col, row) {
        const d = document.createElement('div');
        d.className = 'ph';
        d.textContent = txt;
        d.style.gridColumn = col;
        d.style.gridRow = row;
        grid.appendChild(d);
    }
    ph('57–71', 3, 6);
    ph('89–103', 3, 7);

    function lbl(txt, col, row) {
        const d = document.createElement('div');
        d.className = 'fl-lbl';
        d.textContent = txt;
        d.style.gridColumn = col;
        d.style.gridRow = row;
        grid.appendChild(d);
    }
    lbl('Lanthanides', '1/3', 9);
    lbl('Actinides', '1/3', 10);

    ELS.forEach(([num, sym, name, cat, col, row, mass]) => {
        const el = document.createElement('div');
        el.className = `el ${cat}`;
        el.style.gridColumn = col;
        el.style.gridRow = row;
        el.innerHTML = `<span class="n">${num}</span><span class="s">${sym}</span><span class="nm">${name}</span><span class="ms">${mass}</span>`;
        el.onclick = () => open_(num, sym, name, cat, mass);
        grid.appendChild(el);
    });
}

function buildLegend() {
    const legendContainer = document.getElementById('legend');
    legendContainer.innerHTML = '';
    Object.entries(CATS).forEach(([key, { label, c }]) => {
        const legendItem = document.createElement('div');
        legendItem.className = 'li';
        legendItem.innerHTML = `<div class="ld" style="background:${c}20; border-color:${c}77"></div><span>${label}</span>`;
        legendContainer.appendChild(legendItem);
    });
}

function init() {
    buildPeriodicTable();
    buildLegend();

    const modal = document.getElementById('modal');
    modal.addEventListener('click', (e) => {
        if (e.target.id === 'modal') close_();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') close_();
    });
}

init();