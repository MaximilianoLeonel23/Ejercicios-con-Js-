"use strict";

const info = [
  {
    title: "Suspendisse et ipsum purus.",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis interdum turpis. Donec posuere euismod eros, at vestibulum felis luctus sed. Aliquam semper dui ac tortor pellentesque, in mattis dolor placerat. Nullam at porttitor elit. Vestibulum et risus ex. Nam mi leo, porttitor nec turpis id, dignissim rhoncus justo. Morbi rhoncus, mi vitae aliquam sollicitudin, metus enim congue risus, eget varius libero libero ac felis. Integer suscipit ligula et euismod aliquet. Nulla facilisi. Cras porta facilisis enim quis viverra. Proin quis consequat nulla. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis interdum turpis. Donec posuere euismod eros, at vestibulum felis luctus sed. Aliquam semper dui ac tortor pellentesque, in mattis dolor placerat. Nullam at porttitor elit. Vestibulum et risus ex. Nam mi leo, porttitor nec turpis id, dignissim rhoncus justo. Morbi rhoncus, mi vitae aliquam sollicitudin, metus enim congue risus, eget varius libero libero ac felis. Integer suscipit ligula et euismod aliquet. Nulla facilisi. Cras porta facilisis enim quis viverra. Proin quis consequat nulla.",
    sign: "Integer suscipit ligula",
  },
  {
    title: "Integer ultricies turpis risus.",
    content:
      "Praesent hendrerit, nisl sed posuere aliquam, nunc diam tempor urna, nec convallis mauris erat sed turpis. Cras vel nisl quis erat sagittis sollicitudin. Phasellus ligula ex, egestas id quam sed, porta mattis sapien. Fusce fermentum eu erat nec mattis. Sed sit amet est sodales ante mattis suscipit. Ut dapibus lacinia pretium. Nunc iaculis commodo ligula quis mollis. Fusce aliquet congue eros, tempus ornare purus pellentesque commodo. Fusce sit amet justo diam. Donec tincidunt molestie quam, ut rutrum turpis luctus eget. Etiam pretium sed nunc eget interdum. Aliquam sed congue dolor. Praesent hendrerit, nisl sed posuere aliquam, nunc diam tempor urna, nec convallis mauris erat sed turpis. Cras vel nisl quis erat sagittis sollicitudin. Phasellus ligula ex, egestas id quam sed, porta mattis sapien. Fusce fermentum eu erat nec mattis. Sed sit amet est sodales ante mattis suscipit. Ut dapibus lacinia pretium. Nunc iaculis commodo ligula quis mollis. Fusce aliquet congue eros, tempus ornare purus pellentesque commodo. Fusce sit amet justo diam. Donec tincidunt molestie quam, ut rutrum turpis luctus eget. Etiam pretium sed nunc eget interdum. Aliquam sed congue dolor.",
    sign: "Phasellus porttitor consectetur",
  },
  {
    title: "Pellentesque quis interdum turpis.",
    content:
      "Vestibulum non enim felis. Quisque maximus enim id tristique semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus hendrerit mi at bibendum. Maecenas mollis blandit urna, ut consectetur lorem fringilla consectetur. In nec purus sit amet nisl tincidunt viverra. Praesent rutrum hendrerit pellentesque. Suspendisse facilisis laoreet libero eu porttitor. Curabitur mollis tempor odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut congue turpis leo. Quisque vestibulum tristique erat, at sagittis eros consequat vitae. Donec consequat sed mauris vitae ultricies. Morbi porta sagittis massa id aliquet. Integer eu tempor justo. Mauris vel nisl lectus. Vestibulum non enim felis. Quisque maximus enim id tristique semper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin cursus hendrerit mi at bibendum. Maecenas mollis blandit urna, ut consectetur lorem fringilla consectetur. In nec purus sit amet nisl tincidunt viverra. Praesent rutrum hendrerit pellentesque. Suspendisse facilisis laoreet libero eu porttitor. Curabitur mollis tempor odio. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Ut congue turpis leo. Quisque vestibulum tristique erat, at sagittis eros consequat vitae. Donec consequat sed mauris vitae ultricies. Morbi porta sagittis massa id aliquet. Integer eu tempor justo. Mauris vel nisl lectus.",
    sign: "Aenean ultricies",
  },
  {
    title: "Donec eu libero non turpis porttitor tempor in.",
    content:
      "Donec et ex a metus sagittis varius et a eros. Suspendisse potenti. Proin eu bibendum massa. In gravida lectus eget sem consectetur egestas. Nulla tempus et elit venenatis tristique. Aenean ut auctor nibh. Proin tellus nisi, molestie id dui non, rhoncus tempus diam. Ut imperdiet id ex ac hendrerit. Maecenas vestibulum ut tortor eget porta. Aliquam facilisis sagittis risus, at iaculis turpis placerat et. Duis ultricies at urna quis luctus. Cras a felis id velit venenatis convallis. Aliquam eros libero, gravida et enim ac, luctus gravida justo. Fusce id nibh lectus. In a condimentum tellus, a egestas nunc. Sed congue metus et sagittis vehicula. Donec et ex a metus sagittis varius et a eros. Suspendisse potenti. Proin eu bibendum massa. In gravida lectus eget sem consectetur egestas. Nulla tempus et elit venenatis tristique. Aenean ut auctor nibh. Proin tellus nisi, molestie id dui non, rhoncus tempus diam. Ut imperdiet id ex ac hendrerit. Maecenas vestibulum ut tortor eget porta. Aliquam facilisis sagittis risus, at iaculis turpis placerat et. Duis ultricies at urna quis luctus. Cras a felis id velit venenatis convallis. Aliquam eros libero, gravida et enim ac, luctus gravida justo. Fusce id nibh lectus. In a condimentum tellus, a egestas nunc. Sed congue metus et sagittis vehicula.",
    sign: "Phasellus mattis odio lacus",
  },
];

// Tabs
const tabsContainer = document.querySelector(".tabs_container");
const tabContainer = new Array(...document.querySelectorAll(".tab_container"));
const tab = document.querySelectorAll(".tab");

// Información

const title = document.querySelector(".info_title");
const p = document.querySelector(".info_p");
const sign = document.querySelector(".info_sign");

// tabsContainer.addEventListener("click", e => {
//     e.preventDefault();
//     console.log(e.currentTarget);
//    if (e.currentTarget.classList.contains("tab_container")) {

//    }
// })

tabContainer.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    // Primera forma
    // tabContainer.forEach(act => {
    //     act.classList.remove("active")
    // })

    // Segunda forma
    for (tab of tabContainer) {
      tab.classList.remove("active");
    }

    e.currentTarget.classList.add("active");

    const currTab = tabContainer.indexOf(e.currentTarget);
    console.log(currTab);

    // Cambia la información
    changeTabInfo(currTab);
  });
});

const changeTabInfo = function (currTab) {
  title.textContent = info[currTab].title;
  p.textContent = info[currTab].content;
  sign.textContent = info[currTab].sign;
};
