let btnSetting = document.getElementById("setting"),
  hideColors = document.querySelector(".change-clr"),
  colors = document.querySelectorAll(".colors > span"),
  colorsAll = document.querySelector(".colorsAll"),
  heart = document.querySelectorAll(".heart i");
sun = document.querySelectorAll("#sun");

// Hide colors Items
btnSetting.addEventListener("click", () => {
  hideColors.classList.toggle("hideColors");
});
window.onload = () => {
 
  
  window.onscroll = () => {
    hideColors.classList.add("hideColors");
  };
  hideColors.classList.add("hideColors");
};

// Change colors
const root = document.documentElement,
  computedStyles = window.getComputedStyle(root),
  clr = computedStyles.getPropertyValue("--main-clr");
  
  // console.log(color);
  function color(color) {
    root.style.setProperty("--main-clr", `${color}`);
    localStorage.setItem("color", `${color}`);
  }

getItemClr = localStorage.getItem("color") || "";
root.style.setProperty("--main-clr", `${getItemClr}`);

// Set Dark Theme

sun.forEach((element) => {
  let SetTheme = document.body,
    Theme;
  element.addEventListener("click", () => {
    SetTheme.classList.toggle("theme-dark");
    if (SetTheme.classList.contains("theme-dark")) {
      Theme = "dark";
      console.log("dark Mode");
      element.className = "fas fa-moon";
    } else {
      Theme = "Light";
      element.className = "fas fa-sun";
      console.log("Light Mode");
    }
    // Set Theme
    localStorage.setItem("theme", Theme);
  });
});

// Get Theme
let GetTheme = localStorage.getItem("theme");
if (GetTheme === "dark") {
  document.body.classList.add("theme-dark");
}

// Animation Scroll

let observe = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
})

let hideClass = document.querySelectorAll('.hide');

hideClass.forEach(element => observe.observe(element));


// btn Like Projects

heart.forEach(e => {
  let fill;
  e.addEventListener("click", () => {
    if (e.className.includes("far fa-heart")) {
      e.className = "fas fa-heart";
      e.style.color = "red";
      fill = "heart-fill";
    } else {
      e.className = "far fa-heart";
      e.style.color = "var(--dark-clr)";
      fill = "heart-empty";
    }
    
  });
});

// Change Language

let ar = document.getElementById("arabic"),
  PublicSetting = document.querySelector(".public-setting");
  ;

// const translate = {
//   en: {
//     Home: "Home",
//     aboutLink: "About",
//     Projects: "Projects",
//     ContactMe: "Contact me",
//     logout: "Logout",
//     name: "Hi, I'm Sami Moh",
//     job: "FullStack Developer",
//     aboutBrief:
//       "Experienced web developer with a background in HTML, CSS, Bootstrap, JavaScript, PHP, MySQL, and Laravel. Specializing in building high-quality websites and web applications with exceptional user experiences. Proficient in Laravel for scalable solutions, HTML/CSS/Bootstrap for visually appealing designs, and PHP/MySQL for complex back-end systems. Committed to staying current with industry trends and delivering exceptional results.",
//     aboutMe: "About Me",
//     Brief: "Brief about me",
//     MySkills: "My Skills",
//     front: "Front End :",
//     back: "Back End :",
//     LastProjects: "Last Project",
//     changeLang: "Change Language",
//     ChooseClr: "Choose Color",
//     developed: "Developed by ❤️Sami Moh ❤️",
//   },
//   ar: {
//     Home: "الرئسية",
//     aboutLink: "عنا",
//     Projects: "المشاريع",
//     ContactMe: "تواصل معي",
//     logout: "خروج",
//     name: "مرحبا انا سامي",
//     jop: "مطور ويب",
//     aboutBrief:
//       "مطور وب ذو خبرة تتضمن HTML، CSS، Bootstrap، JavaScript، PHP، MySQL، و Laravel. متخصص في بناء مواقع وتطبيقات وب ذات جودة عالية وتجربة مستخدم كبيرة. محترف في Laravel لحلول قابلة للتوسع، HTML/CSS/Bootstrap لتصميمات جذابة بشكل بصري، و PHP/MySQL لنظم خلفية معقدة. ملتزم بالبحث عن الأحدث في الصناعة وتلبية النتائج الذاتية بشكل جيد.",
//     aboutMe: "عني",
//     Brief: "نبذة عني",
//     MySkills: "مهاراتي",
//     front: ": الواجهة الامامية ",
//     back: " : الواجهة الخلفية" ,
//     LastProjects: "اخر مشاريعي",
//     changeLang: "تغيير اللغة",
//     ChooseClr: "اضغط على اللون",
//     developed: " مطور بواسطة ❤️سامي محمد ❤️",
//   },
// };

// function changeLang(lang) {
//   document.querySelector('#Home').textContent = translate[lang].Home;
//   document.querySelector('#aboutLink').textContent = translate[lang].aboutLink;
//   document.querySelector('#projects').textContent = translate[lang].Projects;
//   document.querySelector('#contactMe').textContent = translate[lang].ContactMe;
//   document.querySelector('#logout').textContent = translate[lang].logout;
//   document.querySelector('#name').textContent = translate[lang].name;
//   document.querySelector('#job').textContent = translate[lang].job;
//   document.querySelector("#aboutBrief").textContent = translate[lang].aboutBrief;
//   document.querySelector("#MySkills").textContent = translate[lang].MySkills;
//   document.querySelector("#front").textContent = translate[lang].front;
//   document.querySelector("#back").textContent = translate[lang].back;
//   document.querySelector("#aboutMe").textContent = translate[lang].aboutMe;
//   document.querySelector("#LastProjects").textContent = translate[lang].LastProjects;
//   document.querySelector("#changeLang").textContent = translate[lang].changeLang;
//   document.querySelector("#ChooseClr").textContent = translate[lang].ChooseClr;
//   document.querySelector("#developed").textContent = translate[lang].developed;
  
//   const ReverseDirection = (direction) => { // if lang arabic it's will apply direction
//     return direction === 'ar' ?  'row-reverse' :'row';
//   }
//     flex_reverse = [
//       document.body,
//       document.querySelector(".main-area .content"),
//       document.querySelector(".container"),
//       ...document.querySelectorAll('.links > a')
//     ];
//     flex_reverse.forEach((e) => {
//       e.style.flexDirection = ReverseDirection(lang);
//     });
//   }




























// let Likes = document.querySelectorAll('#like');
// heart.forEach((btnLike) => {
//   btnLike.addEventListener("click", () => {
//     const project = btnLike.closest(".card");
//     const project_id = project.querySelector('#idProducts').textContent;
//     const displayLike = project.querySelector('#like');
//     let like = localStorage.getItem(`like-${project_id}`) || 0;
//     localStorage.setItem(`like-${project_id}`, ++like);
//     displayLike.textContent = like;
    
//   });
// });


// let btns = document.querySelectorAll('[area-label="Follow"]');

// btns.forEach((element) => {element.click()});


