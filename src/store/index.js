import { createStore } from "vuex";

export default createStore({
  state: {
    projects: null,
    educations: null,
    testimonials: null,
    skills: null,
  },

  mutations: {
    setProjects: (state, projects) => {
      state.projects = projects;
    },
    setEducations: (state, educations) => {
      state.educations = educations;
    },
    setTestimonials: (state, testimonials) => {
      state.testimonials = testimonials;
    },
    setSkills: (state, skills) => {
      state.skills = skills;
    },
    
    
    },
  

  actions: {
    getProjects: async (context) => {
      fetch("https://xolabangaza.github.io/data/db.json")
        .then((res) => res.json())
        .then(({projects}) => context.commit("setProjects", projects));
    },
    getEducations: async (context) => {
      fetch("https://xolabangaza.github.io/data/db.json")
        .then((res) => res.json())
        .then(({educations}) => context.commit("setEducations", educations));
    },
    getTestimonials: async (context) => {
      fetch("https://xolabangaza.github.io/data/db.json")
        .then((res) => res.json())
        .then(({testimonials}) => context.commit("setTestimonials", testimonials));
    },
    getSkills: async (context) => {
      fetch("https://xolabangaza.github.io/data/db.json")
        .then((res) => res.json())
        .then(({skills}) => context.commit("setSkills",skills));
    },

  },
});

