const rp = require('request-promise');



      const customFolderName = 'some_custom_folder'; // You need to define this variable

      const options = {
        uri: 'https://www.icicicareers.com/CareerImageslive/api/Upload',
        method: 'POST',
        formData: {
          folder: path,
          f: {
            value: fileInfo.buffer,
            options: {
              filename: "vikash",
              contentType: null,
            },
          },
          RootFolderPath: `procdoc/ALUMNIA/PFONLINE/${customFolderName}`, // Add RootFolderPath
          DocumentDataDefList: `<DocDataDefinition><DataClassDoc>ALUMNIA_DOCUMENT</DataClassDoc><DocField><DocIndexName>EmpID</DocIndexName><DocIndexId>617</DocIndexId><DocIndexValue>${record.EMPL_ID}</DocIndexValue><DocIndexType>S</DocIndexType></DocField></DocDataDefinition>`,
          FolderDataDefList: `<DataDefinition><DataClassNamFold>ALUMNIA_FOLDER</DataClassNamFold><Field><IndexName>EmpID</IndexName><IndexId>615</IndexId><IndexValue>${record.EMPL_ID}</IndexValue><IndexType>S</IndexType></Field></DataDefinition>`,
          CabinetName: 'procdoc',
          UserDBId: responce.NGOConnectCabinet_Output.UserDBIds, // Typo: responce should be response
          jtsIpAddress: '10.50.75.21',
          jtsPort: '7801',
          DocumentName: 'APPFORM',
          VersionFlag: 'N',
        },
        proxy: { hostname: '192.168.119.111', port: '80' },
        json: true,
      };

      let response = await rp(options);
      console.log(response);

      if (response.StatusCode == 100) {
        req.body[fieldName] = response.Data;
      } else {
        req.body[fieldName] = '';
      }


