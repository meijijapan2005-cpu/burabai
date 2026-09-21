const deals=[
{cat:"ファッション",name:"Urban Night Jacket",price:"¥7,980",old:"¥12,800",off:"-38%",shop:"SAMPLE STORE",icon:"✦"},
{cat:"ガジェット",name:"Wireless Headphones",price:"¥9,900",old:"¥14,900",off:"-34%",shop:"TECH SAMPLE",icon:"◉"},
{cat:"コスメ",name:"Sakura Skin Set",price:"¥3,480",old:"¥5,200",off:"-33%",shop:"BEAUTY SAMPLE",icon:"◇"},
{cat:"フード",name:"Premium Snack Box",price:"¥1,980",old:"¥2,800",off:"-29%",shop:"FOOD SAMPLE",icon:"◌"},
{cat:"ファッション",name:"Minimal Sneakers",price:"¥6,400",old:"¥9,200",off:"-30%",shop:"SAMPLE STORE",icon:"✧"},
{cat:"ガジェット",name:"Compact Keyboard",price:"¥5,980",old:"¥7,980",off:"-25%",shop:"TECH SAMPLE",icon:"⌨"},
{cat:"コスメ",name:"Night Glow Serum",price:"¥2,700",old:"¥3,600",off:"-25%",shop:"BEAUTY SAMPLE",icon:"◈"},
{cat:"フード",name:"Matcha Selection",price:"¥1,500",old:"¥2,000",off:"-25%",shop:"FOOD SAMPLE",icon:"○"}
];
const grid=document.querySelector("#dealGrid"), empty=document.querySelector("#empty"), input=document.querySelector("#searchInput");
function render(q=""){const s=q.trim().toLowerCase();const list=deals.filter(d=>(d.cat+d.name+d.shop).toLowerCase().includes(s));grid.innerHTML=list.map(d=>`<article class="deal"><div class="deal-visual"><span class="badge">${d.off}</span><span class="icon">${d.icon}</span></div><div class="deal-body"><small>${d.cat}</small><h3>${d.name}</h3><div class="prices"><span class="price">${d.price}</span><span class="old">${d.old}</span></div><div class="shop">${d.shop}</div></div></article>`).join("");empty.style.display=list.length?"none":"block"}
render();
document.querySelector("#searchBtn").onclick=()=>render(input.value);
input.addEventListener("keydown",e=>{if(e.key==="Enter")render(input.value)});
document.querySelectorAll("[data-query]").forEach(b=>b.onclick=()=>{input.value=b.dataset.query;render(b.dataset.query);document.querySelector("#deals").scrollIntoView()});
document.querySelector("#showAll").onclick=()=>{input.value="";render()};
document.querySelector("#themeBtn").onclick=()=>{document.body.classList.toggle("light")};
