const products=[
{cat:"ゲーム",name:"Portable Game Console",merchant:"DEMO GAME",price:"¥29,800",old:"¥43,978",off:"-32%",icon:"🎮",rating:"★ 4.8"},
{cat:"家電・PC",name:"Wireless Earbuds Pro",merchant:"DEMO TECH",price:"¥32,800",old:"¥45,800",off:"-28%",icon:"🎧",rating:"★ 4.7"},
{cat:"家電・PC",name:"Premium Hair Dryer",merchant:"DEMO BEAUTY TECH",price:"¥29,800",old:"¥49,800",off:"-40%",icon:"♨",rating:"★ 4.6"},
{cat:"ファッション",name:"Tokyo Street Sneakers",merchant:"DEMO FASHION",price:"¥11,800",old:"¥15,800",off:"-25%",icon:"👟",rating:"★ 4.5"},
{cat:"コスメ・美容",name:"Facial Treatment Essence",merchant:"DEMO BEAUTY",price:"¥18,900",old:"¥27,500",off:"-30%",icon:"🧴",rating:"★ 4.8"},
{cat:"本・漫画",name:"人気コミック 25巻",merchant:"DEMO BOOKS",price:"¥550",old:"¥770",off:"-35%",icon:"📕",rating:"★ 4.9"},
{cat:"食品・飲料",name:"Premium Matcha Set",merchant:"DEMO FOOD",price:"¥2,480",old:"¥3,400",off:"-27%",icon:"🍵",rating:"★ 4.7"},
{cat:"インテリア",name:"Minimal Table Lamp",merchant:"DEMO HOME",price:"¥4,980",old:"¥6,980",off:"-29%",icon:"💡",rating:"★ 4.6"},
{cat:"旅行",name:"Kyoto Travel Pass",merchant:"DEMO TRAVEL",price:"¥3,900",old:"¥5,500",off:"-29%",icon:"🎫",rating:"★ 4.8"}
];
const grid=document.querySelector("#grid"),search=document.querySelector("#search"),empty=document.querySelector("#empty");let filter="";
function render(){let q=search.value.trim().toLowerCase();let list=products.filter(p=>(!filter||p.cat===filter)&&(`${p.cat} ${p.name} ${p.merchant}`.toLowerCase().includes(q)));grid.innerHTML=list.map(p=>`<article class="product"><div class="product-visual"><span class="discount">${p.off}</span><span class="heart">♡</span><i>${p.icon}</i></div><div class="product-body"><h3>${p.name}</h3><div class="merchant">${p.merchant}</div><div class="prices"><span class="price">${p.price}</span><span class="old">${p.old}</span></div><div class="rating">${p.rating}<span class="demo">DEMO</span></div></div></article>`).join("");empty.style.display=list.length?"none":"block"}
function choose(v){filter=v;document.querySelectorAll(".categories button").forEach(b=>b.classList.toggle("active",b.dataset.filter===v));render();document.querySelector("#deals").scrollIntoView({behavior:"smooth"})}
document.querySelectorAll(".categories button").forEach(b=>b.onclick=()=>choose(b.dataset.filter));document.querySelector("#searchBtn").onclick=render;search.addEventListener("keydown",e=>{if(e.key==="Enter")render()});document.querySelector("#showAll").onclick=()=>{filter="";search.value="";document.querySelectorAll(".categories button").forEach((b,i)=>b.classList.toggle("active",i===0));render()};render();