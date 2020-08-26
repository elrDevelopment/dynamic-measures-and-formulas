export const SERVER_DATA = [
      {
        meta:[{
          measureName: 'Lighting'
        }],
        globals: [{
          type:'text',
          name:'location',
          validators:{
            required:true
          },
            ui:{label:'Location',placeholder:'Enter a Location'}
          },
          {
          type:'text',
          name:'ceilingHeight',
          validators:{
            required:true
          },
            ui:{label:'Ceiling Height',placeholder:'Enter ceiling '}
          }
          ],
        existing: [{
        type:'text',
        name:'measureDescription',
        validators:{
          required:true
        },
        ui:{label:'Measure Description',placeholder:'Enter Measure Description'}
      },
      {
        type:'select',
        name:'country',
        ui:{label:'Country',placeholder:'Select...'},
        validators:{
          required:true
        },
        source:[{value:1,text:'India'},{value:2,text:'Canada'}, {value:1,text:'USA'}]
      },
      {
        type:'select',
        name:'state',
        validators:{
          required:{conditionalExpression:"x => x.country != undefined && x.country != null"}
        },
        ui:{label:'State',placeholder:'Select...'},
        modelName:'state',
        filter:[{value:1,text:'Gujarat',countryId:1},{value:2,text:'Ontario',countryId:2}, ,{value:3,text:'Massachusetts',countryId:3}]
      },
      {
        type:'textarea',
        name:'permanentAddress',
        ui:{label:'Permanent Address',placeholder:'Enter Your Permanent Address'}
      },
      {
        type:'checkbox',
        name:'sameAsPermanent',
        modelName:'sameAsAddress',
        source:[{value:1,text:'Same As Permanent'}]
      },
      {
        type:'textarea',
        name:'correspondenceAddress',
        ui:{label:'Correspondence Address',placeholder:'Enter Your Correspondence Address'}
      }],
      replacements: [

      ]
      }
    ]