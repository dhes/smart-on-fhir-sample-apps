let ethnicityExample = [
  {
    extension: [
      {
        url: "ombCategory",
        valueCoding: {
          system: "urn:oid:2.16.840.1.113883.6.238",
          code: "2135-2",
          display: "Hispanic or Latino",
        },
      },
      {
        url: "detailed",
        valueCoding: {
          system: "urn:oid:2.16.840.1.113883.6.238",
          code: "2184-0",
          display: "Dominican",
        },
      },
      {
        url: "detailed",
        valueCoding: {
          system: "urn:oid:2.16.840.1.113883.6.238",
          code: "2148-5",
          display: "Mexican",
        },
      },
      {
        url: "text",
        valueString: "Hispanic or Latino",
      },
    ],
    url: "http://hl7.org/fhir/us/core/StructureDefinition/us-core-ethnicity",
  },
];
let mixedRaceExample = [
  {
    url: "http://hl7.org/fhir/us/core/StructureDefinition/us-core-race",
    extension: [
      {
        url: "ombCategory",
        valueCoding: {
          system: "urn:oid:2.16.840.1.113883.6.238",
          code: "2106-3",
          display: "White",
        },
      },
      {
        url: "ombCategory",
        valueCoding: {
          system: "urn:oid:2.16.840.1.113883.6.238",
          code: "1002-5",
          display: "American Indian or Alaska Native",
        },
      },
      {
        url: "ombCategory",
        valueCoding: {
          system: "urn:oid:2.16.840.1.113883.6.238",
          code: "2028-9",
          display: "Asian",
        },
      },
      {
        url: "detailed",
        valueCoding: {
          system: "urn:oid:2.16.840.1.113883.6.238",
          code: "1586-7",
          display: "Shoshone",
        },
      },
      {
        url: "detailed",
        valueCoding: {
          system: "urn:oid:2.16.840.1.113883.6.238",
          code: "2036-2",
          display: "Filipino",
        },
      },
      {
        url: "text",
        valueString: "Mixed",
      },
    ],
  },
];
let usCoreRaceUrl =
"http://hl7.org/fhir/us/core/StructureDefinition/us-core-race";
let extensionUsCoreRaceEntry = mixedRaceExample.find(
(element) => element.url === usCoreRaceUrl
);
// console.log(extensionUsCoreRaceEntry);
// console.log("race example: ");
// console.log(extensionUsCoreRaceEntry != undefined);
extensionUsCoreRaceEntry = ethnicityExample.find(
(element) => element.url === usCoreRaceUrl
);
let femaleAtBirth = {
url: "http://hl7.org/fhir/us/core/StructureDefinition/us-core-birthsex",
valueCode: "F",
};
