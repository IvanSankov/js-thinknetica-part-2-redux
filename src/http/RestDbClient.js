import axios from 'axios';

const TOKEN = '5f9fcd3a231ba42851b4a07a';

export default class RestDbClient {
  constructor() {
    this._client = axios.create({
      baseURL: "https://thinknetica1redux-d43d.restdb.io/rest/",
      timeout: 10000,
      headers: {
        "x-apikey": TOKEN,
      },
    });
  }

  async fetchAllSectionsInfo() {
    const allSections = await this.getSections();
    const allSubsections = await this.getSubSection();

    return allSections.reduce((sections, currentSection) => {
      sections[currentSection._id] = {
        id: currentSection._id,
        title: currentSection.title,
        completed: currentSection.completed,
        subsections: allSubsections
          .filter(subsection => subsection.sectionId === currentSection._id)
          .reduce(reduceSubsections, {})
      };

      return sections;
    }, {});
  }

  getSections() {
    return this._client.get('section').then(response => response.data);
  }

  getSubSection() {
    return this._client.get('subsection').then(response => response.data);
  }
}


function reduceSubsections(subsections, currentSubsection) {
  subsections[currentSubsection._id] = {
    id: currentSubsection._id,
    title: currentSubsection.title,
    completed: currentSubsection.completed,
  }

  return subsections;
}