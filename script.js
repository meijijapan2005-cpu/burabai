const products=[
{cat:"ファッション",name:"Tokyo Street Jacket",price:"¥7,980",old:"¥12,800",off:"-38%",shop:"DEMO FASHION",icon:"🧥"},
{cat:"ガジェット",name:"Wireless Headphones",price:"¥9,900",old:"¥14,900",off:"-34%",shop:"DEMO TECH",icon:"🎧"},
{cat:"コスメ",name:"Sakura Skin Set",price:"¥3,480",old:"¥5,200",off:"-33%",shop:"DEMO BEAUTY",icon:"✦"},
{cat:"フード",name:"Matcha Selection",price:"¥1,500",old:"¥2,000",off:"-25%",shop:"DEMO FOOD",icon:"🍵"},
{cat:"ファッション",name:"Minimal Sneakers",price:"¥6,400",old:"¥9,200",off:"-30%",shop:"DEMO FASHION",icon:"👟"},
{cat:"ガジェット",name:"Compact Keyboard",price:"¥5,980",old:"¥7,980",off:"-25%",shop:"DEMO TECH",icon:"⌨️"},
{cat:"コスメ",name:"Night Glow Serum",price:"¥2,700",old:"¥3,600",off:"-25%",shop:"DEMO BEAUTY",icon:"◇"},
{cat:"フード",name:"Premium Snack Box",price:"¥1,980",old:"¥2,800",off:"-29%",shop:"DEMO FOOD",icon:"🍘"}];
const grid=document.querySelector("#grid"),q=document.querySelector("#q"),empty=document.querySelector("#empty");let filter="";
function render(){const term=q.value.trim().toLowerCase();const list=products.filter(x=>(!filter||x.cat===filter)&&(`${x.cat} ${x.name} ${x.shop}`.toLowerCase().includes(term)));grid.innerHTML=list.map(x=>`<article class="product"><div class="product-visual"><span class="discount">${x.off}</span><span class="demo">DEMO</span><i>${x.icon}</i></div><div class="body"><small>${x.cat}</small><h3>${x.name}</h3><span class="price">${x.price}</span><span class="old">${x.old}</span><div class="merchant">${x.shop}</div><button class="visit" disabled title="提携ショップ接続後に有効になります">ショップで見る ↗</button></div></article>`).join("");empty.style.display=list.length?"none":"block"}
function choose(v){filter=v;document.querySelectorAll(".filters [data-filter]").forEach(b=>b.classList.toggle("active",b.dataset.filter===v));render();document.querySelector("#deals").scrollIntoView({behavior:"smooth"})}
document.querySelector("#go").onclick=render;q.addEventListener("keydown",e=>{if(e.key==="Enter")render()});document.querySelectorAll("[data-filter]").forEach(b=>b.onclick=()=>choose(b.dataset.filter));document.querySelector("#all").onclick=()=>{q.value="";choose("")};render();