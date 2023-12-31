// schema.js

export default {
  name: 'teacher',
  type: 'document',
  fields: [
          {
            name: 'departmentOrSubject',
            type: 'string',
            title: 'Department / Subject',
          },
          {
            name: 'name',
            type: 'string',
            title: 'Name',
          },
          {
            name: 'slug',
            type: 'slug',
            title: 'Slug',
            options: {
              source: 'name',
              slugify: (input) => input
                                  .toLowerCase()
                                  .replace(/\s+/g, '-')
                                  .slice(0, 200),
            },
          },
          {
            name: 'age',
            type: 'number',
            title: 'Age',
          },
          {
            name: 'photo',
            type: 'image',
            title: 'Photo',
            options: {
              hotspot: true,  // Enables the hotspot feature
            },
          },
          {
            name: 'nickname',
            type: 'string',
            title: 'Nickname',
          },
          {
            name: 'degree',
            type: 'string',
            title: 'Degree',
          },
          {
            name: 'professionalQualificationsAndCertifications',
            type: 'array',
            of: [{ type: 'string' }],
            title: 'Professional Qualifications and Certifications',
          },
          {
            name: 'professionalExperience',
            type: 'text',
            title: 'Professional Experience',
          },
          {
            name: 'fieldOfExpertise',
            type: 'array',
            of: [{ type: 'string' }],
            title: 'Field of Expertise',
          },
        ],
      };
      
  