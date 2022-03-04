// @import "node_modules/@glidejs/glide/src/assets/sass/glide.core";
// @import "node_modules/@glidejs/glide/src/assets/sass/glide.theme";

const app = {
  initialize: () => {
    app.client = contentful.createClient({
      // This is the space ID. A space is like a project folder in Contentful terms
      space: "j6qroma1nzt6",
      // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
      accessToken: "kQRQk8egI61ESWOCURcqisF5tscvMTg_0do5SGipbTs"
    });
  },


  //fetch a particular project
  // getEntry: entry => {
  //   // a known issue with the contentful library is that embedded images are ignored in rich text
  //   // this is the current workaround: https://github.com/contentful/rich-text/issues/61
  //   const options = {
  //     renderNode: {
  //         'embedded-asset-block': ({ data: { target: { fields }}}) => {
  //           debugger;
  //           return `<img src="${fields.file.url}" height="${fields.file.details.image.height}" width="${fields.file.details.image.width}" alt="${fields.description}"/>`;
  //         }
  //     }
  //   };
  //   app.client.getEntry(entry).then(project => {
  //     const projectData = {
  //       //className: project.fields.classname,
  //       //link: project.fields.link,
  //       imageSrc: `http:${project.fields.image.fields.file.url}`,
  //       title: project.fields.title,
  //       //id: "mushroom",
  //       materials: project.fields.image.fields.materials,
  //       //description: documentToHtmlString(project.fields.description, options) // passing in the options obj i created above for the bug
  //     };
  //     //debugger;
  //     // load the template for this item from a local file
  //     fetch('projectPage.mustache')
  //       .then(response => response.text())
  //       .then(template => {
  //         // render the template with the data
  //         const rendered = Mustache.render(template, projectData);
  //         // add the element to the container
  //         $('#project').append(rendered);
  //       }
  //     );
  //   });
  //   },

  getAllEntries: async () => {
    // first make sure we have our template loaded
    // i can use the word await along with async to pause the program until this function is finished
    const template = await app.loadTemplateForProjectOnHome();
    // fetch all entries

    app.client.getEntries({content_type:"work"}).
      then(response => {
      // go through each one]

      response.items.forEach(project => {
        // pull out the data you're interested in

        const projectData = {
          className: project.fields.classname,
          link:  project.fields.link,
          imageSrc: `http:${project.fields.image.fields.file.url}`,
          title: project.fields.title,
          id: project.fields.id,
          materials: project.fields.materials,
        };
        const rendered = Mustache.render(template, projectData);
        // add the element to the container
        $('#picWrap').append(rendered);
        //debugger;
        $()
      });
    });
  },





  loadTemplateForProjectOnHome: () => fetch('galleryTemplate.mustache').then(response => response.text()).then(template => template)

  // loadTemplateForProjectOnHome2: () => fetch('gallerytemplate2.mustache').then(response2 => response2.text()).then(template2 => template2)
  // getAllEntries_2: async () => {
  //   // first make sure we have our template loaded
  //   // i can use the word await along with async to pause the program until this function is finished
  //   const template2 = await app.loadTemplateForProjectOnHome();
  //   // fetch all entries
  //
  //   app.client.getEntries({content_type:"web_design"}).
  //     then(response => {
  //     // go through each one]
  //
  //     response.items.forEach(web_design => {
  //       // pull out the data you're interested in
  //
  //       const webData = {
  //         className: web_design.fields.classname,
  //         link:  web_design.fields.link,
  //         imageSrc: `http:${web_design.fields.image.fields.file.url}`,
  //         title: web_design.fields.title,
  //         id: web_design.fields.id,
  //       };
  //       const rendered = Mustache.render(template2, webData);
  //       // add the element to the container
  //       $('#figmaWork').append(rendered);
  //       //debugger;
  //     });
  //   });
  // },
  //
  // loadTemplateForProjectOnHome: () => fetch('gallerytemplate2.mustache').then(response => response.text()).then(template2 => template2)
  };



// const app2 = {
//   initialize: () => {
//     app2.client = contentful.createClient({
//       // This is the space ID. A space is like a project folder in Contentful terms
//       space: "j6qroma1nzt6",
//       // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
//       accessToken: "kQRQk8egI61ESWOCURcqisF5tscvMTg_0do5SGipbTs"
//     });
//   },
