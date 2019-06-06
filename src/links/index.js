import { person } from "../data/constants";

export const homeLink = {
  name: "Home",
  title: "Home",
  url: "/",
  documentTitle: `${person.name} | ${person.profession}`
};

export const blogLink = {
  name: "Blog",
  title: "Blog",
  url: "/blog",
  documentTitle: `Blog | ${person.name}`
};

export const skillsLink = {
  name: "Skills",
  title: "Skills",
  url: "/skills",
  documentTitle: `Skills | ${person.name}`
};

export const cvLink = {
  name: "CV",
  title: "CV",
  url: "/my-cv",
  documentTitle: `CV | ${person.name}`
};

export function postLink(p) {
  return {
    name: p.title,
    title: p.title,
    url: `${blogLink.url}/${p.url_title}`,
    documentTitle: `${p.title} | ${person.name}`
  };
}

export const projectsLink = {
  name: "Portfolio",
  title: "Portfolio",
  url: "/portfolio",
  documentTitle: `Portfolio | ${person.name}`
};

export function projectLink(p) {
  return {
    name: p.name,
    title: p.name,
    url: `${projectsLink.url}/${p.url_name}`,
    documentTitle: `${p.name} | ${person.name}`
  };
}

export const aboutLink = {
  name: "About",
  title: "About",
  url: "/about",
  documentTitle: `About | ${person.name}`
};

export const contactLink = {
  name: "Contact",
  title: "Get In Touch",
  url: "/contact",
  documentTitle: `Contact | ${person.name}`
};
