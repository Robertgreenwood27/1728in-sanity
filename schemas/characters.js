export default {
    name: 'character',
    title: 'Character',
    type: 'document',
    fields: [
      // Personal Information
      {
        name: 'fullName',
        title: 'Full Name',
        type: 'object',
        fields: [
          { name: 'firstName', title: 'First Name', type: 'string' },
          { name: 'lastName', title: 'Last Name', type: 'string' }
        ]
      },
      {
        name: 'age',
        title: 'Age',
        type: 'number'
      },
      {
        name: 'photo',
        title: 'Photo',
        type: 'image',
        options: {
          hotspot: true
        }
      },
      {
        name: 'nickname',
        title: 'Nickname/Alias',
        type: 'string'
      },
  
      // Educational Background
      {
        name: 'education',
        title: 'Educational Background',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'degree', title: 'Degree', type: 'string' },
              { name: 'institution', title: 'Institution', type: 'string' },
              { name: 'yearObtained', title: 'Year Obtained', type: 'date' },
              { name: 'honors', title: 'Honors/Awards', type: 'string' }
            ]
          }
        ]
      },
  
      // Professional Qualifications/Certifications
      {
        name: 'certifications',
        title: 'Professional Qualifications/Certifications',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'certification', title: 'Certification', type: 'string' },
              { name: 'institution', title: 'Institution/Organization', type: 'string' },
              { name: 'yearObtained', title: 'Year Obtained', type: 'date' },
              { name: 'validity', title: 'Validity', type: 'string' }
            ]
          }
        ]
      },
  
      // Professional Experience
      {
        name: 'experience',
        title: 'Professional Experience',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'position', title: 'Position', type: 'string' },
              { name: 'company', title: 'Company/Organization', type: 'string' },
              { name: 'duration', title: 'Duration', type: 'string' },
              {
                name: 'responsibilities',
                title: 'Key Responsibilities',
                type: 'array',
                of: [{ type: 'string' }]
              }
            ]
          }
        ]
      },
  
      // Fields of Expertise
      {
        name: 'expertise',
        title: 'Fields of Expertise',
        type: 'array',
        of: [{ type: 'string' }]
      },
  
      // Notable Achievements
      {
        name: 'achievements',
        title: 'Notable Achievements',
        type: 'array',
        of: [
          {
            type: 'object',
            fields: [
              { name: 'achievement', title: 'Achievement', type: 'string' },
              { name: 'description', title: 'Description', type: 'text' }
            ]
          }
        ]
      },
  
      // Personal Traits
      {
        name: 'traits',
        title: 'Personal Traits',
        type: 'array',
        of: [{ type: 'string' }]
      },
  
      // General Perspective on Field/Topic
      {
        name: 'perspective',
        title: 'General Perspective on Field/Topic',
        type: 'text'
      }
    ]
  };
  