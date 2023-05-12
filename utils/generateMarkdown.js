// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "mit":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]";
      break;
    case "apache2":
      return "[![License: Apache 2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]";
      break;
    case "gplv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]";
      break;
    case "bsd3":
      return "[![License: BSD 3-Clause](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]";
      break;
    case "ccby4":
      return "[![License: CC BY 4.0](https://img.shields.io/badge/License-CC%20BY%204.0-lightgrey.svg)]";
      break;
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "mit":
      return "(https://opensource.org/licenses/MIT)";
      break;
    case "apache2":
      return "(https://opensource.org/licenses/Apache-2.0)";
      break;
    case "gplv3":
      return "(https://www.gnu.org/licenses/gpl-3.0)";
      break;
    case "bsd3":
      return "(https://opensource.org/licenses/BSD-3-Clause)";
      break;
    case "ccby4":
      return "(https://creativecommons.org/licenses/by/4.0/)";
      break;
    default:
      return "";
  }


}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case "mit":
      return renderLicenseBadge(license) + renderLicenseLink(license);
      break;
    case "apache2":
      return renderLicenseBadge(license) + renderLicenseLink(license);
      break;
    case "gplv3":
      return renderLicenseBadge(license) + renderLicenseLink(license);
      break;
    case "bsd3":
      return renderLicenseBadge(license) + renderLicenseLink(license);
      break;
    case "ccby4":
      return renderLicenseBadge(license) + renderLicenseLink(license);
      break;
    default:
      return "";
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
# Description
${data.desc}
# Installation
${data.install}
# Usage
${data.usage}
# Contribution Guidelines
${data.contrib}
# Coding Examples
${data.test}
# Frequently Asked Questions
${data.faq}
# License
${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown;
